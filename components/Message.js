import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import {
  PINK,
  RED,
  RED_BORDER,
  MINT,
  GREENER,
  GREEN_BORDER,
} from '../constants/colors'

import { Text } from './Text'

const Wrapper = s.div`
  width: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;

  p {
    margin-bottom: 0;
  }
`

const ErrorWrapper = s(Wrapper)`
  background: ${PINK};
  color: ${RED} !important;
  border-color: ${RED_BORDER};
`

const SuccessWrapper = s(Wrapper)`
  background: ${MINT};
  color: ${GREENER} !important;
  border-color: ${GREEN_BORDER};
`

export const ErrorMessage = ({ message = '' }) => {
  if (!message) return null

  return (
    <ErrorWrapper>
      <Text color={RED}>{message}</Text>
    </ErrorWrapper>
  )
}

ErrorMessage.defaultProps = {
  message: '',
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

export const SuccessMessage = ({ message = '' }) => {
  if (!message) return null

  return (
    <SuccessWrapper>
      <Text color={GREENER}>{message}</Text>
    </SuccessWrapper>
  )
}

SuccessMessage.defaultProps = {
  message: '',
}

SuccessMessage.propTypes = {
  message: PropTypes.string,
}
