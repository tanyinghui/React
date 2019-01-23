import HttpStatus from 'http-status-codes';
import Box from '../models/box_status.model';
import Deliver from '../models/transaction.model';
import knex from '../config/knex';

export function storeBoxReceipent(req, res) {
    let path = '';
    const {receipent, id} = req.body;
    knex('box_status')
    .where('object_id','')
    .then(box => {
        if (box.length > 0) {
            path = '/deliverparcel';
            knex('box_status').where({shelf_id: box[0].shelf_id})
            .update({receipent: receipent, object_id: id, created_at: new Date(), updated_at: new Date()})
            .then(res.json(path))
            .catch(err => console.log(error)
            );
        } else {
            path = '/full';
            res.json(path);
        }
    });
}

export function checkBoxData(req, res) {
    let checkpath = '';
    const { receipent } = req.body;
    Box.query({
        where: {receipent: receipent},
    }).fetch().then(box => {
        if (box) {
            Deliver.where({object_id:box.attributes.object_id}).save({activity: 'Collected', updated_at: new Date()}, {patch: true})
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({error: err}));
            Box.where({receipent:receipent}).save({object_id: '', updated_at: new Date()}, {patch:true})
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({error: err}));
            checkpath = '/collectparcel';
        } else {
            checkpath = '/noparcelfound'
        }
        res.json(checkpath)
    });
}