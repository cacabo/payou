import React, { Component } from 'react'
import Router from 'next/router'
import fetch from 'unfetch'

import states from '../../constants/states'
import residentialStatusData from '../../constants/residentialStatusOptions'
import {
  FormWrapper,
  Title,
  Label,
  BtnInput,
  Input,
  Select,
  Row,
  Col,
  ColSpace,
  ErrorMessage,
} from '../../components'
import { NEW_APPLICATION_ROUTE, postApplicationRoute, applicationRoute } from '../../constants/routes'
import { DEFAULT_ERROR } from '../../constants/text'
import { getAppId } from '../../store'

const stateOptions = [{ value: '', text: 'Select' }]
states.forEach(state => stateOptions.push({ value: state, text: state }))

const residentialStatusOptions = [{ value: '', text: 'Select' }]
residentialStatusData.forEach(o => residentialStatusOptions.push({ text: o, value: o }))

class Fifth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      pending: false,
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

  handleChangeAddr(event) {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    const { address } = this.state
    const newAddress = Object.assign({}, address, { [name]: value })
    this.setState({ address: newAddress })
  }

  // TODO abstract this function away

  handleSubmit(event) {
    event.preventDefault()
    if (this.isDisabled()) return

    this.setState({ pending: true })

    const {
      address,
      timeAtAddress,
      residentialStatus,
      residentialStatusExplanation,
    } = this.state
    const id = getAppId()

    fetch(postApplicationRoute(5), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        address,
        timeAtAddress,
        residentialStatus,
        residentialStatusExplanation,
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
      pending,
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
      && !pending
    )
  }

  render() {
    const {
      error,
      pending,
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

        <ErrorMessage message={error} />

        <form onSubmit={this.handleSubmit}>
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

export default Fifth
