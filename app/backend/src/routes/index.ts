import { Router } from 'express';
import teamRouter from './team.router';
import loginRouter from './login.router';
import matcheRouter from './matches.router';
import leaderboardRouter from './Leaderboard.router';

const router = Router();

router.use('/leaderboard', leaderboardRouter);
router.use('/matches', matcheRouter);
router.use('/teams', teamRouter);
router.use('/login', loginRouter);

export default router;
