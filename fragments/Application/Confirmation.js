import React from 'react'

import {
  FormWrapper,
  Title,
  Text,
  Btn,
} from '../../components'
import { HOME_ROUTE } from '../../constants/routes'

export default () => (
  <FormWrapper>
    <Title>Application Submitted</Title>
    <Text>Thanks for taking the time to apply. We will get back to you as soon as possible.</Text>

    <Btn href={HOME_ROUTE} fullWidth>
      Back to home
    </Btn>
  </FormWrapper>
)
