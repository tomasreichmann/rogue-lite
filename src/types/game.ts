export type GamePlayer = {
  userId: string;
  name: string;
};

export type Game = {
  id: string;
  name: string;
  created: number;
  authorId: string;
  players: { [key: string]: GamePlayer };
};
