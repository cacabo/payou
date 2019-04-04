import React, { Component } from 'react'

import {
  FormWrapper,
  Title,
  Checkbox,
  Btn,
  Input,
} from '../../components'
import { applicationRoute } from '../../constants/routes'


class Sixth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ssn: '',
      numberOfFinancialDependents: '',
      civilStatus: '',
      expectsChangesToEmploymentStatus: false,
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
      ssn,
      numberOfFinancialDependents,
      civilStatus,
    } = this.state

    return !(
      ssn
      && numberOfFinancialDependents !== undefined
      && numberOfFinancialDependents !== null
      && civilStatus
    )
  }

  render() {
    const {
      ssn,
      numberOfFinancialDependents,
      civilStatus,
      expectsChangesToEmploymentStatus,
    } = this.state

    return (
      <FormWrapper>
        <Title>Personal Information (cont.)</Title>
        <form>
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

          <Btn href={applicationRoute(7)} fullWidth disabled={this.isDisabled()}>
            Next
          </Btn>
        </form>
      </FormWrapper>
    )
  }
}


export default Sixth
