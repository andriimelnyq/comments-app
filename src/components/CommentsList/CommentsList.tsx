import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Comment } from '../Comment';
import './CommentsList.scss';

export const CommentsList = () => {
  const { comments } = useAppSelector(state => state.comments);

  return (
    <div className="comments-list">
      {comments.map(comment => (
        <Comment
          key={comment.body}
          comment={comment}
        />
      ))}
    </div>
  );
};
