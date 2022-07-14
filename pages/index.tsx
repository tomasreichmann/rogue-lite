import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '../src/components/Button';
import GameList from '../src/components/game/GameList';
import Page from '../src/components/layout/Page';
import RequireAuth from '../src/components/auth/RequireAuth';
import SelectGame from '../src/components/game/SelectGame';
import { useUser } from '../src/hooks/useUser';

const Home: NextPage = () => {
  const { user } = useUser();
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
            <SelectGame />
          </RequireAuth>
        </Box>
      </Container>
    </Page>
  );
};

export default Home;
