import axios from 'axios';

export function store(url, endpoint, data) {
    return axios
        .post(url + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    );
}