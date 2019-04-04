import React, { Component } from 'react'
import fetch from 'unfetch'
import Router from 'next/router'

import {
  FormWrapper,
  Title,
  ErrorMessage,
  ActionBtn,
  Text,
} from '../../components'
import { getAppId, clearAppId } from '../../store'
import { DEFAULT_ERROR } from '../../constants/text'
import {
  NEW_APPLICATION_ROUTE,
  applicationRoute,
  postApplicationRoute,
  getApplicationRoute,
} from '../../constants/routes'

class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingData: true,
      pending: false,
      error: '',
    }
    this.isDisabled = this.isDisabled.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderBody = this.renderBody.bind(this)
    this.renderDOB = this.renderDOB.bind(this)
  }

  componentDidMount() {
    const id = getAppId()
    if (!id) {
      Router.push(NEW_APPLICATION_ROUTE)
      return
    }

    console.log('ID', id)

    fetch(getApplicationRoute(id), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({
          loadingData: false,
          ...data,
        })

        console.log('DATA', data)
      })
      .catch((err) => {
        this.setState({
          loadingData: false,
          error: err.message || DEFAULT_ERROR,
        })
      })
  }

  isDisabled() {
    const { pending, loadingData } = this.state
    return (pending || loadingData)
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isDisabled()) return

    this.setState({ pending: true })

    const id = getAppId()

    fetch(postApplicationRoute(7), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
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
        clearAppId()
        Router.push(applicationRoute(step))
      })
      .catch((err) => {
        this.setState({
          pending: false,
          error: err.message || DEFAULT_ERROR,
        })
      })
  }

  renderDOB() {
    const { dateOfBirth: { month, day, year } } = this.state
    return (
      <>
        <Text>
          <strong>Date of birth:</strong>
          <br />
          {`Day: ${day}, Month: ${month}, Year: ${year}`}
        </Text>
      </>
    )
  }

  renderBody() {
    const {
      loanAmount,
      loanTerm,
      firstName,
      lastName,
      suffix,
      phone,
      email,
      password,
      subscribeToNews,
      payrollId,
      grossAnnualIncome,
      otherIncome,
      employmentStartDate,
      paycycle,
      address,
      timeAtAddress,
      residentialStatus,
      residentialStatusExplanation,
      ssn,
      numberOfFinancialDependents,
      civilStatus,
      expectsChangesToEmploymentStatus,
    } = this.state

    // TODO render the rest
    // TODO split into helper functions

    return (
      <>
        <Text>
          <strong>Loan amount: </strong>
          {`$${loanAmount}`}
        </Text>
        <Text>
          <strong>Loan term: </strong>
          {`${loanTerm} months`}
        </Text>

        <hr />

        <Text>
          <strong>First name: </strong>
          {firstName}
        </Text>

        <Text>
          <strong>Last name: </strong>
          {lastName}
        </Text>

        <Text>
          <strong>Suffix: </strong>
          {suffix}
        </Text>

        {this.renderDOB()}

        <hr />

        <Text>
          <strong>Phone: </strong>
          {phone}
        </Text>

        <Text>
          <strong>Email: </strong>
          {email}
        </Text>

        <Text>
          <strong>Password: </strong>
          {password}
        </Text>

        <Text>
          <strong>Subscribe to news from Payou? </strong>
          {subscribeToNews ? 'Yes' : 'No'}
        </Text>

        <hr />
      </>
    )
  }

  render() {
    const { error, pending, loadingData } = this.state

    return (
      <FormWrapper>
        <Title>Review Application</Title>

        <ErrorMessage message={error} />

        {loadingData ? (<Text>Loading...</Text>) : (this.renderBody())}

        <ActionBtn handleClick={this.handleSubmit} fullWidth disabled={this.isDisabled()}>
          {pending ? 'Submitting application...' : 'Submit Application'}
        </ActionBtn>
      </FormWrapper>
    )
  }
}

export default Review
