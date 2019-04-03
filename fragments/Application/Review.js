import React from 'react'

import {
  FormWrapper,
  Title,
  Btn,
  Text,
} from '../../components'
import { applicationRoute } from '../../constants/routes'


export default () => (
  <FormWrapper>
    <Title>Review Application</Title>
    <Text>TODO put the application information here</Text>
    <Btn href={applicationRoute(8)} fullWidth>
      Submit Application
    </Btn>
  </FormWrapper>
)
