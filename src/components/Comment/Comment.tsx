import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { CommentType } from '../../types/CommentType';
import { useAppDispatch } from '../../app/hooks';
import * as commentActions from '../../features/comments';
import './Comment.scss';

type Props = {
  comment: CommentType;
};

export const Comment: React.FC<Props> = ({ comment }) => {
  const { id, user, body } = comment;
  const dispatch = useAppDispatch();

  const handleClickDelete = () => dispatch(commentActions.remove(id));

  return (
    <div className="comment">
      <div className="comment__header">
        <Typography className="comment__username" color="text.secondary">
          {user.username}
        </Typography>

        <div className="comment__button">
          <IconButton onClick={handleClickDelete}>
            <Close titleAccess="delete" />
          </IconButton>
        </div>
      </div>

      <Typography variant="body2">
        {body}
      </Typography>
    </div>

  );
};
