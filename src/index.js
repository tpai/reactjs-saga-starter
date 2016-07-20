import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './AppRouter';

const configureStore = require('store/configureStore').default;
const store = configureStore({});

render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.querySelector('.container')
);
