import React, { Component } from 'react'

import {
  FormWrapper,
  Title,
  Select,
  Input,
  Row,
  Col,
  Btn,
  ColSpace,
  Label,
} from '../../components'
import { applicationRoute } from '../../constants/routes'

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
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDOB = this.handleChangeDOB.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
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
    )
  }

  render() {
    const {
      firstName,
      lastName,
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
        <form>
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
            type="tel"
            label="Cell phone number"
            name="phone"
            placeholder="(123) 456-7890"
            value={phone}
            onChange={this.handleChange}
          />

          <Btn
            href={applicationRoute(3)}
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

export default Second
