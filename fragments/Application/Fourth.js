import React from 'react'

import {
  FormWrapper,
  Title,
  Row,
  Col,
  ColSpace,
  Input,
  Select,
  Label,
  Btn,
} from '../../components'
import { applicationRoute } from '../../constants/routes'

export default () => {
  const monthOptions = []
  for (let j = 1; j <= 12; j += 1) {
    monthOptions.push({ value: j, text: `${j}` })
  }

  const yearOptions = []
  for (let k = 1950; k <= 2002; k += 1) {
    yearOptions.push({ value: k, text: `${k}` })
  }

  const paycycleOptions = []
  for (let i = 1; i <= 52; i += 1) {
    paycycleOptions.push({ value: i, text: `${i} weeks` })
  }

  return (
    <FormWrapper>
      <Title>Employment details</Title>
      <form>
        <Input label="Payroll ID" name="payrollId" type="text" placeholder="12345678-001" />
        <Input label="Gross annual income ($)" name="grossAnnualIncome" type="number" placeholder="75,000" />
        <Input label="Other income ($)" name="otherIncome" type="number" placeholder="25,000" />
        <Label>Employment start date</Label>
        <Row>
          <Col>
            <Select smallLabel label="Month" name="month" options={monthOptions} />
          </Col>
          <ColSpace />
          <Col>
            <Select smallLabel label="Year" name="year" options={yearOptions} />
          </Col>
        </Row>
        <Select label="Paycycle (weeks)" name="paycycle" options={paycycleOptions} />
      </form>
      <Btn href={applicationRoute(5)} fullWidth>
        Submit
      </Btn>
    </FormWrapper>
  )
}
