import React, { useEffect } from 'react';
import './App.scss';
import { Alert, Snackbar, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from './app/hooks';
import * as commentActions from './features/comments';
import { Loader } from './components/Loader';
import { ErrorText } from './types/ErrorText';
import { CommentsList } from './components/CommentsList';
import { TextArea } from './components/TextArea';

export const App: React.FC = () => {
  const { loading, error, comments } = useAppSelector(state => state.comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(commentActions.init());
  }, []);

  return (
    <>
      {loading && <Loader />}

      <div className="app">
        <Typography variant="h2" align="center" color="primary">
          {comments.length === 0
            ? 'No comments yet'
            : 'All comments'}
        </Typography>

        <CommentsList />

        <TextArea />
      </div>

      <Snackbar
        open={error !== ErrorText.NONE}
        autoHideDuration={5000}
        onClose={() => dispatch(commentActions.actions.setError(ErrorText.NONE))}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="error">
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};
