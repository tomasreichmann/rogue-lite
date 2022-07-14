import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useUser } from '../../hooks/useUser';

export type RequireAuthProps = {};

export default function RequireAuth({
  children,
}: React.PropsWithChildren<RequireAuthProps>) {
  const [userName, setUserName] = useState('');
  const { user, createUser } = useUser();

  if (user) return <>{children}</>;
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning">You are not logged in</Alert>
      <TextField
        id="username"
        label="User name"
        variant="standard"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <Button
        onClick={() => createUser(userName)}
        variant="contained"
        color="primary"
        disabled={userName.length < 3}
      >
        Create user
      </Button>
    </Stack>
  );
}
