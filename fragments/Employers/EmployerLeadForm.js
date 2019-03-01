import React, { Component } from 'react'

import {
  ErrorMessage,
  SuccessMessage,
  Col,
  ColSpace,
  Row,
  Textarea,
  Input,
  SubmitBtn,
} from '../../components'

class EmployerLeadForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
      error: '',
      pending: false,
      success: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    if (this.isDisabled()) {
      return
    }

    this.setState({ pending: true })

    console.log(this.state) // eslint-disable-line
  }

  isDisabled() {
    const {
      firstName,
      lastName,
      email,
      company,
      message,
      pending,
    } = this.state

    if (pending) {
      return true
    }

    if (!firstName || !lastName || !email || !company || !message) {
      return true
    }

    return false
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      company,
      message,
      error,
      success,
      pending,
    } = this.state

    return (
      <>
        <ErrorMessage message={error} />

        {success ? (
          <SuccessMessage message="Your message was sent successfully. We will get back to you as soon as possible." />
        ) : (
          <form id="contact-form" onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First"
                  required
                  value={firstName}
                  onChange={this.handleChange}
                />
              </Col>

              <ColSpace />

              <Col>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  required
                  value={lastName}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>

            <Input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={this.handleChange}
            />

            <Input
              type="text"
              name="company"
              placeholder="Company"
              required
              value={company}
              onChange={this.handleChange}
            />

            <Textarea
              type="text"
              name="message"
              rows="5"
              placeholder="Message..."
              required
              value={message}
              onChange={this.handleChange}
            />

            <SubmitBtn
              type="submit"
              name="submit"
              value={pending ? 'Sending...' : 'Send'}
              id="submit-button"
              disabled={this.isDisabled()}
            />
          </form>
        )}
      </>
    )
  }
}

export default EmployerLeadForm
