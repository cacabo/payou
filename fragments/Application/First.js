import React, { Component } from 'react'
import fetch from 'unfetch'
import Router from 'next/router'

import {
  FormWrapper,
  Title,
  Select,
  ErrorMessage,
  BtnInput,
} from '../../components'
import { DEFAULT_ERROR } from '../../constants/text'
import { postApplicationRoute, applicationRoute } from '../../constants/routes'
import { setAppId } from '../../store'

const loanValueOptions = [{ value: -1, text: 'Select' }]
for (let i = 6; i <= 50; i += 1) {
  const value = i * 100
  loanValueOptions.push({ value, text: `$${value}` })
}

const termOptions = [{ value: -1, text: 'Select' }]
for (let j = 3; j < 37; j += 1) {
  termOptions.push({ value: j, text: `${j} months` })
}

class First extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loanAmount: -1,
      loanTerm: -1,
      error: '',
      pending: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isDisabled()) return

    this.setState({ pending: true })

    const { loanAmount, loanTerm } = this.state

    fetch(postApplicationRoute(1), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ loanAmount, loanTerm }),
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

        const { _id: id } = data
        setAppId(id)
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

  handleChange(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    this.setState({ [name]: value })
  }

  isDisabled() {
    const { loanTerm, loanAmount, pending } = this.state
    return !(
      loanTerm
      && loanAmount
      && loanTerm > 0
      && loanAmount > 0
      && !pending
    )
  }

  render() {
    const {
      loanTerm,
      loanAmount,
      pending,
      error,
    } = this.state

    return (
      <FormWrapper>
        <Title>Loan conditions</Title>

        <ErrorMessage message={error} />

        <form onSubmit={this.handleSubmit}>
          <Select
            label="Loan Value"
            name="loanAmount"
            options={loanValueOptions}
            value={loanAmount}
            onChange={this.handleChange}
          />

          <Select
            label="Term Length"
            name="loanTerm"
            options={termOptions}
            value={loanTerm}
            onChange={this.handleChange}
          />

          <BtnInput
            type="submit"
            fullWidth
            disabled={this.isDisabled()}
            value={pending ? 'Loading...' : 'Next'}
          />
        </form>
      </FormWrapper>
    )
  }
}

export default First
