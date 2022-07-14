import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Page from '../../src/components/layout/Page';
import RequireAuth from '../../src/components/auth/RequireAuth';
import { GameProvider } from '../../src/hooks/useGame';
import Game from '../../src/components/game/Game';

const GamePage: NextPage = () => {
  return (
    <Page>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          <RequireAuth>
            <GameProvider>
              <Game />
            </GameProvider>
          </RequireAuth>
        </Box>
      </Container>
    </Page>
  );
};

export default GamePage;
