import React from 'react'
import s from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { GREEN, WHITE, GREENER } from '../constants/colors'

const styles = `
  background: ${GREEN};
  padding: 16px 24px;
  border-radius: 4px;
  color: ${WHITE};
  display: inline-block;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${GREENER};
  }

  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: ${WHITE};
    text-decoration: none;
  }
`

const BtnWrapper = s.a`${styles}`

export const ActionBtn = ({ handleClick, children }) => (
  <BtnWrapper onClick={handleClick}>
    {children}
  </BtnWrapper>
)

ActionBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export const BtnInput = s.input`${styles}`

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
