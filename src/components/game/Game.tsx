import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useGame } from '../../hooks/useGame';

export default function Game() {
  const { game } = useGame();
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Game
      </Typography>

      <Typography variant="inherit" component="pre" gutterBottom>
        game: {JSON.stringify(game, null, 2)}
      </Typography>
    </>
  );
}
