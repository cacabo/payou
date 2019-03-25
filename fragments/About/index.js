import React from 'react'
import {
  Container,
  Section,
  BackgroundSection,
  Title,
  Text,
  ShiftWrapper,
  Row,
  Col,
  Blockquote,
  List,
} from '../../components'

export default () => (
  <>
    <BackgroundSection backgroundImage="/static/img/bg-2-blue.svg" hero marginBottom="-3rem">
      <Container>
        <Row>
          <Col width="60%">
            <Title big white>As students, we realized two things</Title>

            <List
              white
              items={[
                {
                  title: 'Money can be tough',
                  text: 'Money management is vital skill to learn',
                },
                {
                  title: 'Credit can be even harder',
                  text: 'It is incredibly difficult to access reasonable credit without a solid financial background',
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </BackgroundSection>

    <Section paddingTop="0">
      <Container>
        <ShiftWrapper>
          <Title>Why we exist</Title>

          <Text>
            {'Student\'s are the most indebted group of individuals in the United States, and even with guaranteed future streams of capital from Summer Internships and Full-time job offers, we are not able to reconcile present expenses with future income by not being able to access reasonably priced credit solutions to cover unexpected, and even expected, expenses. On top of this, as young adults we did not have a credit score nor were we able to build one given the time-span of contribution necessary to do so. With this in mind, what if there was a way for your future to secure your present? After hearing similar stories from various friends, we decided to act.'}
          </Text>

          <Blockquote>
            {'People should not have to choose between covering unexpected expenses, cutting down on basic necessities, or taking predatory credit offerings. No one should have to constantly worry about their finances due to circumstances out of their control.'}
          </Blockquote>

          <Text>
            {'After researching we realized this is a problem that plagues America as a whole, not just students, with over 46% of Americans not being able to cover $400 unexpected expenses and not having access to reasonably priced credit solutions. We believe that metrics used by Credit Bureaus to determine Credit Scores don’t accurately reflect one’s true credit-worthiness, given that employment offers verifying future streams of income could act as better indicators. This drove us to create Payou, which aims to use metrics that more accurately reflect an individual\'s true credit-worthiness, while employing a salary deduction structure for debt payment, greatly reducing default rates and allowing us to offer reasonably priced loans.'}
          </Text>

          <Text>
            {'We also believe traditional loan providers create a misalignment of incentives by directly compensating for an individual’s chance of defaulting with a higher interest rate, which in turn makes it even harder for them to pay back the loan, increasing default rates. At Payou we compensate for credit scores that reflect a higher chance of default through our salary-link, which significantly reduces default rates, not requiring us to charge higher interest rates, creating a great alignment of incentives with our borrowers.'}
          </Text>
        </ShiftWrapper>
      </Container>
    </Section>
  </>
)
