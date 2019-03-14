import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import {
  Flex,
  Flexbox,
  StrongText,
  Text,
} from './index'
import { SKY, NAVY, WHITE_ALPHA } from '../constants/colors'

const Wrapper = s.div`
  p {
    margin-bottom: calc(1.45rem / 8) !important;
  }
`

const NumberCircle = s.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ white }) => (white ? WHITE_ALPHA(0.4) : SKY)};
  border-radius: 50%;
  color: ${({ white }) => (white ? WHITE_ALPHA(0.9) : NAVY)};
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 0.65rem;
  margin-right: 1.25rem;
`

export const ListNumber = ({ number, white }) => (
  <NumberCircle white={white}>
    {number}
  </NumberCircle>
)

ListNumber.defaultProps = {
  white: false,
}

ListNumber.propTypes = {
  white: PropTypes.bool,
  number: PropTypes.number.isRequired,
}

export const List = ({ items, white, center }) => (
  <Wrapper>
    {items.map(({ title, text }, idx) => (
      <Flexbox key={`${title}-${text}`} marginBottom="1.5rem">
        <ListNumber white={white} number={idx + 1} />

        <Flex paddingTop={center ? '0.5rem' : '0'}>
          {title && (<StrongText white={white}>{title}</StrongText>)}
          {text && (<Text white={white}>{text}</Text>)}
        </Flex>
      </Flexbox>
    ))}
  </Wrapper>
)

List.defaultProps = {
  center: false,
  white: false,
}

List.propTypes = {
  center: PropTypes.bool,
  white: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
}
