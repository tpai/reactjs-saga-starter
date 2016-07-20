import { fetchOpts } from 'utils/api';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED';

export const fetchTodosAPI = () =>
    fetch(`${__API_HOST__}/tasks`) // eslint-disable-line no-undef
    .then(res => res.json())

export const fetchTodos = () => ({
    type: FETCH_TODOS
})

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILED = 'ADD_TODO_FAILED';

export const addTodoAPI = req =>
    fetch(`${__API_HOST__}/tasks`, fetchOpts('POST', req)) // eslint-disable-line no-undef

export const addTodo = req => ({
    type: ADD_TODO,
    req
})

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
export const TOGGLE_TODO_FAILED = 'TOGGLE_TODO_FAILED';

export const toggleTodoAPI = req =>
    fetch(`${__API_HOST__}/tasks/${req.id}`, fetchOpts('PUT', req)) // eslint-disable-line no-undef

export const toggleTodo = req => ({
    type: TOGGLE_TODO,
    req
})

export const CLEAR_ALL = 'CLEAR_ALL';
export const CLEAR_ALL_SUCCESS = 'CLEAR_ALL_SUCCESS';
export const CLEAR_ALL_FAILED = 'CLEAR_ALL_FAILED';

export const clearAllAPI = todo =>
    fetch(`${__API_HOST__}/tasks/${todo.id}`, fetchOpts('DELETE')) // eslint-disable-line no-undef

export const clearAll = todos => ({
    type: CLEAR_ALL,
    todos
})

export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const CLEAR_COMPLETED_SUCCESS = 'CLEAR_COMPLETED_SUCCESS';
export const CLEAR_COMPLETED_FAILED = 'CLEAR_COMPLETED_FAILED';

export const clearCompletedAPI = todo =>
    fetch(`${__API_HOST__}/tasks/${todo.id}`, fetchOpts('DELETE')) // eslint-disable-line no-undef

export const clearCompleted = todos => ({
    type: CLEAR_COMPLETED,
    todos
})
