import s from 'styled-components'

import { WHITE, SNOW } from '../constants/colors'

export const Background = s.div`
  min-height: calc(100vh - 63px);
  display: block;
  width: 100%;
`

export const SnowBackground = s(Background)`
  background: ${SNOW};
`

export const WhiteBackground = s(Background)`
  background: ${WHITE};
`
