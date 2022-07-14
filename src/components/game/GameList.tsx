import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import useFetchGameList from '../../hooks/useFetchGameList';

export type GameListProps = {
  filter?: string;
};

export default function GameList({ filter }: GameListProps) {
  const { data, error } = useFetchGameList(filter);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {data.length === 0 && (
        <Alert severity="warning">
          No available games yet. You can create a new one.
        </Alert>
      )}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Stack>
  );
}
