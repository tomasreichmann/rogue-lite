import { v4 as uuidv4 } from 'uuid';
import { Game, GamePlayer } from '../types/game';
console.log('server/games init');
const games = new Map();

const createPlayer = (
  player: Partial<GamePlayer> & Pick<GamePlayer, 'userId'>
): GamePlayer => {
  return {
    name: 'New player ' + player.userId,
    ...player,
  };
};

const createGame = (game: Partial<Game> & Pick<Game, 'authorId'>): Game => {
  const id = uuidv4();
  return {
    id,
    name: 'New game ' + id,
    created: new Date().getTime(),
    players: { [game.authorId]: createPlayer({ userId: game.authorId }) },
    ...game,
  };
};

export function create(authorId: string) {
  const game = createGame({ authorId });
  games.set(game.id, game);
  return game;
}

export function get(gameId: string) {
  return games.get(gameId);
}

export function list(filter?: string) {
  let gameList = Array.from(games.values());
  console.log('gameList unfiltered', gameList);
  if (filter) {
    gameList = gameList.filter((game) => game.name.includes(filter));
  }
  gameList.sort(({ name: nameA }, { name: nameB }) => {
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
  return gameList;
}

export default games;
