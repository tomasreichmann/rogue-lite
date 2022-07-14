import useSWR, { Fetcher } from 'swr';
import { Game } from '../types/game';

const fetcher: Fetcher<string, Game[]> = (url: string) =>
  fetch(url).then((res) => res.json());

export default function useFetchGameList(filter?: string) {
  const query = filter ? '?q=' + filter : '';
  return useSWR('/api/game/list' + query, fetcher);
}
