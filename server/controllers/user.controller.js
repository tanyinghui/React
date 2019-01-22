import HttpStatus from 'http-status-codes';
import User from '../models/user.model';
import Deliver from '../models/transaction.model';
import Box from '../models/box_status.model'
import knex from '../config/knex';

export function storePhone(req, res) {
    const {phone} = req.body;

    User.forge({phone}, {hasTimestamps: true}).save()
        .then(user => res.json({
                success: true,
                data: user.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            })
        );
}

export function check(req, res) {
    const {phone} = req.body;
    User.query({
        where: {phone: phone},
    }).fetch().then(user => {
        if (user) {
            User
            .where({phone:phone})
            .save({updated_at: new Date()},{patch:true})
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: err})
            );
        } else {
            storePhone(req, res);
        }
    });
}

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

export function storeReceipentA(req, res) {
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

export function storeBoxReceipentA(req, res) {
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
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: err,
                })
            );
        } else {
            path = '/full';
            res.json(path);
        }
    });
    console.log('path');
    console.log(path)
}

export function checkBoxData(req, res) {
    let checkpath = '';
    const { receipent } = req.body;
    Box.query({
        where: {receipent: receipent},
    }).fetch().then(box => {
        if (box) {
            Box
            .where({receipent:receipent})
            .save({updated_at: new Date()},{patch:true})
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: err})
            );
            checkpath = '/collectparcel'
        } else {
            console.log('No Box found')
            checkpath = '/noparcelfound'
        }
        res.json(checkpath)
    });
}