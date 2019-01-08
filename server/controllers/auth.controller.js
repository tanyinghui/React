/* eslint-disable linebreak-style */
import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import logger from '../config/winston';

/**
 * Returns jwt token if valid phone is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function login(req, res) {
    const {phone} = req.body;
    User.query({
        where: {phone: phone},
    }).fetch().then(user => {
        if (user) {
            const token = jwt.sign({
                id: user.get('id'),
                phone: user.get('phone')
            }, process.env.TOKEN_SECRET_KEY);

            res.json({
                success: true,
                token,
                phone:  user.get('phone')
            });
        } else {
            logger.log('error', 'Invalid user.');

            res.status(HttpStatus.UNAUTHORIZED).json({
                success: false, message: 'User not found.'
            });
        }
    });
}