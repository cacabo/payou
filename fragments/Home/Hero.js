import React from 'react'
import s from 'styled-components'

import routes from '../../constants/routes'

import {
  Container,
  Section,
  Title,
  Text,
  Row,
  Col,
  Btn,
} from '../../components'
import { SM, maxWidth } from '../../constants/widths'

const Wrapper = s.div`
  padding-top: 22.5vh;
  padding-bottom: 10vh;
  font-size: 120%;
  line-height: 1.25;
  background-image: url('/static/img/people.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${maxWidth(SM)} {
    padding-top: 10vh;
  }
`

export default () => (
  <Wrapper>
    <Section>
      <Container>
        <Row>
          <Col sm={12} md={10} lg={9}>
            <Title big white>
              {'Easy, quick and affordable personal loans'}
            </Title>
            <Text big white>
              PAYOU helps you move from debt to savings through salary-deducted personal loans
            </Text>
            <Btn href={routes.NEW_APPLICATION_ROUTE}>
              Apply today
            </Btn>
          </Col>
        </Row>
      </Container>
    </Section>
  </Wrapper>
)
