import types from './types'

const login = (credentials) => (
    {
        type: types.LOGIN,
        payload: {
            ...credentials
        }
    }
);

const loginSuccess = (username) => (
    {
        type: types.LOGIN_SUCCESS,
        payload: username
    }
);

const loginFailure = (error) => (
    {
        type: types.LOGIN_FAILURE,
        payload: error,
        error: true
    }
);

const logout = () => (
    {
        type: types.LOGOUT,
    }
);

const logoutSuccess = () => (
    {
        type: types.LOGOUT_SUCCESS,
    }
);

const logoutFailure = () => (
    {
        type: types.LOGOUT_FAILURE,
    }
);

const register = (email, password) => ({
    type: types.REGISTER,
    payload: {
        email,
        password
    }
})

const registerSuccess = (data) => ({
    type: types.REGISTER_SUCCESS,
    payload: {
        email: data.email,
        password: data.password
    }
})

const registerFailure = () => ({
    type: types.REGISTER_FAILURE
})

const changePassword = (email, password) => ({
    type: types.FORGOTTEN_PASSWORD,
    payload: {
        email,
        password
    }
})

const changePasswordSuccess = (data) => ({
    type: types.FORGOTTEN_PASSWORD_SUCCESS,
    payload: {
        ...data
    }
})

export default {
    login,
    loginSuccess,
    loginFailure,
    logout,
    logoutSuccess,
    logoutFailure,
    register,
    registerSuccess,
    registerFailure,
    changePassword,
    changePasswordSuccess
}