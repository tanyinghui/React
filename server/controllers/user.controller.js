import HttpStatus from 'http-status-codes';
import User from '../models/user.model';

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