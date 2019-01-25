import { DELIVER, COLLECT, NEW_USER } from '../constants/actionType';

var initialState = {
    intention: null,
    newCustomer: false,
    parcel_count: 0,
};

// Reducer will take 2 arguments, which are current state and action.

export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case DELIVER:
            return Object.assign({}, state, {
                intention: 'Deliver',
                id: action.id,
                parcel_count: 1,
                deliverer: action.deliverer
            });
        case COLLECT:
            return Object.assign({}, state, {
                intention: 'Collect',
            });
        case NEW_USER:
            return Object.assign({}, state, {
                newCustomer: true,
                parcel_count: 0,
            });
            default:
                return state;
    }
}