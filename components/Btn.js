import React from 'react'
import s from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'

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

export const ActionBtn = ({ handleClick, children }) => (
  <BtnWrapper onClick={handleClick}>
    {children}
  </BtnWrapper>
)

ActionBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export const Btn = ({ href, children }) => (
  <Link href={href}>
    <BtnWrapper>
      {children}
    </BtnWrapper>
  </Link>
)

Btn.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
