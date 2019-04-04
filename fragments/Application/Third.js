import React, { Component } from 'react'

import {
  FormWrapper,
  Title,
  Checkbox,
  Input,
  Btn,
} from '../../components'
import { applicationRoute } from '../../constants/routes'

class Third extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      subscribeToNews: false,
      agreeToTerms: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
  }

  handleChange(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    this.setState({ [name]: value })
    this.isDisabled = this.isDisabled.bind(this)
  }

  isDisabled() {
    const {
      email,
      password,
      confirmPassword,
      agreeToTerms,
    } = this.state

    return !(
      email
      && password
      && confirmPassword
      && agreeToTerms
    )
  }

  render() {
    const {
      email,
      password,
      confirmPassword,
      subscribeToNews,
      agreeToTerms,
    } = this.state

    return (
      <FormWrapper>
        <Title>Login information</Title>
        <form>
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <Input
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <Checkbox
            label="Subscribe to updates from Payou"
            name="subscribeToNews"
            checked={subscribeToNews}
            onChange={this.handleChange}
          />
          <Checkbox
            label="Agree to terms and conditions"
            name="agreeToTerms"
            checked={agreeToTerms}
            onChange={this.handleChange}
          />

          <Btn
            href={applicationRoute(4)}
            fullWidth
            disabled={this.isDisabled()}
          >
            Next
          </Btn>
        </form>
      </FormWrapper>
    )
  }
}

export default Third
