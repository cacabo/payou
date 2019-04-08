import React from 'react'
import s from 'styled-components'


import {
  Section,
  Container,
  Preheading,
  Title,
  MediumText,
  Text,
  Row,
  ShiftWrapper,
  Col,
  ColSpace,
} from '../../../components'
import { SKY } from '../../../constants/colors'
import Stats from './Stats'


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


export default () => (
  <Section paddingTop="0">
    <Container>
      <ShiftWrapper>
        <Preheading>Our solution</Preheading>
        <Title>Salary deducted personal loans</Title>

        <Row>
          <Col md={5}>
            <Text>
              {'Personal loans to employees of partnered companies with automatic, fixed-rate, salary deducted payments'}
            </Text>

            <Col lg={10} offsetLg={2}>
              <Stats />
            </Col>
          </Col>

          <ColSpace />

          <Col>
            <FactRow>
              <Fact>
                <MediumText marginBottom="0.25rem">1-2 Days</MediumText>
                <Text marginBottom="0">Time it takes between applying for and receiving a loan</Text>
              </Fact>

              <Fact>
                <MediumText marginBottom="0.25rem">Risk/Cost Free</MediumText>
                <Text marginBottom="0">Our software integrates seamlessly with employer payroll systems</Text>
              </Fact>
            </FactRow>

            <FactRow>
              <Fact>
                <MediumText marginBottom="0.25rem">Credit-Damaged and Credit-Invisible</MediumText>
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
