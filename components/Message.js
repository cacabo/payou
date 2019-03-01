import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import {
  PINK,
  RED,
  RED_BORDER,
  MINT,
  GOBLIN,
  GREENER,
} from '../constants/colors'

import { Text } from './Text'

const Wrapper = s.div`
  width: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 0;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;

  p {
    margin-bottom: 0;
  }
`

const ErrorWrapper = s(Wrapper)`
  background: ${PINK};
  color: ${RED};
  border-color: ${RED_BORDER};
`

const SuccessWrapper = s(Wrapper)`
  background: ${MINT};
  color: ${GOBLIN};
  border-color: ${GREENER};
`

export const ErrorMessage = ({ message = '' }) => {
  if (!message) return null

  return (
    <ErrorWrapper>
      <Text>{message}</Text>
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
      <Text>{message}</Text>
    </SuccessWrapper>
  )
}

SuccessMessage.defaultProps = {
  message: '',
}

SuccessMessage.propTypes = {
  message: PropTypes.string,
}
