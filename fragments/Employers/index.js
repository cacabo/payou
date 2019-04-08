import React, { Component } from 'react'
import s from 'styled-components'

import {
  Container,
  Section,
  Preheading,
  Title,
  ActionBtn,
  ShiftWrapper,
  Text,
} from '../../components'
import Hero from './Hero'
import EmployerLeadModal from './EmployerLeadModal'

const TableTitle = s.h4`
  padding-top: 1rem;
  text-align: center;
`

const Table = s.table`
  padding-top: 1rem;
`

const TableHead = s.thead`
  th {
    font-weight: 500;
  }
`

class Employers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    const { showModal } = this.state
    this.setState({ showModal: !showModal })
  }

  render() {
    const { showModal } = this.state

    return (
      <>
        <Hero />

        <Section paddingTop="0">
          <Container>
            <ShiftWrapper>
              <Preheading>Why us?</Preheading>
              <Title>Risk-free, Cost-free, Stress-free</Title>

              <Text>
                {'Employers can offer PAYOU to their employees at no cost at all. Our solution is designed to seamlessly integrate with your firm by taking full responsibility of the loan process and offering your employees the benefits they deserve.'}
              </Text>

              <Text>
                {'We integrate within hours with the software you already use and our model does not interfere with your taxes.'}
              </Text>

              <ActionBtn handleClick={this.toggleModal}>
                Get in touch
              </ActionBtn>
            </ShiftWrapper>
          </Container>
        </Section>

        <Section>
          <Container>
            <Preheading>Time is money</Preheading>
            <Title>Increase in retention rate</Title>

            <Text>
              {'High turnover is a major source of financial costs for employers. When employees leaves a firm, a company loses the investment it has made in training, recruiting and hiring, as well as a loss of productivity associated with experienced workers. They must also incur significant costs with hiring, training and errors committed by new employees.'}
            </Text>

            <TableTitle>Estimates of Turnover Costs</TableTitle>
            <Table>
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
            </Table>
          </Container>
        </Section>

        <Section>
          <Container>
            <Preheading>Work</Preheading>
            <Title>Increase in productivity</Title>

            <Text>
              {'Financial stress is directly correlated with a loss in productivity, with employees spending up to 3 hours a day worrying about their finances. Through our credit solutions to address financial stress, we help firms see a real increase in productivity, and studies have shown that individuals enrolled in salary deducted loans in the United Kingdom increased a company\'s retention rate by 28%, translating into significant cost savings with hiring, loss of productivity associated with experienced employees leaving, and training'}
            </Text>

            <ActionBtn handleClick={this.toggleModal}>
              Sounds good?
            </ActionBtn>
          </Container>
        </Section>

        <EmployerLeadModal show={showModal} toggle={this.toggleModal} />
      </>
    )
  }
}

export default Employers
