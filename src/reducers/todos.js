import {
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILED
} from 'actions/todos';

const reducer = (state = {
    status: 'default',
    data: []
}, action) => {
    switch (action.type) {
    case FETCH_TODOS:
        return Object.assign({}, state, {
            status: 'loading'
        });
    case FETCH_TODOS_SUCCESS:
        return Object.assign({}, state, {
            status: 'loaded',
            data: action.payload
        });
    case FETCH_TODOS_FAILED:
        return Object.assign({}, state, {
            status: 'failed'
        });
    default:
        return state;
    }
}

export default reducer;
