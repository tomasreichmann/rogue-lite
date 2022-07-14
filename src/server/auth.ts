import { v4 as uuidv4 } from 'uuid';

const users = new Map();

type User = {
  id: string;
  name: string;
};

const createUser = (user: Partial<User> & Pick<User, 'name'>): User => {
  return {
    id: user.id || uuidv4(),
    ...user,
  };
};

export function create(user: Partial<User> & Pick<User, 'name'>) {
  const newUser = createUser(user);
  users.set(newUser.id, newUser);
  console.log('server/auth create', Array.from(users.values()));
  return newUser;
}

export function get(userId: User['id']) {
  console.log('server/auth get', Array.from(users.values()));
  return users.get(userId);
}
