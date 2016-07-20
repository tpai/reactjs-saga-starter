import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
    fetchLocationAPI,
    FETCH_LOCATION,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATION_FAILED
} from 'actions/location';

export function* fetchLocation() {
    try {
        const payload = yield call(fetchLocationAPI);
        yield put({ type: FETCH_LOCATION_SUCCESS, payload});
    } catch (err) {
        yield put({ type: FETCH_LOCATION_FAILED });
    }
}

export function* watchFetchLocation() {
    yield takeLatest(FETCH_LOCATION, fetchLocation);
}
