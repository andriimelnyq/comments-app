import { configureStore } from '@reduxjs/toolkit';
import commentsSlice from '../features/comments';

export const store = configureStore({
  reducer: {
    comments: commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
