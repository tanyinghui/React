import HttpStatus from 'http-status-codes';
import Deliver from '../models/transaction.model';

export function storeDeliverer(req, res) {
    const {deliverer} = req.body;
    Deliver.query(
        {where: {deliverer:deliverer}}
    ).fetch().then(() => {
        Deliver
        .forge()
        .save({deliverer},{method:'insert'})
        .then(deliver => 
            res.json({
                success: true,
                data: deliver.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
    })
}

export function storeReceipent(req, res) {
    const {receipent, id} = req.body;
    Deliver.query({
        where: {object_id: id},
    }).fetch().then(deliver => {
        if (deliver) {
            Deliver
            .where({object_id: id})
            .save({receipent: receipent, updated_at: new Date()},{patch:true})
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err})
            );
        } else {
            console.log('Undefined action.')
        }
    });
}