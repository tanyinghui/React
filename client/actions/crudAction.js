import * as commonAction from './commonAction';
import * as httpService from '../services/httpService';
import { MACHINEURL } from '../constants/entity.js'


export function machineControl(entity, data, url = MACHINEURL) {
    return function (dispatch) {
        return httpService.data(entity, data, url)
        .catch((error) => {
            dispatch(commonAction.failure(error));
        });
    };
}


export function storePhone(entity, data) {
    return function (dispatch) {
        return httpService.data(entity, data)
        .catch((error) => {
            dispatch(commonAction.failure(error));
        });
    };
}

export function storeDeliverer(entity, data) {
    data.deliverer = data.phone;
    return function (dispatch) {
        return httpService.data(entity, data)
        .catch((error) => {
            dispatch(commonAction.failure(error));
        });
    };
}

export function storeAnother(entity, data) {
    return function (dispatch) {
        return httpService.data(entity, data)
        .catch((error) => {
            dispatch(commonAction.failure(error));
        });
    };
}

export function storeReceipent(entity, data) {
    data.receipent = data.phone;
    return function (dispatch) {
        return httpService.data(entity, data)
        .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function storeBoxReceipent(entity, data) {
    return function (dispatch) {
        return httpService.data(entity, data)
        .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function checkdata(entity, data) {
    data.receipent = data.phone
    return function (dispatch) {
        return httpService.data(entity, data)
        .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}