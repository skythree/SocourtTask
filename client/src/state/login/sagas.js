import { put, select, takeLatest } from 'redux-saga/effects'
import types from './types'
import actions from './actions'
import selectors from './selectors'

function* login(action) {
    try {
        // verify data on server
        //in this case I will just add input value to state   
        let users = yield select(selectors.getRegisteredUser)
        if (users.filter(u => u.email === action.payload.email && u.password === action.payload.password).length === 0) {
            yield put(actions.loginFailure());
        }
        else {
            yield put(actions.loginSuccess(action.payload.email));
        }
    } catch (error) {
        yield put(actions.loginFailure(error));
    }
}

function* logout() {
    yield put(actions.logoutSuccess());
}

function* register(action) {
    try {
        // send data to server
        //in this case I will just add input value to state               
        yield put(actions.registerSuccess(action.payload));
    } catch (error) {
        yield put(actions.registerFailure(error));
    }
}

function* forgotternPassword(action) {
    try {
        // send data to server 
        //in this case I will just add input value to state  
        yield put(actions.changePasswordSuccess(action.payload))
    } catch (error) {

    }
}

export default function* rootSaga() {
    yield takeLatest(types.LOGIN, login);
    yield takeLatest(types.LOGOUT, logout);
    yield takeLatest(types.REGISTER, register);
    yield takeLatest(types.FORGOTTEN_PASSWORD, forgotternPassword);
}