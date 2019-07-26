import { types } from '../login'

export default function isAuthenticated(state = false, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return true;
        case types.LOGOUT_SUCCESS:
            return false;
        default: return state;
    }
}