import React from 'react'
import PropTypes from 'prop-types'

import {
  FormWrapper,
  Title,
  TextList,
  Text,
  Btn,
} from '../../components'
import First from './First'
import Second from './Second'
import { applicationRoute } from '../../constants/routes'

const Application = ({ step }) => {
  if (step === 0) {
    return (
      <FormWrapper>
        <Title>{'Let\'s get started'}</Title>
        <Text>To apply, you must...</Text>

        <TextList>
          <li>Be at least 18 years old</li>
          <li>Have a valid SSN</li>
          <li>An employee of this company</li>
        </TextList>

        <Btn href={applicationRoute(1)} fullWidth>
          Sounds good!
        </Btn>
      </FormWrapper>
    )
  }
  if (step === 1) {
    return (<First />)
  }

  return (<Second />)
}

Application.propTypes = {
  step: PropTypes.number.isRequired,
}

export default Application
