import React from 'react'

import states from '../../constants/states'
import residentialStatusOptions from '../../constants/residentialStatusOptions'
import {
  FormWrapper,
  Title,
  Label,
  Btn,
  Input,
  Select,
} from '../../components'
import { applicationRoute } from '../../constants/routes'

// residentialStatus
// residentialStatusExplanation

export default () => {
  const stateOptions = []
  stateOptions.push({ value: '', text: 'Select' })
  states.forEach(state => stateOptions.push({ value: state, text: state }))

  return (
    <FormWrapper>
      <Title>Personal Information</Title>
      <form>
        <Label>Address</Label>
        <Input smallLabel label="Address line 1" name="address1" type="text" />
        <Input smallLabel label="Address line 2" name="address2" type="text" />
        <Input smallLabel label="City" name="city" type="text" />
        <Select smallLabel label="State" options={stateOptions} name="state" />
        <Input smallLabel label="Zipcode" name="zip" type="number" />
        <hr />
        <Input label="Time spent at this address (months)" name="timeAtAddress" type="number" />
        <hr />
        <Select label="Residential Status" options={residentialStatusOptions} name="residentialStatus" />
        <Input smallLabel label="Explain" name="residentialStatusExplanation" type="text" />
      </form>
      <Btn href={applicationRoute(6)} fullWidth>
        Submit
      </Btn>
    </FormWrapper>
  )
}
