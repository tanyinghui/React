import {
    FAILURE,
    DELIVER,
    COLLECT
} from '../constants/actionType';

export function deliver() {
    return {
        type: DELIVER
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