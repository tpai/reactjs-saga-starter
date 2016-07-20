import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Route,
    Router,
    IndexRoute,
    browserHistory
} from 'react-router';

import App from 'containers/App/';
import Todos from 'containers/Todos/';

import { fetchTodos } from 'actions/todos';
import { fetchLocation } from 'actions/location';

export default class AppRouter extends Component {
    static propTypes = {
        actions: PropTypes.shape({
            fetchTodos: PropTypes.func.isRequired,
            fetchLocation: PropTypes.func.isRequired
        })
    };
    init = () => {
        const {
            fetchTodos,
            fetchLocation
        } = this.props.actions;
        setTimeout(fetchTodos, 1000);
        setTimeout(fetchLocation, 1000);
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route
                    path="/"
                    component={App}
                    onEnter={this.init}>
                    <IndexRoute component={Todos} />
                </Route>
            </Router>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            fetchTodos,
            fetchLocation
        }, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(AppRouter);
