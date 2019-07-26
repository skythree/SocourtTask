import { selectors as genreSelectors } from '../../genre'
function getBookList(state) {
    let searchedTitle = getFilter(state)
    let books = state.books.listOfBooks
    let filters = genreSelectors.getFilter(state)

    if (searchedTitle !== undefined && searchedTitle.filter !== undefined && searchedTitle.filter !== '') {
        return books.filter(b => b.Title.includes(searchedTitle.filter))
    }

    if (filters.length > 0) {
        let arr = []
        for (let i = 0; i < filters.length; i++) {
            arr.push(...books.filter(b => b.Genre === filters[i]))
        }

        return arr
    }

    return books
}

function getBookDetailsById(state, id) {
    let books = getBookList(state)
    return books.filter(book => book.Id === id)[0]
}

function getFilter(state) {
    return state.books.ui
}

export default {
    getBookList,
    getBookDetailsById,
    getFilter
}