import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CommentType } from '../types/CommentType';
import { ErrorText } from '../types/ErrorText';
import { getComments, deleteComment, addComment } from '../api';

type commentsStateType = {
  comments: CommentType[],
  loading: boolean,
  error: ErrorText,
};

const initialState: commentsStateType = {
  comments: [],
  loading: false,
  error: ErrorText.NONE,
};

export const init = createAsyncThunk('comments/fetch', () => getComments());
export const remove = createAsyncThunk('comments/fetchDelete', (id: number) => deleteComment(id));
export const add = createAsyncThunk('comments/fetchAdd', (comment: string) => addComment(comment));

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<CommentType[]>) => {
      return { ...state, comments: action.payload };
    },
    setError: (state, action: PayloadAction<ErrorText>) => {
      return { ...state, error: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      return ({ ...state, loading: true });
    });

    builder.addCase(init.fulfilled, (state, action) => {
      return ({ ...state, comments: action.payload.comments, loading: false });
    });

    builder.addCase(init.rejected, (state) => {
      return ({ ...state, error: ErrorText.LOAD_COMMENTs, loading: false });
    });

    builder.addCase(remove.pending, (state) => {
      return ({ ...state, loading: true });
    });

    builder.addCase(remove.fulfilled, (state, action) => {
      return ({
        ...state,
        loading: false,
        comments: state.comments.filter(comment => (action.payload.id
          ? comment.id !== action.payload.id
          : comment.id !== +action.payload.message.match(/\d+/)[0])),
      });
    });

    builder.addCase(remove.rejected, (state) => {
      return ({ ...state, error: ErrorText.DELETE_COMMENT, loading: false });
    });

    builder.addCase(add.pending, (state) => {
      return ({ ...state, loading: true });
    });

    builder.addCase(add.fulfilled, (state, action) => {
      return ({
        ...state,
        loading: false,
        comments: [...state.comments, action.payload],
      });
    });

    builder.addCase(add.rejected, (state) => {
      return ({ ...state, error: ErrorText.ADD_COMMENT, loading: false });
    });
  },
});

export default commentsSlice.reducer;
export const { actions } = commentsSlice;
