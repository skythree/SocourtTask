import types from './types'

let defaultState = {
    data: {}
}

function bookDetails(state = defaultState, action) {
    switch (action.type) {
        case types.GET_BOOK_DETAILS_SUCCESS:
            return {
                ...state,
                data: {
                    id: action.payload.Id,
                    title: action.payload.Title,
                    despciption: action.payload.Despciption,
                    genre: action.payload.Genre,
                    price: action.payload.Price,
                }
            }
        default:
            return state
    }
}

export default bookDetails;