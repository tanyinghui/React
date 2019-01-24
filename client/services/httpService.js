import { store } from '../utils/httpUtil';

import { API_URL } from '../config/config';

export function data(entityName, data) {
    return store(API_URL, entityName.toLowerCase(), data);
}