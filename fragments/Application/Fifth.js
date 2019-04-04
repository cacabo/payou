import React, { Component } from 'react'

import states from '../../constants/states'
import residentialStatusData from '../../constants/residentialStatusOptions'
import {
  FormWrapper,
  Title,
  Label,
  Btn,
  Input,
  Select,
  Row,
  Col,
  ColSpace,
} from '../../components'
import { applicationRoute } from '../../constants/routes'

const stateOptions = [{ value: '', text: 'Select' }]
states.forEach(state => stateOptions.push({ value: state, text: state }))

const residentialStatusOptions = [{ value: '', text: 'Select' }]
residentialStatusData.forEach(o => residentialStatusOptions.push({ text: o, value: o }))

class Fifth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
      },
      timeAtAddress: '',
      residentialStatus: '',
      residentialStatusExplanation: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeAddr = this.handleChangeAddr.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
  }

  handleChange(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    this.setState({ [name]: value })
    this.isDisabled = this.isDisabled.bind(this)
  }

  handleChangeAddr(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    const { address } = this.state
    const newAddress = Object.assign({}, address, { [name]: value })
    this.setState({ address: newAddress })
  }

  isDisabled() {
    const {
      address: {
        address1,
        city,
        state,
        zip,
      },
      timeAtAddress,
      residentialStatus,
      residentialStatusExplanation,
    } = this.state

    return !(
      address1
      && city
      && state
      && zip
      && zip > 0
      && timeAtAddress !== undefined
      && timeAtAddress !== null
      && residentialStatus
      && (residentialStatus !== 'Other' || residentialStatusExplanation)
    )
  }

  render() {
    const {
      address: {
        address1,
        address2,
        city,
        state,
        zip,
      },
      timeAtAddress,
      residentialStatus,
      residentialStatusExplanation,
    } = this.state

    return (
      <FormWrapper>
        <Title>Personal Information</Title>
        <form>
          <Label>Address</Label>
          <Input
            smallLabel
            label="Address line 1"
            name="address1"
            type="text"
            value={address1}
            onChange={this.handleChangeAddr}
          />
          <Input
            smallLabel
            label="Address line 2"
            name="address2"
            type="text"
            value={address2}
            onChange={this.handleChangeAddr}
          />
          <Input
            smallLabel
            label="City"
            name="city"
            type="text"
            value={city}
            onChange={this.handleChangeAddr}
          />
          <Row>
            <Col>
              <Select
                smallLabel
                label="State"
                options={stateOptions}
                name="state"
                value={state}
                onChange={this.handleChangeAddr}
              />
            </Col>
            <ColSpace />
            <Col>
              <Input
                smallLabel
                label="Zipcode"
                name="zip"
                type="number"
                value={zip}
                onChange={this.handleChangeAddr}
              />
            </Col>
          </Row>

          <hr />

          <Input
            label="Time spent at this address (months)"
            name="timeAtAddress"
            type="number"
            value={timeAtAddress}
            onChange={this.handleChange}
          />

          <hr />

          <Select
            label="Residential Status"
            options={residentialStatusOptions}
            name="residentialStatus"
            value={residentialStatus}
            onChange={this.handleChange}
          />

          {residentialStatus === 'Other' && (
            <Input
              smallLabel
              label="Explain"
              name="residentialStatusExplanation"
              type="text"
              value={residentialStatusExplanation}
              onChange={this.handleChange}
            />
          )}

          <Btn
            href={applicationRoute(6)}
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

export default Fifth
