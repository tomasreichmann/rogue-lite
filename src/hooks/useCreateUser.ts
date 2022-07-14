import useSWR from 'swr';
import { User } from '../types/user';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCreateUser(userName: string) {
  const userNameEncoded = encodeURIComponent(userName);
  return useSWR('/api/auth/createUser?userName=' + userNameEncoded, fetcher);
}
