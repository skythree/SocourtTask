import { combineReducers } from 'redux'
import bookList from './book/bookList'
import bookDetails from './book/bookDetails'
import genre from './genre'
import login, { types as loginTypes } from './login'
import isAuthenticated from './authentication'

let rootReducer = combineReducers({
    session: (state, action) => {
        if (action.type === loginTypes.LOGOUT) {
            state = undefined
        }

        return combineReducers({
            isAuthenticated: isAuthenticated
        })(state, action);
    },
    books: combineReducers({
        ui: bookList.ui,
        listOfBooks: bookList.book,
        bookDetails
    }),
    genre: combineReducers({
        ui: genre.ui,
        genres: genre.genre
    }),
    login: combineReducers({
        ui: login.ui,
        users: login.register
    })
})

export default rootReducer