import React, { Component, PropTypes } from 'react';

import * as style from './style';

export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.shape({
            status: PropTypes.string.isRequired,
            data: PropTypes.array.isRequired
        }),
        toggleTodo: PropTypes.func.isRequired
    };
    onTodoClick = req => {
        const { toggleTodo } = this.props;
        toggleTodo(Object.assign({}, req, {
            done: !req.done
        }));
    }
    render() {
        const {
            todoList,
            todoItem
        } = style;
        const { todos } = this.props;
        return (
            <ul className={todoList}>
                {todos.status === 'default' && <li className={todoItem}>[YOUR_TODO_LIST]</li>}
                {todos.status === 'loading' && <li className={todoItem}>Fetching...</li>}
                {todos.status === 'loaded' && todos.data.map(todo =>
                    <li
                        key={todo.id}
                        className={todoItem}
                        onClick={() => this.onTodoClick(todo)}>
                        <span style={{ 'textDecoration': todo.done ? 'line-through' : 'none' }}>
                            {todo.title}
                        </span>
                    </li>
                )}
            </ul>
        )
    }
}
