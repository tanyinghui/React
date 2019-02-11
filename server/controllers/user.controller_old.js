import HttpStatus from 'http-status-codes';
import User from '../models/user.model';
import Deliver from '../models/transaction.model';
import Box from '../models/box_status.model'

/**
 * Store new customer into table "customer"
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
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
            .save({update})
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

    Deliver.forge({deliverer}, {hasTimestamps: true}).save()
        .then(deliver => res.json({
                success: true,
                data: deliver.toJSON()
            })
        )
        .catch(
            err => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({error: err,})
                if(err.code =="ER_NO_REFERENCED_ROW_2"){
                    check(req, res).then(storeDeliverer(req, res))
                }
        }
        );
}

export function storeReceipentA(req, res) {
    const {receipent, deliverer} = req.body;

    Deliver.query({
        where: {deliverer: deliverer},
    }).fetch().then(deliver => {
        if (deliver) {
            Deliver
            .where({deliverer: deliverer})
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
    const {receipent} = req.body;

    Box.query({
        where: {receipent: receipent},
    }).fetch().then(box => {
        if (box) {
            console.log('Box is found')
        } else {
            Box.forge({receipent}, {hasTimestamps: true}).save()
                .then(box => res.json({
                        success: true,
                        data: box.toJSON()
                    })
                )
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: err,
                })
            );
        }
    });
}

export function checkBoxData(req, res) {
    let str1 = '';
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
            str1 = '/collectparcel'
        } else {
            console.log('No Box found')
            str1 = '/noparcelfound'
        }
        res.json(str1)
    });
}