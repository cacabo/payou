import React, { Component } from 'react'
import fetch from 'unfetch'
import { NEW_EMPLOYEE_LEAD_ROUTE } from '../../constants/routes'

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

const DEFAULT_ERROR = 'Something went wrong, check the form and try again'

class EmployerLeadForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
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


  /**
   * Handle when the user types something
   *
   * @param event of the keypress
   */
  handleChange(event) {
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value,
    })
  }


  /**
   * Handle when the user submits the form
   *
   * @param e submission
   */
  handleSubmit(e) {
    e.preventDefault()

    if (this.isDisabled()) {
      return
    }

    this.setState({ pending: true })

    const {
      firstName,
      lastName,
      email,
      company,
      jobTitle,
      message,
    } = this.state

    fetch(NEW_EMPLOYEE_LEAD_ROUTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        jobTitle,
        company,
        message,
      }),
    })
      .then(response => response.json())
      .then((data) => {
        if (data && data.success) {
          this.setState({ pending: false, success: true })
        } else {
          this.setState({ pending: false, error: DEFAULT_ERROR })
        }
      })
      .catch((err) => {
        this.setState({
          pending: false,
          error: err.message || DEFAULT_ERROR,
        })
      })
  }


  /**
   * Check if the form should be disabled--that is, if the user should not be
   * allowed to submit the form
   *
   * @return boolean
   */
  isDisabled() {
    const {
      firstName,
      lastName,
      email,
      company,
      jobTitle,
      message,
      pending,
    } = this.state

    if (pending) {
      return true
    }

    if (!firstName || !lastName || !email || !company || !message || !jobTitle) {
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
      jobTitle,
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

            <Input
              type="text"
              name="jobTitle"
              placeholder="Job title"
              required
              value={jobTitle}
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
