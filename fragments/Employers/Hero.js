import React from 'react'

import {
  BackgroundSection,
  Row,
  Col,
  Container,
  Text,
  Title,
} from '../../components'

export default () => (
  <BackgroundSection backgroundImage="/static/img/bg-1-01.svg" hero marginBottom="-3rem">
    <Container>
      <Row>
        <Col width="70%">
          <Title big white>Empowering your employees</Title>

          <Text white>
            {'Financial stress is directly correlated with a loss in productivity, with employees spending up to 3 hours a day worrying about their finances.'}
          </Text>

          <Text white>
            {'We give employees the tools to take control of their finances and make financial stress an issue of the past. Through our innovative credit solutions, we want to help people unlock their full potential and live their best lives.'}
          </Text>
        </Col>
      </Row>
    </Container>
  </BackgroundSection>
)
