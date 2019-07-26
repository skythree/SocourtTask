import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { actions, selectors } from '../state/book/bookList'
import { actions as genreActions, selectors as genreSelectors } from '../state/genre'

class BookList extends React.Component {
    constructor(props) {
        super(props)

        this.setSearchedBook = this.setSearchedBook.bind(this)
        this.setSearchedGenres = this.setSearchedGenres.bind(this)
    }

    componentDidMount() {
        this.props.loadBooks()
        this.props.loadGenres()
    }

    setSearchedBook(e) {
        let value = e.target.value
        this.props.setSearchedTitle(value)
    }

    setSearchedGenres(e) {
        let isChecked = e.target.checked;
        let value = e.target.value
        this.props.getFilter(isChecked, value)
    }

    render() {
        let { books, genres, filters } = this.props
        return (<div>
            <input type="text" onChange={this.setSearchedBook} />
            <div>
                {genres.map((genre, index) => { return <label key={index}><input type="checkbox" onChange={this.setSearchedGenres} value={genre} />{genre}</label> })}
            </div>
            {books.map((book, index) => { return <li key={index}><Link to={`/bookDetails/${book.Id}`}>{book.Title}</Link>{book.Genre}</li> })}
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        books: selectors.getBookList(state),
        genres: genreSelectors.getGenres(state),
        filters: genreSelectors.getFilter(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadBooks: () => dispatch(actions.loadBooks()),
        setSearchedTitle: (value) => dispatch(actions.setSeachredBook(value)),
        loadGenres: () => dispatch(genreActions.getGenre()),
        getFilter: (isChecked, value) => dispatch(genreActions.getFilter(isChecked, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);