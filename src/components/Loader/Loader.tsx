import { CircularProgress } from '@mui/material';
import React from 'react';
import './Loader.scss';

type Props = {
  card?: boolean,
};

export const Loader: React.FC<Props> = () => (
  <div className="loader">
    <CircularProgress
      sx={{
        margin: 'auto',
      }}
    />
  </div>
);
