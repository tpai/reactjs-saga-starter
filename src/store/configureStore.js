import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';
import createSaga from 'redux-saga';
import createLogger from 'redux-logger';

const saga = createSaga();
const logger = createLogger();

import reducers from 'reducers/';
import sagas from 'sagas/';

let middleware = [saga];
__DEVELOPMENT__ && middleware.push(logger); // eslint-disable-line no-undef

const configureStore = initialState => {
    const store = createStore(
        combineReducers(reducers),
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    saga.run(sagas);
    return store;
}

export default configureStore;
