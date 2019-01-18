import { check, storeDeliverer, storeReceipentA, storeBoxReceipentA, checkBoxData} from '../utils/httpUtil';

import {API_URL} from '../config/config';

export function storeEntityPhone(entityName, data) {
    return check(API_URL, entityName.toLowerCase(), data);
}

export function storeEntityDeliverer(entityName, data) {
    return storeDeliverer(API_URL, entityName.toLowerCase(), data);
}

export function storeEntityReceipent(entityName, data) {
    return storeReceipentA(API_URL, entityName.toLowerCase(), data);
}

export function storeEntityBoxReceipent(entityName, data) {
    return storeBoxReceipentA(API_URL, entityName.toLowerCase(), data);
}

export function checkBoxDataA(entityName, data) {
    return checkBoxData(API_URL, entityName.toLowerCase(), data);
}