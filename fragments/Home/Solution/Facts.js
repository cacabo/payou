import React from 'react'
import s from 'styled-components'
import PropTypes from 'prop-types'


import {
  MediumText,
  Text,
  Row,
  Col,
} from '../../../components'
import { maxWidth, SM } from '../../../constants/widths'
import {
  SKY,
  NAVY,
  PERIWINKLE,
  ZINC,
  BLUE_BORDER,
} from '../../../constants/colors'


const FactRow = s(Row)`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`


const Fact = s(Col)`
  background: ${({ background }) => background || SKY};
  padding: 2rem 1rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid ${BLUE_BORDER};

  ${maxWidth(SM)} {
    padding: 1rem;
  }
`


const facts = [
  {
    header: 'Cost/Risk Free',
    body: 'We offer our services to employers free of cost and liability',
    whiteText: true,
    background: NAVY,
  },
  {
    header: 'Light-Touch',
    body: 'Our software integrates seamlessly with employer payroll systems',
    whiteText: false,
    background: PERIWINKLE,
  },
  {
    header: 'Credit-Damaged and Credit-Invisible',
    body: 'Our credit rating system allows any employee to apply',
    whiteText: false,
    background: ZINC,
  },
  {
    header: 'Credit Improvement',
    body: 'Loan performance is reported to credit agencies, helping employees build creditworthiness',
    whiteText: false,
  },
]


const renderFact = ({
  header,
  body,
  whiteText,
  background,
}) => (
  <Fact background={background}>
    <MediumText white={whiteText} marginBottom="0.5rem">{header}</MediumText>
    <Text white={whiteText} marginBottom="0">{body}</Text>
  </Fact>
)


renderFact.defaultProps = {
  background: undefined,
}


renderFact.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  whiteText: PropTypes.bool.isRequired,
  background: PropTypes.string,
}


export default () => (
  <>
    <FactRow>
      {renderFact(facts[0])}
      {renderFact(facts[1])}
    </FactRow>

    <FactRow>
      {renderFact(facts[2])}
      {renderFact(facts[3])}
    </FactRow>
  </>
)
