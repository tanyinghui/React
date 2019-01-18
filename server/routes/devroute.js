import express from 'express';
import * as userCtrl from '../controllers/user.controller';

const router = express.Router();

router.route('/')
    .post((req, res) => {  
        userCtrl.storeDeliverer(req, res);
    })

export default router;