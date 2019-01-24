import {
    FAILURE,
    DELIVER,
    COLLECT
} from '../constants/actionType';

export function deliver(id) {
    return {
        type: DELIVER,
        id: id
    }
}

export function collect() {
    return {
        type: COLLECT
    }
}

export function failure(error) {
    return {
        type: FAILURE,
        error: error
    }
}