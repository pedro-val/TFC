import { Router } from 'express';
import teamRouter from './team.router';
import loginRouter from './login.router';
import matcheRouter from './matche.router';

const router = Router();

router.use('/matches', matcheRouter);
router.use('/teams', teamRouter);
router.use('/login', loginRouter);

export default router;
