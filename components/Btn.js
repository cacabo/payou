import React from 'react'
import s, { css } from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'

import {
  NAVY,
  WHITE,
  MIDNIGHT,
  SKY,
} from '../constants/colors'

const styles = css`
  background: ${NAVY};
  padding: 16px 24px;
  border-radius: 4px;
  color: ${WHITE};
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  text-align: center;

  ${({ fullWidth }) => fullWidth && (`
    width: 100%;
    margin-top: 0.5rem;
  `)}

  &:hover {
    background: ${MIDNIGHT};
  }

  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: ${WHITE};
    text-decoration: none;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${SKY};
  }

  ${({ disabled }) => disabled && (`
    opacity: 0.5;
    cursor: not-allowed;
  `)}
`

export const BtnInput = s.input`${styles}`

const BtnWrapper = s.a`${styles}`

export const ActionBtn = ({ handleClick, children, ...other }) => (
  <BtnWrapper onClick={handleClick} {...other}>
    {children}
  </BtnWrapper>
)

ActionBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export const Btn = ({
  href,
  children,
  fullWidth,
  disabled,
  ...other
}) => (
  <Link href={disabled ? '#' : href}>
    <BtnWrapper fullWidth={fullWidth} disabled={disabled} {...other}>
      {children}
    </BtnWrapper>
  </Link>
)

Btn.defaultProps = {
  fullWidth: false,
  disabled: false,
}

Btn.propTypes = {
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
