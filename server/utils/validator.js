import Joi from 'joi';

export default {
    storeUser: {
        body: {
            phone: Joi.string().min(8).required()
        }
    },

    updateUser: {
        body: {
            phone: Joi.string().min(8).required()
        },
        params: {
            userId: Joi.string().hex().required()
        }
    },

    login: {
        body: {
            phone: Joi.string().min(8).required()
        }
    }
};