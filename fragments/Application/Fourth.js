import React, { Component } from 'react'
import Router from 'next/router'
import fetch from 'unfetch'

import {
  FormWrapper,
  Title,
  Row,
  Col,
  ColSpace,
  Input,
  Select,
  Label,
  ErrorMessage,
  BtnInput,
} from '../../components'
import { postApplicationRoute, NEW_APPLICATION_ROUTE, applicationRoute } from '../../constants/routes'
import { getAppId } from '../../store'
import { DEFAULT_ERROR } from '../../constants/text'

const monthOptions = [{ value: -1, text: 'Select' }]
for (let j = 1; j <= 12; j += 1) {
  monthOptions.push({ value: j, text: `${j}` })
}

const yearOptions = [{ value: -1, text: 'Select' }]
for (let k = 1950; k <= 2025; k += 1) {
  yearOptions.push({ value: k, text: `${k}` })
}

const paycycleOptions = [{ value: -1, text: 'Select' }]
for (let i = 1; i <= 52; i += 1) {
  paycycleOptions.push({ value: i, text: `${i} weeks` })
}

class Fourth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      pending: false,
      payrollId: '',
      grossAnnualIncome: 0,
      otherIncome: 0,
      employmentStartDate: {
        month: -1,
        year: -1,
      },
      paycycle: -1,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this)
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

  handleChangeStartDate(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    const { employmentStartDate } = this.state
    const newStartDate = Object.assign({}, employmentStartDate, { [name]: value })
    this.setState({ employmentStartDate: newStartDate })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isDisabled()) return

    this.setState({ pending: true })

    const {
      payrollId,
      grossAnnualIncome,
      otherIncome,
      employmentStartDate,
      paycycle,
    } = this.state
    const id = getAppId()

    fetch(postApplicationRoute(4), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        payrollId,
        grossAnnualIncome,
        otherIncome,
        employmentStartDate,
        paycycle,
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

  isDisabled() {
    const {
      payrollId,
      grossAnnualIncome,
      otherIncome,
      employmentStartDate: {
        month,
        year,
      },
      paycycle,
      pending,
    } = this.state

    return !(
      payrollId
      && grossAnnualIncome
      && otherIncome
      && month
      && year
      && paycycle
      && grossAnnualIncome > 0
      && otherIncome > 0
      && month > 0
      && year > 0
      && paycycle > 0
      && !pending
    )
  }

  render() {
    const {
      pending,
      payrollId,
      error,
      grossAnnualIncome,
      otherIncome,
      employmentStartDate: {
        month,
        year,
      },
      paycycle,
    } = this.state

    return (
      <FormWrapper>
        <Title>Employment details</Title>

        <ErrorMessage message={error} />

        <form onSubmit={this.handleSubmit}>
          <Input
            label="Payroll ID"
            name="payrollId"
            type="text"
            placeholder="12345678-001"
            value={payrollId}
            onChange={this.handleChange}
          />
          <Input
            label="Gross annual income ($)"
            name="grossAnnualIncome"
            type="number"
            placeholder="75,000"
            value={grossAnnualIncome}
            onChange={this.handleChange}
          />
          <Input
            label="Other income ($)"
            name="otherIncome"
            type="number"
            placeholder="25,000"
            value={otherIncome}
            onChange={this.handleChange}
          />

          <Label>Employment start date</Label>
          <Row>
            <Col>
              <Select
                smallLabel
                label="Month"
                name="month"
                options={monthOptions}
                value={month}
                onChange={this.handleChangeStartDate}
              />
            </Col>
            <ColSpace />
            <Col>
              <Select
                smallLabel
                label="Year"
                name="year"
                options={yearOptions}
                value={year}
                onChange={this.handleChangeStartDate}
              />
            </Col>
          </Row>

          <Select
            label="Paycycle (weeks)"
            name="paycycle"
            options={paycycleOptions}
            value={paycycle}
            onChange={this.handleChange}
          />

          <BtnInput
            type="submit"
            href={applicationRoute(5)}
            fullWidth
            disabled={this.isDisabled()}
            value={pending ? 'Loading...' : 'Next'}
          />
        </form>
      </FormWrapper>
    )
  }
}

export default Fourth
