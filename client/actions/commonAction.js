import {
    FAILURE,
    DELIVER,
    COLLECT
} from '../constants/actionType';

export function deliver(id, deliverer) {
    return {
        type: DELIVER,
        id: id,
        deliverer: deliverer
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