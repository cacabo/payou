import React from 'react'
import s from 'styled-components'

import {
  Container,
  Section,
  BackgroundSection,
  Preheading,
  Title,
  ActionBtn,
  Text,
  Row,
  Col,
} from '../../components'

const TableTitle = s.h4`
  padding-top: 1rem;
  text-align: center;
`

const TableHead = s.thead`
  th {
    font-weight: 600;
  }
`

export default () => (
  <>
    <BackgroundSection backgroundImage="/static/img/bg-1-01.svg">
      <Container>
        <Row>
          <Col width="70%">
            <Preheading white>Mission</Preheading>
            <Title white>Making it easier on your employees</Title>

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

    <Section>
      <Container>
        <Preheading>Why us?</Preheading>
        <Title>Risk-free, Cost-free, Stress-free</Title>

        <Text>
          {'Employers can offer SalaryMatch to their employees at no cost at all. Our solution is designed to seamlessly integrate with your firm by taking full responsibility of the loan process and offering your employees the benefits they deserve.'}
        </Text>

        <Text>
          {'We integrate within hours with the software you already use and our model does not interfere with your taxes.'}
        </Text>

        <ActionBtn handleClick={() => 'TODO'}>
          Get in touch
        </ActionBtn>
      </Container>
    </Section>

    <Section>
      <Container>
        <Preheading>Time is money</Preheading>
        <Title>Increase in Retention Rate</Title>

        <Text>
          {'High turnover is a major source of financial costs for employers. When employees leaves a firm, a company loses the investment it has made in training, recruiting and hiring, as well as a loss of productivity associated with experienced workers. They must also incur significant costs with hiring, training and errors committed by new employees.'}
        </Text>

        <TableTitle>Estimates of Turnover Costs</TableTitle>
        <table>
          <TableHead>
            <tr>
              {[
                'Position',
                'Annual Salary',
                '% of Annual Salary',
                'Replacement Cost Example',
              ].map(text => (
                <th key={text}>
                  {text}
                </th>
              ))}
            </tr>
          </TableHead>
          <tbody>
            {[
              [
                'Low-Paying Jobs',
                'Under $30,000',
                '16%',
                '$10/hour retail employee is $3,328',
              ], [
                'Mid-Range Positions',
                '$30,000 - $50,000',
                '20%',
                '$40k retail manager is $8,000',
              ],
            ].map(row => (
              <tr key={row[0]}>
                {row.map(text => (
                  <td key={text}>{text}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Section>

    <Section>
      <Container>
        <Preheading>Work</Preheading>
        <Title>Increase in productivity</Title>

        <Text>
          {'Financial stress is directly correlated with a loss in productivity, with employees spending up to 3 hours a day worrying about their finances. Through our credit solutions to address financial stress, we help firms see a real increase in productivity, and studies have shown that individuals enrolled in salary deducted loans in the United Kingdom increased a company\'s retention rate by 28%, translating into significant cost savings with hiring, loss of productivity associated with experienced employees leaving, and training'}
        </Text>
      </Container>
    </Section>
  </>
)
