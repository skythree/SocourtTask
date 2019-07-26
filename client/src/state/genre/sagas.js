import { put, takeLatest } from 'redux-saga/effects';
import actions from './actions'
import types from './types';

///I don't have database so I will mock some data here
const genre = ["Criminal", "History", "Science"]

function* getGenres() {
    try {
        // try to get data from server, api or database

        yield put(actions.getGenreSuccess(genre))
    } catch (error) {

    }
}

export default function* rootSaga() {
    yield takeLatest(types.LOAD_GENRE, getGenres)
}