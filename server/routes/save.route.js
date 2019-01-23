import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import * as transCtrl from '../controllers/transaction.controller';
import * as boxCtrl from '../controllers/boxstatus.controller';

const saveRoutes = express.Router();

saveRoutes.route('/customer')
    .post((req, res) => {
        userCtrl.check(req, res);
})

saveRoutes.route('/deliverer')
    .post((req, res) => {  
        transCtrl.storeDeliverer(req, res);
})

saveRoutes.route('/receipent')
    .post((req, res) => {  
        transCtrl.storeReceipent(req, res);
})

saveRoutes.route('/boxreceipent')
    .post((req, res) => {  
        boxCtrl.storeBoxReceipent(req, res);
})

export default saveRoutes;