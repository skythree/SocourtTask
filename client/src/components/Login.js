import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { actions } from '../state/login'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.email != null && this.state.email.length > 0 && this.state.password != null && this.state.password.length > 0) {
            this.props.login(this.state)
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (<div>
            <Link to="/signUp">Sign Up</Link>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="email" name='email' onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" name='password' onChange={this.handleChange} />
                </div>
                <Link to="/forgotten-password">Forgotton password</Link>
                <button type="submit">Login</button>
            </form>
        </div>)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (credentials) => dispatch(actions.login(credentials))
    }
}

export default connect(null, mapDispatchToProps)(Login)