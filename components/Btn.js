import s from 'styled-components'
import Link from 'next/link'
import { GREEN, WHITE } from '../constants/colors'

const BtnWrapper = s.a`
  background: ${GREEN};
  padding: 12px 24px;
  border-radius: 4px;
  color: ${WHITE};
  display: inline-block;
  cursor: pointer;
  font-weight: bold;

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
