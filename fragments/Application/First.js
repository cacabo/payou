import React, { Component } from 'react'

import {
  FormWrapper,
  Title,
  Select,
  Btn,
} from '../../components'
import { applicationRoute } from '../../constants/routes'

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
    }

    this.handleChange = this.handleChange.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
  }

  handleChange(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    this.setState({ [name]: value })
  }

  isDisabled() {
    const { loanTerm, loanAmount } = this.state
    return !(
      loanTerm
      && loanAmount
      && loanTerm > 0
      && loanAmount > 0
    )
  }

  render() {
    const { loanTerm, loanAmount } = this.state

    return (
      <FormWrapper>
        <Title>Loan conditions</Title>
        <form>
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

          <Btn
            href={applicationRoute(2)}
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

export default First
