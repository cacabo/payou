import s from 'styled-components'
import Link from 'next/link'
import { PURPLE, WHITE } from '../constants/colors'

const BtnWrapper = s.a`
  background: ${PURPLE};
  padding: 12px 24px;
  border-radius: 4px;
  color: ${WHITE};
  display: inline-block;
  cursor: pointer;
`

export const Btn = ({ href, children }) => (
  <Link href={href}>
    <BtnWrapper>
      {children}
    </BtnWrapper>
  </Link>
)
