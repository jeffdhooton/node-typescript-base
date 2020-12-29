/** External Dependencies */
import express, { Request, Response } from 'express';

/** Internal Dependencies */
import { notImplemented } from './utils/notImplemented';

/** Create Express router for setting up all child routes */
const router = express.Router();

router.use('/', (req: Request, res: Response) => notImplemented('/', req, res));

export = router;
