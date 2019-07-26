import { put, takeLatest } from 'redux-saga/effects';
import { actions as bookListActions } from './bookList'
import { actions as bookDetailsActions } from './bookDetails'
import { types as bookListTypes } from './bookList'
import { types as bookDetailsTypes } from './bookDetails'

//I don't have database so I will mock some data here
const books = [{ Id: 1, Title: "Book 1", Genre: "Criminal", Despciption: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", Price: 10.56 },
{ Id: 2, Title: "Book 2", Genre: "History", Despciption: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", Price: 10.56 },
{ Id: 3, Title: "Book 3", Genre: "History", Despciption: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", Price: 10.56 },
{ Id: 4, Title: "Book 4", Genre: "Science", Despciption: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", Price: 10.56 },
{ Id: 5, Title: "Book 5", Genre: "Science", Despciption: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", Price: 10.56 }]


function* getBooks() {
    try {
        // try to get data from server, api or database

        yield put(bookListActions.loadBooksSuccess(books))
    } catch (error) {
        yield put(bookListActions.loadBooksFailure(error))
    }
}

function* getBook(action) {
    try {
        // try to get data from server, api or database

        let book = books.filter(b => b.Id === parseInt(action.payload))[0]
        yield put(bookDetailsActions.getBookDetailsSuccess(book))
    } catch (error) {
        yield put(bookDetailsActions.getBookDetailsFailure(error))
    }
}

export default function* rootSaga() {
    yield takeLatest(bookListTypes.LOAD_BOOKS, getBooks)
    yield takeLatest(bookDetailsTypes.GET_BOOK_DETAILS, getBook)
}