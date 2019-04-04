import React, { Component } from 'react'
import fetch from 'unfetch'
import Router from 'next/router'

import {
  FormWrapper,
  Title,
  Checkbox,
  BtnInput,
  ErrorMessage,
  Input,
} from '../../components'
import { getAppId } from '../../store'
import { DEFAULT_ERROR } from '../../constants/text'
import { NEW_APPLICATION_ROUTE, postApplicationRoute, applicationRoute } from '../../constants/routes'


class Sixth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ssn: '',
      numberOfFinancialDependents: '',
      civilStatus: '',
      error: '',
      expectsChangesToEmploymentStatus: false,
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
      ssn,
      numberOfFinancialDependents,
      civilStatus,
      pending,
    } = this.state

    return !(
      ssn
      && numberOfFinancialDependents !== undefined
      && numberOfFinancialDependents !== null
      && civilStatus
      && !pending
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isDisabled()) return

    this.setState({ pending: true })

    const {
      ssn,
      numberOfFinancialDependents,
      civilStatus,
    } = this.state
    const id = getAppId()

    fetch(postApplicationRoute(6), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        ssn,
        numberOfFinancialDependents,
        civilStatus,
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
      ssn,
      numberOfFinancialDependents,
      civilStatus,
      expectsChangesToEmploymentStatus,
      error,
      pending,
    } = this.state

    return (
      <FormWrapper>
        <Title>Personal Information (cont.)</Title>

        <ErrorMessage message={error} />

        <form onSubmit={this.handleSubmit}>
          <Input
            label="Social Security Number"
            name="ssn"
            type="number"
            value={ssn}
            onChange={this.handleChange}
          />
          <Input
            label="Number of financial dependents"
            name="numberOfFinancialDependents"
            type="number"
            value={numberOfFinancialDependents}
            onChange={this.handleChange}
          />
          <Input
            label="Civil status"
            name="civilStatus"
            type="string"
            value={civilStatus}
            onChange={this.handleChange}
          />
          <Checkbox
            label="Do you expect changes to your employment status?"
            name="expectsChangesToEmploymentStatus"
            checked={expectsChangesToEmploymentStatus}
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


export default Sixth
