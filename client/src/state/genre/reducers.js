import types from './types'

let defaultState = []

function genre(state = defaultState, action) {
    switch (action.type) {
        case types.LOAD_GENRE_SUCCESS:
            return action.payload
        default:
            return state
    }
}

let defaultUiState = []

function ui(state = defaultUiState, action) {
    switch (action.type) {
        case types.GET_FILTER:
            return action.payload.isChecked ? [...state, action.payload.value] : state.filter(s => s !== action.payload.value)
        default:
            return state;
    }
}

export default {
    genre,
    ui
};