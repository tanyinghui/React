import * as commonAction from './commonAction';
import * as httpService from '../services/httpService';

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