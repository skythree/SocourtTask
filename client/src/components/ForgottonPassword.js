import React from 'react'
import { connect } from 'react-redux'
import { selectors, actions } from '../state/login'

class ForgottonPassword extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null,
            newPassword: null,
            confirmPassword: null,
            error: null
        }

        this.validateForm = this.validateForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    validateForm() {
        if (this.state.email === null) {
            this.setState({
                error: "Invalid email"
            })
            return false
        }
        if (this.state.newPassword === null || this.state.newPassword !== this.state.confirmPassword) {
            this.setState({
                error: "Password do not match"
            })
            return false
        }

        if (this.props.users != undefined && this.props.users.filter(u => u.email === this.state.email && u.password === this.state.password).length === 0) {
            this.setState({
                error: "Invalid user"
            })
            return false
        }

        return true
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.validateForm()) {
            this.props.changePassword(this.state.email, this.state.newPassword)
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
                    <input type="email" name="email" required onChange={this.handleChange} />
                </div>
                <div>
                    <label>Old Password</label>
                    <input type="password" name="password" onChange={this.handleChange} />
                </div>
                <div>
                    <label>New Password</label>
                    <input type="password" name="newPassword" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={this.handleChange} />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        users: selectors.getRegisteredUser(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changePassword: (email, password) => dispatch(actions.changePassword(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgottonPassword)