import React, { Component, PropTypes } from 'react';

import * as style from './style';

export default class Title extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };
    onTodoSubmit = e => {
        e.preventDefault();

        const { addTodo } = this.props;
        addTodo({
            title: this.refs.todo.value,
            done: false
        });
        this.refs.todo.value = "";
    }
    render() {
        const {
            form,
            todo
        } = style;
        return (
            <form className={form} onSubmit={this.onTodoSubmit}>
                <input
                    ref="todo"
                    type="text"
                    className={todo}
                    placeholder="What needs to be done?"
                    required />
            </form>
        )
    }
}
