import React from 'react'
import s from 'styled-components'

import {
  Container,
  Section,
  Preheading,
  Title,
  ActionBtn,
} from '../../components'
import { SNOW } from '../../constants/colors'

const TableTitle = s.h4`
  padding-top: 1rem;
  text-align: center;
`

export default () => (
  <>
    <Section background={SNOW}>
      <Container>
        <Preheading>Mission</Preheading>
        <Title>Making it easier on your employees</Title>

        <p>
          {'Financial stress is directly correlated with a loss in productivity, with employees spending up to 3 hours a day worrying about their finances.'}
        </p>

        <p>What SalaryMatch can do for you:</p>

        <p>
          {'We give employees the tools to take control of their finances and make financial stress an issue of the past. Through our innovative credit solutions, we want to help people unlock their full potential and live their best lives.'}
        </p>
      </Container>
    </Section>

    <Section>
      <Container>
        <Preheading>Why us?</Preheading>
        <Title>Risk-free, Cost-free, Stress-free</Title>

        <p>
          {'Employers can offer SalaryMatch to their employees at no cost at all. Our solution is designed to seamlessly integrate with your firm by taking full responsibility of the loan process and offering your employees the benefits they deserve.'}
        </p>

        <p>
          {'We integrate within hours with the software you already use and our model does not interfere with your taxes.'}
        </p>

        <ActionBtn handleClick={() => console.log('TODO')}>
          Get in touch
        </ActionBtn>
      </Container>
    </Section>

    <Section>
      <Container>
        <Preheading>Time is money</Preheading>
        <Title>Increase in Retention Rate</Title>

        <p>
          {'High turnover is a major source of financial costs for employers. When employees leaves a firm, a company loses the investment it has made in training, recruiting and hiring, as well as a loss of productivity associated with experienced workers. They must also incur significant costs with hiring, training and errors committed by new employees.'}
        </p>

        <TableTitle>Estimates of Turnover Costs</TableTitle>
        <table>
          <thead>
            <tr>
              {[
                'Position',
                'Annual Salary',
                '% of Annual Salary',
                'Replacement Cost Example',
              ].map(text => (
                <th key={text}>{text}</th>
              ))}
            </tr>
          </thead>
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

        <p>
          {'Financial stress is directly correlated with a loss in productivity, with employees spending up to 3 hours a day worrying about their finances. Through our credit solutions to address financial stress, we help firms see a real increase in productivity, and studies have shown that individuals enrolled in salary deducted loans in the United Kingdom increased a company\'s retention rate by 28%, translating into significant cost savings with hiring, loss of productivity associated with experienced employees leaving, and training'}
        </p>
      </Container>
    </Section>
  </>
)
