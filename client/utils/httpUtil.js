import axios from 'axios';

export function check(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}

export function checkBoxData(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}


export function storeDeliverer(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}

export function storeReceipentA(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}

export function storeBoxReceipentA(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'Authorization': 'Bearer' + ' ' + getToken()
            }
        });
}