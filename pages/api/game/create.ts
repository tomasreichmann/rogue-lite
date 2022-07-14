import type { NextApiRequest, NextApiResponse } from 'next';

import { create } from '../../../src/server/games';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.authorId) {
    res.status(400).json({ error: 'invalid authorId' });
  } else {
    const game = create(req.query.authorId as string);
    res.redirect('/game/' + game.id);
  }
};
