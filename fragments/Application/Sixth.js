import React from 'react'

import {
  FormWrapper,
  Title,
  Checkbox,
  Btn,
  Input,
} from '../../components'
import { applicationRoute } from '../../constants/routes'


export default () => (
  <FormWrapper>
    <Title>Personal Information (cont.)</Title>
    <form>
      <Input label="Social Security Number" name="ssn" type="number" />
      <Input label="Number of financial dependents" name="numberOfFinancialDependents" number="number" />
      <Checkbox label="Do you expect changes to your employment status?" name="expectsChangesToEmploymentStatus" />
    </form>
    <Btn href={applicationRoute(7)} fullWidth>
      Next
    </Btn>
  </FormWrapper>
)
