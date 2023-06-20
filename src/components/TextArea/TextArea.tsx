import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import validator from 'validator';
import { useAppDispatch } from '../../app/hooks';
import * as commentActions from '../../features/comments';
import './TextArea.scss';

export const TextArea = () => {
  const dispatch = useAppDispatch();
  const [commentBody, setCommentBody] = useState('');
  const [isBodyTouched, setIsBodyTouched] = useState(false);

  const helperBodyTitle = () => {
    if (!commentBody) {
      return 'Body is required';
    }

    if (commentBody && commentBody.length < 10) {
      return 'Comment body must be at least 10 characters long';
    }

    if (commentBody && !validator.isAscii(commentBody)) {
      return 'Comment body can only contain ASCII characters';
    }

    return ' ';
  };

  const isValidateBody = helperBodyTitle() === ' ';

  const handleCommentBody = (event: { target: { value: string; }; }) => {
    setCommentBody(event.target.value as string);
  };

  const postCommentOnServer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await dispatch(commentActions.add(commentBody));

    if (response.payload) {
      setCommentBody('');
    }
  };

  useEffect(() => {
    const commentInStorage = localStorage.getItem('comment');

    if (commentInStorage) {
      setCommentBody(commentInStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comment', commentBody);
  }, [commentBody]);

  return (
    <form
      className="text-area"
      onSubmit={e => postCommentOnServer(e)}
    >
      <TextField
        required
        error={!isValidateBody && isBodyTouched}
        id="outlined-error-helper-text"
        placeholder="Write your comment"
        multiline
        rows={5}
        helperText={isBodyTouched ? helperBodyTitle() : ' '}
        value={commentBody}
        onChange={handleCommentBody}
        onFocus={() => setIsBodyTouched(true)}
      />

      <Button
        type="submit"
        disabled={!isValidateBody}
        variant="contained"
      >
        Add comment
      </Button>
    </form>
  );
};
