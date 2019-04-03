import React from 'react'

import {
  FormWrapper,
  Title,
  Checkbox,
  Input,
  Btn,
} from '../../components'
import { applicationRoute } from '../../constants/routes'

export default () => (
  <FormWrapper>
    <Title>Login information</Title>
    <form>
      <Input label="Email" name="email" type="email" />
      <Input label="Password" name="password" type="password" />
      <Input label="Confirm password" name="confirmPassword" type="password" />
      <Checkbox label="Subscribe to updates from Payou" name="subscribeToNews" />
      <Checkbox label="Agree to terms and conditions" name="agreeToTerms" />
    </form>
    <Btn href={applicationRoute(4)} fullWidth>
      Next
    </Btn>
  </FormWrapper>
)
