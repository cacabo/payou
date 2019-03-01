import React from 'react'
import s from 'styled-components'

import {
  Container,
  Section,
  Title,
  Text,
  Row,
  Col,
} from '../../components'

const Wrapper = s.div`
  padding-top: 20vh;
  padding-bottom: 10vh;
  min-height: calc(100vh - 80px);
  font-size: 120%;
  line-height: 1.25;
`

export default () => (
  <Wrapper>
    <Section>
      <Container>
        <Row>
          <Col width="75%">
            <Title>
              {'Hi. We\'re Salarymatch—a seamless way for employees like you to take out cheap, salary-deducted loans'}
            </Title>
            <Text>We give you financial security by cutting out fees and payment deadlines</Text>
          </Col>
        </Row>
      </Container>
    </Section>
  </Wrapper>
)
