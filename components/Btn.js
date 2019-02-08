import s from 'styled-components'
import Link from 'next/link'
import { GREEN, WHITE, FOREST } from '../constants/colors'

const BtnWrapper = s.a`
  background: ${GREEN};
  padding: 8px 24px;
  border-radius: 4px;
  color: ${WHITE};
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  font-size: 80%;

  &:hover {
    background: ${FOREST};
  }

  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: ${WHITE};
    text-decoration: none;
  }
`

export const Btn = ({ href, children }) => (
  <Link href={href}>
    <BtnWrapper>
      {children}
    </BtnWrapper>
  </Link>
)
