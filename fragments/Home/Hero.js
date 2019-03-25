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
              {'Easy, quick, affordable loans'}
            </Title>
            <Text>
              We want to help you move from debt to savings through affordable salary-deducted loans
            </Text>
          </Col>
        </Row>
      </Container>
    </Section>
  </Wrapper>
)
