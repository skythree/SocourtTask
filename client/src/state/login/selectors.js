function getloginUi(state) {
    return state.login.ui
}

function getUsername(state) {
    return getloginUi(state).username
}

function getRegisteredUser(state) {
    return state.login.users
}

export default {
    getloginUi,
    getUsername,
    getRegisteredUser
}