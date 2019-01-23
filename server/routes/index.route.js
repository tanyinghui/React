import express from 'express';
import saveRoutes from './save.route';
import colRoutes from './collect.route';

const router = express.Router();

router.use('/save', saveRoutes);

router.use('/collect', colRoutes);

export default router;