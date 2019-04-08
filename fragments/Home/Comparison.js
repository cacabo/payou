import React from 'react'
import s from 'styled-components'

import {
  Section,
  Container,
  Preheading,
  Text,
  Title,
  Row,
  Col,
  ColSpace,
} from '../../components'
import { SKY, NAVY } from '../../constants/colors'


const Chart = s.img`
  width: 100%;
  height: auto;
`


const StatCol = s(Col)`
  text-align: center;
`


const Stat = s(Text)`
  background: ${SKY};
  color: ${NAVY};
  font-weight: 500;
  border-radius: 4px;
  padding: 0.5rem 1rem;
`


export default () => (
  <Section>
    <Container>
      <Row>
        <Col>
          <Preheading>The PAYOU difference</Preheading>
          <Title>Loan comparison</Title>
        </Col>

        <StatCol md={3} lg={2}>
          <Stat big marginBottom="0.5rem">
            $2500
          </Stat>
          <Text marginBottom="0">
            Loan Amount
          </Text>
          <Text small>Fixed Rate Personal Loan</Text>
        </StatCol>

        <ColSpace />

        <StatCol md={3} lg={2}>
          <Stat big marginBottom="0.5rem">
            580-669
          </Stat>
          <Text marginBottom="0">
            Credit Score
          </Text>
          <Text small>
            {'"Fair" Rated FICO Score'}
          </Text>
        </StatCol>
      </Row>

      <Chart src="/static/img/loan-comparison.png" />
    </Container>
  </Section>
)
