import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActions from 'actions/todos';

import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';
import TodoClear from 'components/TodoClear';

import * as style from './style';

class Index extends Component {
    static propTypes = {
        todos: PropTypes.shape({
            status: PropTypes.string.isRequired,
            data: PropTypes.array.isRequired
        }),
        actions: PropTypes.object.isRequired
    };
    render() {
        const { section } = style;
        const {
            actions,
            todos
        } = this.props;
        const {
            addTodo,
            toggleTodo,
            clearAll,
            clearCompleted
        } = actions;
        return (
            <div>
                <section className={section}>
                    <TodoInput
                        addTodo={addTodo} />
                </section>
                <TodoList
                    todos={todos}
                    toggleTodo={toggleTodo} />
                <section className={section}>
                    <TodoClear
                        todos={todos}
                        clearAll={clearAll}
                        clearCompleted={clearCompleted} />
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
