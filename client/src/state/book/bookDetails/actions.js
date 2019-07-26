import types from './types'

const getBookDetails = (id) => ({
    type: types.GET_BOOK_DETAILS,
    payload: id
})

const getBookDetailsSuccess = (data) => ({
    type: types.GET_BOOK_DETAILS_SUCCESS,
    payload: data
})

export default {
    getBookDetails,
    getBookDetailsSuccess
}