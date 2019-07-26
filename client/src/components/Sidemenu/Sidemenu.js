import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import history from '../../state/history'
import { actions } from '../../state/login'
import BookList from '../BookList';
import BookDetails from '../BookDetails';

class Sidemenu extends React.Component {
    render() {
        return (<div>
            <Router history={history}>
                <div>
                    <button type="button" onClick={() => this.props.logout()}>Logout</button>
                </div>
                <Link to="/books">Books</Link>
                <div>
                    <Switch>
                        <Route path="/books" component={BookList} />
                        <Route path="/bookDetails/:id" component={BookDetails} />
                    </Switch>
                </div>
            </Router>
        </div>)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(actions.logout())
    }
}
export default connect(null, mapDispatchToProps)(Sidemenu)