import { Router } from 'express';
import teamRouter from './team.router';
import userRouter from './user.router';

const router = Router();

router.use('/teams', teamRouter);
router.use('/users', userRouter);

export default router;
