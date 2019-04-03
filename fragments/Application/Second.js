import React from 'react'

import {
  FormWrapper,
  Title,
  Select,
  Input,
  Row,
  Col,
  Btn,
  ColSpace,
  Label,
} from '../../components'
import { applicationRoute } from '../../constants/routes'

export default () => {
  const dayOptions = []
  for (let i = 1; i <= 31; i += 1) {
    dayOptions.push({ value: i, text: `${i}` })
  }

  const monthOptions = []
  for (let j = 1; j <= 12; j += 1) {
    monthOptions.push({ value: j, text: `${j}` })
  }

  const yearOptions = []
  for (let k = 1900; k <= 2002; k += 1) {
    yearOptions.push({ value: k, text: `${k}` })
  }

  return (
    <FormWrapper>
      <Title>Basic info</Title>
      <form>
        <Input type="string" label="First name" name="firstName" placeholder="First name" />
        <Input type="string" label="Last name" name="lastName" placeholder="Last name" />
        <Input type="string" label="Suffix" name="suffix" placeholder="Suffix" />

        <Label>Date of birth</Label>
        <Row>
          <Col>
            <Select smallLabel label="Day" name="day" options={dayOptions} />
          </Col>
          <ColSpace />
          <Col>
            <Select smallLabel label="Month" name="month" options={monthOptions} />
          </Col>
          <ColSpace />
          <Col>
            <Select smallLabel label="Year" name="year" options={yearOptions} />
          </Col>
        </Row>

        <Input type="tel" label="Cell phone number" name="phone" placeholder="(123) 456-7890" />
      </form>
      <Btn href={applicationRoute(3)} fullWidth>
        Next
      </Btn>
    </FormWrapper>
  )
}
