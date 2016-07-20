import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';

import {
    fetchTodosAPI,
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILED,
    addTodoAPI,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILED,
    toggleTodoAPI,
    TOGGLE_TODO,
    TOGGLE_TODO_SUCCESS,
    TOGGLE_TODO_FAILED,
    clearAllAPI,
    CLEAR_ALL,
    CLEAR_ALL_SUCCESS,
    CLEAR_ALL_FAILED,
    clearCompletedAPI,
    CLEAR_COMPLETED,
    CLEAR_COMPLETED_SUCCESS,
    CLEAR_COMPLETED_FAILED
} from 'actions/todos';

export function* fetchTodos() {
    try {
        const payload = yield call(fetchTodosAPI);
        yield put({ type: FETCH_TODOS_SUCCESS, payload });
    } catch (err) {
        yield put({ type: FETCH_TODOS_FAILED });
    }
}

export function* watchFetchTodos() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
}

export function* addTodo(action) {
    try {
        yield call(addTodoAPI, action.req);
        yield put({ type: ADD_TODO_SUCCESS });
        yield fork(fetchTodos);
    } catch (err) {
        yield put({ type: ADD_TODO_FAILED });
    }
}

export function* watchAddTodo() {
    yield takeLatest(ADD_TODO, addTodo);
}

export function* toggleTodo(action) {
    try {
        yield call(toggleTodoAPI, action.req);
        yield put({ type: TOGGLE_TODO_SUCCESS });
        yield fork(fetchTodos);
    } catch (err) {
        yield put({ type: TOGGLE_TODO_FAILED });
    }
}

export function* watchToggleTodo() {
    yield takeLatest(TOGGLE_TODO, toggleTodo);
}

export function* clearAll(action) {
    try {
        yield action.todos.map(function* (todo) {
            yield call(clearAllAPI, todo);
        });
        yield put({ type: CLEAR_ALL_SUCCESS });
        yield fork(fetchTodos);
    } catch (err) {
        yield put({ type: CLEAR_ALL_FAILED });
    }
}

export function* watchClearAll() {
    yield takeLatest(CLEAR_ALL, clearAll);
}

export function* clearCompleted(action) {
    try {
        yield action.todos.map(function* (todo) {
            if(todo.done)
                yield call(clearCompletedAPI, todo);
        });
        yield put({ type: CLEAR_COMPLETED_SUCCESS });
        yield fork(fetchTodos);
    } catch (err) {
        yield put({ type: CLEAR_COMPLETED_FAILED });
    }
}

export function* watchClearCompleted() {
    yield takeLatest(CLEAR_COMPLETED, clearCompleted);
}
