import types from './types'

const defaultState = []

function book(state = defaultState, action) {
    switch (action.type) {
        case types.LOAD_BOOKS_SUCCESS:
            return action.payload
        case types.LOAD_BOOKS_FALIURE:
            return state
        default:
            return state
    }
}

const defaultUiState = {
    filter: ""
}

function ui(state = defaultUiState, action) {
    switch (action.type) {
        case types.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}

export default {
    book,
    ui
};