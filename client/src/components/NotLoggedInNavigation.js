import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '../state/login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import ForgottonPassword from './ForgottonPassword';
import history from '../state/history'

class NotLoggedInNavigation extends React.Component {
    render() {

        return (<Router history={history}>
            <div style={{ color: "red" }}>{this.props.ui.hasErrors ? "Error" : null}</div>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/forgotten-password" component={ForgottonPassword} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>);
    }
}

function mapStateToProps(state) {
    return {
        ui: selectors.getloginUi(state)
    }
}

export default connect(mapStateToProps)(NotLoggedInNavigation);