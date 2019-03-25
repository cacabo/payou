import React from 'react'
import s from 'styled-components'

import {
  Section,
  Container,
  Preheading,
  Title,
  MediumText,
  Text,
  Flexbox,
  Flex,
  Row,
  Col,
} from '../../components'

const Icon = s.img`
  width: 3.5rem;
  margin-right: 1.5rem;
  display: inline-block;
`

export default () => (
  <Section>
    <Container>
      <Preheading>Our solution</Preheading>
      <Title>Salary deducted personal loans</Title>

      <Row>
        <Col>
          <Flexbox>
            <Icon src="/static/img/icons/discount.svg" alt="Low APR" />
            <Flex>
              <MediumText marginBottom="0.5rem">6.99-17%</MediumText>
              <Text>Interest rate (APR)</Text>
            </Flex>
          </Flexbox>

          <Flexbox>
            <Icon src="/static/img/icons/calendar.svg" alt="Low APR" />
            <Flex>
              <MediumText marginBottom="0.5rem">3-36 months</MediumText>
              <Text>Loan period</Text>
            </Flex>
          </Flexbox>

          <Flexbox>
            <Icon src="/static/img/icons/money.svg" alt="Low APR" />
            <Flex>
              <MediumText marginBottom="0.5rem">$600-$5000</MediumText>
              <Text>Loan amount</Text>
            </Flex>
          </Flexbox>
        </Col>
        <Col>
          <MediumText>1-2 Days</MediumText>
          <Text>Time it takes between applying for and receiving a loan</Text>

          <MediumText>Cost Free</MediumText>
          <Text>Our software integrates seamlessly with employer payroll systems</Text>

          <MediumText>Credit-Damaged and Invisible</MediumText>
          <Text>Our credit rating system allows any employee to apply</Text>

          <MediumText>Credit improvement</MediumText>
          <Text>
            {'Loan performance is reported to credit agencies, helping employees build creditworthiness'}
          </Text>
        </Col>
      </Row>
    </Container>
  </Section>
)
