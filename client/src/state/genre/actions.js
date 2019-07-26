import types from './types'

const getGenre = () => ({
    type: types.LOAD_GENRE
})

const getGenreSuccess = (data) => ({
    type: types.LOAD_GENRE_SUCCESS,
    payload: data
})

const getFilter = (isChecked, value) => ({
    type: types.GET_FILTER,
    payload: {
        isChecked,
        value
    }
})

export default {
    getGenre,
    getGenreSuccess,
    getFilter
}