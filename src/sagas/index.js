import { watchFetchLocation } from './location';

import {
    watchFetchTodos,
    watchAddTodo,
    watchToggleTodo,
    watchClearAll,
    watchClearCompleted
} from './todos';

export default function* rootSaga() {
    yield [
        watchFetchLocation(),
        watchFetchTodos(),
        watchAddTodo(),
        watchToggleTodo(),
        watchClearAll(),
        watchClearCompleted()
    ]
}
