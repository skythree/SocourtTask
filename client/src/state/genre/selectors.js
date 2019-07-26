function getGenres(state) {
    return state.genre.genres
}

function getFilter(state) {
    return state.genre.ui
}

export default {
    getGenres,
    getFilter
}