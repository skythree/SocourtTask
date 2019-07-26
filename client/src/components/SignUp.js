import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../state/login'

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null,
            confirmPassword: null,
            error: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate() {
        if (this.state.email === null) {
            this.setState({
                error: "Invalid email"
            })
            return false
        }

        if (this.state.password == null || this.state.password !== this.state.confirmPassword) {
            this.setState({ error: "Password do not match" })
            return false
        }

        return true
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.validate()) {
            this.props.register(this.state.email, this.state.password)
            this.props.history.push("/login")
        }

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (<div>
            <span style={{ color: "red" }}>{this.state.error}</span>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Confirm password</label>
                    <input type="password" name="confirmPassword" onChange={this.handleChange} />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (email, password) => dispatch(actions.register(email, password))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)