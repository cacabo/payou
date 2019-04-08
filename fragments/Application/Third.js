import React, { Component } from 'react'
import fetch from 'unfetch'
import Router from 'next/router'


import {
  FormWrapper,
  Title,
  Checkbox,
  Input,
  BtnInput,
  ErrorMessage,
} from '../../components'
import { getAppId } from '../../store'
import {
  NEW_APPLICATION_ROUTE,
  postApplicationRoute,
  applicationRoute,
} from '../../constants/routes'
import { DEFAULT_ERROR } from '../../constants/text'
import titles from './data/titles'


class Third extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      subscribeToNews: false,
      agreeToTerms: false,
      error: '',
      pending: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (!getAppId()) {
      Router.push(NEW_APPLICATION_ROUTE)
    }
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
      pending,
    } = this.state

    return !(
      email
      && password
      && confirmPassword
      && agreeToTerms
      && !pending
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isDisabled()) return

    this.setState({ pending: true })

    const {
      email,
      password,
      confirmPassword,
      subscribeToNews,
      agreeToTerms,
    } = this.state
    const id = getAppId()

    fetch(postApplicationRoute(3), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        email,
        password,
        confirmPassword,
        subscribeToNews,
        agreeToTerms,
      }),
    })
      .then(res => res.json())
      .then((data) => {
        const { error } = data
        if (error) {
          this.setState({
            pending: false,
            error,
          })
          return
        }

        const { step } = data
        Router.push(applicationRoute(step))
      })
      .catch((err) => {
        this.setState({
          pending: false,
          error: err.message || DEFAULT_ERROR,
        })
      })
  }

  render() {
    const {
      email,
      password,
      confirmPassword,
      subscribeToNews,
      agreeToTerms,
      error,
      pending,
    } = this.state

    return (
      <FormWrapper>
        <Title>{titles[3]}</Title>

        <ErrorMessage message={error} />

        <form onSubmit={this.handleSubmit}>
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

          <BtnInput
            fullWidth
            type="submit"
            disabled={this.isDisabled()}
            value={pending ? 'Loading...' : 'Next'}
          />
        </form>
      </FormWrapper>
    )
  }
}

export default Third
