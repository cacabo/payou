import React from 'react'
import s from 'styled-components'


import {
  MediumText,
  Text,
  Flexbox,
  Flex,
} from '../../../components'
import { NAVY } from '../../../constants/colors'


const Icon = s.img`
  width: auto;
  height: 3rem;
  box-sizing: border-box;
  margin-right: 1.5rem;
`


const stats = [
  {
    icon: 'discount.svg',
    alt: 'discount',
    stat: '6.99-17%',
    text: 'Interest rate (APR)',
  },
  {
    icon: 'calendar.svg',
    alt: 'calendar',
    stat: '3-36 months',
    text: 'Loan period',
  },
  {
    icon: 'money.svg',
    alt: 'money',
    stat: '$600-$5000',
    text: 'Loan amount',
  },
  {
    icon: 'clock.svg',
    alt: 'Clock',
    stat: '1-2 days',
    text: 'Time to receive funds',
  },
]


export default () => (
  stats.map(({
    icon,
    alt,
    stat,
    text,
  }) => (
    <Flexbox marginBottom="1rem" key={alt}>
      <Icon src={`/static/img/icons/${icon}`} alt={alt} />
      <Flex>
        <MediumText big color={NAVY} marginBottom="0.125rem">{stat}</MediumText>
        <Text>{text}</Text>
      </Flex>
    </Flexbox>
  ))
)
