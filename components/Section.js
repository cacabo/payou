import s from 'styled-components'

import { WHITE } from '../constants/colors'

export const Section = s.section`
  padding: ${({ hero }) => (
    hero ? (`
      calc(6rem + 2.5%) 0 calc(3rem + 2.5%) 0;
    `) : (`
      calc(2rem + 2.5%) 0 calc(1rem + 2.5%) 0;
    `)
  )}
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  background: ${({ background }) => background || 'transparent'};
`

export const BackgroundSection = s(Section)`
  ${({ backgroundImage }) => (`
    background-image: url(${backgroundImage || ''});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `)}
`

export const ShiftWrapper = s.div`
  background: ${WHITE};
  padding: 2rem 2rem 0 2rem;
  margin-left: -2rem;
  margin-right: -2rem;
`
