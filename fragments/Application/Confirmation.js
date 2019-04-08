import React from 'react'


import {
  FormWrapper,
  Title,
  Text,
  Btn,
} from '../../components'
import { HOME_ROUTE } from '../../constants/routes'
import titles from './data/titles'


export default () => (
  <FormWrapper>
    <Title>{titles[8]}</Title>
    <Text>Thanks for taking the time to apply. We will get back to you as soon as possible.</Text>

    <Btn href={HOME_ROUTE} fullWidth>
      Back to home
    </Btn>
  </FormWrapper>
)
