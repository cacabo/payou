import React, { Component } from 'react'
import fetch from 'unfetch'
import Router from 'next/router'


import {
  FormWrapper,
  Title,
  ErrorMessage,
  ActionBtn,
  Text,
} from '../../../components'
import { getAppId, clearAppId } from '../../../store'
import { DEFAULT_ERROR } from '../../../constants/text'
import {
  NEW_APPLICATION_ROUTE,
  applicationRoute,
  postApplicationRoute,
  getApplicationRoute,
} from '../../../constants/routes'
import Field from './ReviewField'
import titles from '../data/titles'


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
    this.renderStartDate = this.renderStartDate.bind(this)
    this.renderAddress = this.renderAddress.bind(this)
  }


  componentDidMount() {
    const id = getAppId()
    if (!id) {
      Router.push(NEW_APPLICATION_ROUTE)
      return
    }

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
      <Field title="Date of birth" value={`${month}/${day}/${year}`} />
    )
  }


  renderStartDate() {
    const { employmentStartDate: { month, year } } = this.state
    return (
      <Field
        title="Employment start date"
        value={`${month}/${year}`}
      />
    )
  }


  renderAddress() {
    const {
      address: {
        address1,
        address2,
        city,
        state,
        zip,
      },
    } = this.state

    return (
      <Text>
        <strong>Address:</strong>
        <br />
        {address1}
        <br />
        {address2}
        <br />
        {city}
        {', '}
        {state}
        {' '}
        {zip}
      </Text>
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
      paycycle,
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
        <Field title="Loan amount" value={`$${loanAmount}`} />
        <Field title="Loan term" value={`${loanTerm} months`} />

        <hr />

        <Field title="First name" value={firstName} />
        <Field title="Last name" value={lastName} />
        <Field title="Suffix" value={suffix} />
        {this.renderDOB()}

        <hr />

        <Field title="Phone" value={phone} />
        <Field title="Email" value={email} />
        <Field title="Password" value={password} />
        <Field
          title="Subscribe to news from Payou"
          value={subscribeToNews ? 'Yes' : 'No'}
        />

        <hr />

        <Field title="Payroll ID" value={payrollId} />
        <Field title="Gross annual income" value={`$${grossAnnualIncome}`} />
        <Field title="Gross annual income" value={`$${otherIncome}`} />
        {this.renderStartDate()}
        <Field title="Paycycle (weeks)" value={`${paycycle}`} />

        <hr />

        {this.renderAddress()}
        <Field title="Time at address (months)" value={`${timeAtAddress}`} />
        <Field title="Residential status" value={residentialStatus} />
        {residentialStatusExplanation && (
          <Field title="Explanation" value={residentialStatusExplanation} />
        )}

        <hr />

        <Field title="SSN" value={ssn} />
        <Field title="Number of financial dependents" value={`${numberOfFinancialDependents}`} />
        <Field title="Civil status" value={civilStatus} />
        <Field
          title="Expects changes to employment status"
          value={expectsChangesToEmploymentStatus ? 'Yes' : 'No'}
        />
      </>
    )
  }

  render() {
    const { error, pending, loadingData } = this.state

    return (
      <FormWrapper>
        <Title>{titles[7]}</Title>

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
