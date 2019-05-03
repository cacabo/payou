import React, { Component } from 'react'

import {
  FormWrapper,
  Title,
  Input,
  ErrorMessage,
  BtnInput,
} from '../../components'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      pending: false,
      error: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    this.state = { pending: true }

    console.log('submitted TODO')

    this.state = { pending: false }
  }

  handleChange(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    this.setState({ [name]: value })
  }

  isDisabled() {
    const { email, password, pending } = this.state
    return !(
      email && password && !pending
    )
  }

  render() {
    const {
      email,
      password,
      error,
      pending,
    } = this.state

    return (
      <FormWrapper>
        <Title>Admin Login</Title>
        <ErrorMessage message={error} />

        <form onSubmit={this.handleSubmit}>
          <Input
            autoFocus
            required
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />

          <Input
            required
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />

          <BtnInput
            type="submit"
            fullWidth
            disabled={this.isDisabled()}
            value={pending ? 'Authenticating...' : 'Log in'}
          />
        </form>
      </FormWrapper>
    )
  }
}

export default Login
