import React from 'react'
import s, { css } from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { NAVY, WHITE, MIDNIGHT } from '../constants/colors'

const styles = css`
  background: ${NAVY};
  padding: 16px 24px;
  border-radius: 4px;
  color: ${WHITE};
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  text-align: center;

  ${({ fullWidth }) => fullWidth && ('width: 100%;')}

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
}) => (
  <Link href={href}>
    <BtnWrapper fullWidth={fullWidth}>
      {children}
    </BtnWrapper>
  </Link>
)

Btn.defaultProps = {
  fullWidth: false,
}

Btn.propTypes = {
  fullWidth: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
