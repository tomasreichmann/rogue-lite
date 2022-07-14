import useSWR from 'swr';
import { User } from '../types/user';
import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useCallback,
} from 'react';

const userContext = createContext({
  user: null as User | null,
  createUser: (userName: string) => {},
});

export function UserProvider({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState<User | null>(null);
  const { Provider } = userContext;
  const createUser = useCallback((userName: string) => {
    const userNameEncoded = encodeURIComponent(userName);
    fetch('/api/auth/createUser?userName=' + userNameEncoded).then((data) => {
      data.json().then((user) => {
        console.log('/api/auth/createUser', user);
        setUser(user as User);
      });
    });
  }, []);
  return <Provider value={{ user, createUser }}>{children}</Provider>;
}

export function useUser() {
  return useContext(userContext);
}
