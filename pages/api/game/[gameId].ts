import type { NextApiRequest, NextApiResponse } from 'next';

import { get } from '../../../src/server/games';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { gameId } = req.query;
  if (!gameId) {
    return res.status(400).json({ error: 'invalid authorId' });
  }
  const game = get(gameId as string);
  if (!game) {
    return res
      .status(400)
      .json({ error: 'Game with ID ' + gameId + ' does not exist!' });
  }
  return res.status(200).json(game);
};
