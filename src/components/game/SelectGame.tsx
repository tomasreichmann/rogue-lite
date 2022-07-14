import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '../Button';
import GameList from '../game/GameList';
import { useUser } from '../../hooks/useUser';

export default function SelectGame() {
  const { user } = useUser();
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Coop Rogue-Lite Deckbuilding Card Game
      </Typography>
      <GameList />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {user && (
          <Button
            href={'/api/game/create?authorId=' + user.id}
            color="primary"
            variant="contained"
          >
            Create new game
          </Button>
        )}
      </Box>
      <Typography variant="subtitle" component="pre" gutterBottom>
        user: {JSON.stringify(user, null, 2)}
      </Typography>
    </>
  );
}
