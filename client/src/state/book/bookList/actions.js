import types from "./types";

const loadBooks = () => ({
    type: types.LOAD_BOOKS
})

const loadBooksSuccess = (data) => ({
    type: types.LOAD_BOOKS_SUCCESS,
    payload: data
})

const loadBooksFailure = (error) => ({
    type: types.LOAD_BOOKS_FALIURE,
    payload: error,
    error: true
})

const setSeachredBook = (title) => ({
    type: types.SET_FILTER,
    payload: title
})

export default {
    loadBooks,
    loadBooksSuccess,
    loadBooksFailure,
    setSeachredBook
}