import { DELIVER, COLLECT, NO_COLLECT, NEW_USER } from '../constants/entity';

var initialState = {
    intention: null,
    newCustomer: false,
    previouspage: null,
    parcel_count: 0
};

// Reducer will take 2 arguments, which are current state and action.

export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case DELIVER:
            return Object.assign({}, state, {
                intention: 'Deliver',
            });
        case COLLECT:
            return Object.assign({}, state, {
                intention: 'Collect',
            });
        case NO_COLLECT:
            return Object.assign({}, state, {
                intention: 'Collect',
                parcel_count: 0,
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