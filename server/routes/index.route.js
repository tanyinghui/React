import express from 'express';
import userRoutes from './user.route';
import devRoutes from './devroute';
import recRoutes from './rec.route';
import boxrecRoutes from './boxrec.route';
import colRoutes from './collect.route';

const router = express.Router();

router.use('/customer', userRoutes);

router.use('/deliverer', devRoutes);

router.use('/receipent', recRoutes);

router.use('/boxreceipent', boxrecRoutes);

router.use('/collect', colRoutes);

export default router;