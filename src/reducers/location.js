import {
    FETCH_LOCATION,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATION_FAILED
} from 'actions/location';

const reducer = (state = {
    status: 'default',
    data: ''
}, action) => {
    switch (action.type) {
    case FETCH_LOCATION:
        return Object.assign({}, state, {
            status: 'loading'
        });
    case FETCH_LOCATION_SUCCESS:
        return Object.assign({}, state, {
            status: 'loaded',
            data: `@${action.payload.YourFuckingLocation.split(',')[0]}`
        });
    case FETCH_LOCATION_FAILED:
        return Object.assign({}, state, {
            status: 'failed'
        });
    default:
        return state;
    }
}

export default reducer;
