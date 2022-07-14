import { Game } from '../types/game';
import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
} from 'react';

import useSWR from 'swr';

const gameFetcher = (id: string) =>
  fetch('/api/game/' + id).then((res) => res.json());

export function useCreateUser(userName: string) {
  const userNameEncoded = encodeURIComponent(userName);
  return useSWR('/api/auth/createUser?userName=' + userNameEncoded, fetcher);
}

const gameContext = createContext({
  game: null as Game | null,
});

export function GameProvider({ children }: PropsWithChildren<{}>) {
  const [game, setGame] = useState<Game | null>(null);
  const { Provider } = gameContext;
  return <Provider value={{ game, setGame }}>{children}</Provider>;
}

export function useGame(id: string) {
  const { setGame, game } = useContext(gameContext);
  const swr = useSWR(id, gameFetcher);
  useEffect(() => {
    if (swr.data) {
      setGame(swr.data);
    }
  }, [swr.data]);
  return { game };
}
