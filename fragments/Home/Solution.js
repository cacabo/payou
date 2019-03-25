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
  ShiftWrapper,
  Col,
} from '../../components'
import { SKY } from '../../constants/colors'

const FactRow = s(Row)`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`

const Fact = s(Col)`
  background: ${SKY};
  padding: 1rem;
  border-radius: 8px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`

const Icon = s.img`
  width: auto;
  height: 3rem;
  box-sizing: border-box;
  margin-right: 1.5rem;
`

export default () => (
  <Section paddingTop="0">
    <Container>
      <ShiftWrapper>
        <Preheading>Our solution</Preheading>
        <Title>Salary deducted personal loans</Title>

        <Row>
          <Col md={5} lg={4}>
            <Flexbox marginBottom="1rem">
              <Icon src="/static/img/icons/discount.svg" alt="Low APR" />
              <Flex>
                <MediumText marginBottom="0.25rem">6.99-17%</MediumText>
                <Text>Interest rate (APR)</Text>
              </Flex>
            </Flexbox>

            <Flexbox marginBottom="1rem">
              <Icon src="/static/img/icons/calendar.svg" alt="Low APR" />
              <Flex>
                <MediumText marginBottom="0.25rem">3-36 months</MediumText>
                <Text>Loan period</Text>
              </Flex>
            </Flexbox>

            <Flexbox marginBottom="1rem">
              <Icon src="/static/img/icons/money.svg" alt="Low APR" />
              <Flex>
                <MediumText marginBottom="0.25rem">$600-$5000</MediumText>
                <Text>Loan amount</Text>
              </Flex>
            </Flexbox>
          </Col>
          <Col>
            <FactRow>
              <Fact>
                <MediumText marginBottom="0.25rem">1-2 Days</MediumText>
                <Text marginBottom="0">Time it takes between applying for and receiving a loan</Text>
              </Fact>

              <Fact>
                <MediumText marginBottom="0.25rem">Cost Free</MediumText>
                <Text marginBottom="0">Our software integrates seamlessly with employer payroll systems</Text>
              </Fact>
            </FactRow>

            <FactRow>
              <Fact>
                <MediumText marginBottom="0.25rem">Credit-Damaged and Invisible</MediumText>
                <Text marginBottom="0">Our credit rating system allows any employee to apply</Text>
              </Fact>
              <Fact>
                <MediumText marginBottom="0.25rem">Credit improvement</MediumText>
                <Text marginBottom="0">
                  {'Loan performance is reported to credit agencies, helping employees build creditworthiness'}
                </Text>
              </Fact>
            </FactRow>
          </Col>
        </Row>
      </ShiftWrapper>
    </Container>
  </Section>
)
