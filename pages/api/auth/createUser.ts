import type { NextApiRequest, NextApiResponse } from 'next';

import { create } from '../../../src/server/auth';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.userName) {
    res.status(400).json({ error: 'Missing userName!' });
  } else {
    const user = create({
      name: decodeURIComponent(req.query.userName as string),
    });
    res.status(200).json(user);
  }
};
