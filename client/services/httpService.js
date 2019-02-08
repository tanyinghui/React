import { store } from '../utils/httpUtil';

import { API_URL } from '../config/config';

export function data(entityName, data, URL = API_URL) {
    return store(URL, entityName.toLowerCase(), data);
}