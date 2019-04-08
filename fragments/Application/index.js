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
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Review from './Review'
import Confirmation from './Confirmation'

import { applicationRoute } from '../../constants/routes'
import titles from './data/titles'

const Application = ({ step }) => {
  switch (step) {
    case 0:
      return (
        <FormWrapper>
          <Title>{titles[0]}</Title>
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

    case 1: return (<First />)

    case 2: return (<Second />)

    case 3: return (<Third />)

    case 4: return (<Fourth />)

    case 5: return (<Fifth />)

    case 6: return (<Sixth />)

    case 7: return (<Review />)

    case 8: return (<Confirmation />)

    default:
      return null // TODO 404
  }
}

Application.propTypes = {
  step: PropTypes.number.isRequired,
}

export default Application
