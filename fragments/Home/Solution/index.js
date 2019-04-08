import React from 'react'


import {
  Section,
  Container,
  Preheading,
  Title,
  Text,
  Row,
  ShiftWrapper,
  Col,
  ColSpace,
} from '../../../components'
import Stats from './Stats'
import Facts from './Facts'


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

            <Col offsetSm={1} offsetMd={0} lg={10} offsetLg={2}>
              <Stats />
            </Col>
          </Col>

          <ColSpace />

          <Col>
            <Facts />
          </Col>
        </Row>
      </ShiftWrapper>
    </Container>
  </Section>
)
