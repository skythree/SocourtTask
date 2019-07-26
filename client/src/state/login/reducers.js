import types from './types'

const defaultState = {
    hasErrors: false,
    username: null
}

function ui(state = defaultState, action) {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...defaultState,
            };
        case types.LOGIN_SUCCESS:
            return {
                ...defaultState,
                username: action.payload
            }
        case types.LOGIN_FAILURE:
        case types.REGISTER_FAILURE:
        case types.FORGOTTEN_PASSWORD_FAILURE:
            return {
                ...state,
                hasErrors: true
            }
        default: return state;
    }
}

let registeredUsers = []
function register(state = registeredUsers, action) {
    switch (action.type) {
        case types.REGISTER:
            return state
        case types.REGISTER_SUCCESS:
            return [
                ...state,
                action.payload
            ]
        case types.FORGOTTEN_PASSWORD_SUCCESS:
            return state.map(s => {
                if (s.email === action.payload.email) {
                    return {
                        ...s,
                        password: action.payload.password
                    }
                }
                return s
            })
        default:
            return state
    }
}

export default {
    ui,
    register
}