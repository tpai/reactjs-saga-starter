import React, { Component, PropTypes } from 'react';

import * as style from './style';

export default class TodoClear extends Component {
    static propTypes = {
        todos: PropTypes.shape({
            status: PropTypes.string.isRequired,
            data: PropTypes.array.isRequired
        }),
        clearAll: PropTypes.func.isRequired,
        clearCompleted: PropTypes.func.isRequired
    }
    onClearAllClick = () => {
        const {
            todos,
            clearAll
        } = this.props;
        clearAll(todos);
    }
    onClearCompletedClick = () => {
        const {
            todos,
            clearCompleted
        } = this.props;
        clearCompleted(todos);
    }
    render() {
        const { button } = style;
        return (
            <div>
                <button type="button" className={button} onClick={this.onClearAllClick}>Clear All</button>
                <button type="button" className={button} onClick={this.onClearCompletedClick}>Clear Completed</button>
            </div>
        )
    }
}
