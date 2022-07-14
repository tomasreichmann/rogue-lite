import type { NextApiRequest, NextApiResponse } from 'next';

import { list } from '../../../src/server/games';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(list(req.query.q as string));
};
