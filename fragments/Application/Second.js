import React, { Component } from 'react'
import fetch from 'unfetch'
import Router from 'next/router'

import {
  FormWrapper,
  Title,
  Select,
  Input,
  Row,
  Col,
  BtnInput,
  ColSpace,
  Label,
  ErrorMessage,
} from '../../components'
import { getAppId } from '../../store'
import { NEW_APPLICATION_ROUTE, postApplicationRoute, applicationRoute } from '../../constants/routes'
import { DEFAULT_ERROR } from '../../constants/text'

const dayOptions = [{ value: -1, text: 'Select' }]
for (let i = 1; i <= 31; i += 1) {
  dayOptions.push({ value: i, text: `${i}` })
}

const monthOptions = [{ value: -1, text: 'Select' }]
for (let j = 1; j <= 12; j += 1) {
  monthOptions.push({ value: j, text: `${j}` })
}

const yearOptions = [{ value: -1, text: 'Select' }]
for (let k = 1900; k <= 2002; k += 1) {
  yearOptions.push({ value: k, text: `${k}` })
}

class Second extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      suffix: '',
      dateOfBirth: {
        day: -1,
        month: -1,
        year: -1,
      },
      phone: '',
      pending: false,
      error: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDOB = this.handleChangeDOB.bind(this)
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
  }

  handleChangeDOB(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    const { dateOfBirth } = this.state
    const newDateOfBirth = Object.assign({}, dateOfBirth, { [name]: value })
    this.setState({ dateOfBirth: newDateOfBirth })
  }

  isDisabled() {
    const {
      pending,
      firstName,
      lastName,
      dateOfBirth: {
        day,
        month,
        year,
      },
      phone,
    } = this.state

    return !(
      firstName
      && lastName
      && day
      && month
      && year
      && day > 0
      && month > 0
      && year > 0
      && phone
      && !pending
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isDisabled()) return

    this.setState({ pending: true })

    const {
      firstName,
      lastName,
      suffix,
      dateOfBirth,
      phone,
    } = this.state
    const id = getAppId()

    fetch(postApplicationRoute(2), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        firstName,
        lastName,
        suffix,
        dateOfBirth,
        phone,
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
      firstName,
      lastName,
      error,
      pending,
      suffix,
      dateOfBirth: {
        day,
        month,
        year,
      },
      phone,
    } = this.state

    return (
      <FormWrapper>
        <Title>Basic info</Title>

        <ErrorMessage message={error} />

        <form onSubmit={this.handleSubmit}>
          <Input
            type="string"
            label="First name"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={this.handleChange}
          />
          <Input
            type="string"
            label="Last name"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={this.handleChange}
          />
          <Input
            type="string"
            label="Suffix"
            name="suffix"
            placeholder="Suffix"
            value={suffix}
            onChange={this.handleChange}
          />

          <hr />

          <Label>Date of birth</Label>
          <Row>
            <Col>
              <Select
                smallLabel
                label="Day"
                name="day"
                options={dayOptions}
                value={day}
                onChange={this.handleChangeDOB}
              />
            </Col>
            <ColSpace />
            <Col>
              <Select
                smallLabel
                label="Month"
                name="month"
                options={monthOptions}
                value={month}
                onChange={this.handleChangeDOB}
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
                onChange={this.handleChangeDOB}
              />
            </Col>
          </Row>

          <hr />

          <Input
            type="number"
            label="Cell phone number"
            name="phone"
            placeholder="1234567890"
            value={phone}
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

export default Second
