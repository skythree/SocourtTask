import React from 'react'
import { connect } from 'react-redux'
import { actions, selectors } from '../state/book/bookDetails'

import './BookDetails.css'

class BookDetails extends React.Component {
    componentDidMount() {
        this.props.getBook(this.props.match.params.id)
    }
    render() {
        return (<table className="bookTable">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Genre</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.props.book.title}</td>
                    <td>{this.props.book.despciption}</td>
                    <td>{this.props.book.genre}</td>
                    <td>{this.props.book.price}</td>
                </tr>
            </tbody>
        </table>)
    }
}

function mapStateToProps(state) {
    return {
        book: selectors.getBookDetails(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBook: (id) => dispatch(actions.getBookDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);