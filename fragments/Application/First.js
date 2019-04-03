import React from 'react'

import {
  FormWrapper,
  Title,
  Select,
  Btn,
} from '../../components'
import { applicationRoute } from '../../constants/routes'


export default () => {
  const loanValueOptions = []
  for (let i = 6; i <= 50; i += 1) {
    const value = i * 100
    loanValueOptions.push({ value, text: `$${value}` })
  }

  const termOptions = []
  for (let j = 3; j < 37; j += 1) {
    termOptions.push({ value: j, text: `${j} months` })
  }

  return (
    <FormWrapper>
      <Title>Loan conditions</Title>
      <form>
        <Select label="Loan Value" name="loanValue" options={loanValueOptions} />
        <Select label="Term Length" name="term" options={termOptions} />
      </form>
      <Btn href={applicationRoute(2)} fullWidth>
        Next
      </Btn>
    </FormWrapper>
  )
}
