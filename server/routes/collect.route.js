import express from 'express';
import * as boxCtrl from '../controllers/boxstatus.controller';

const router = express.Router();

router.route('/')
    .post((req, res) => {  
        boxCtrl.checkBoxData(req, res);
    })

export default router;