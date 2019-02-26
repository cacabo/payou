import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import { minWidth, MD } from '../../constants/widths'
import { BLACK } from '../../constants/colors'

const Wrapper = s.div`
  padding: 10px 1rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0.75rem;

  &:hover {
    opacity: 0.5;
  }

  ${minWidth(MD)} {
    display: none;
  }
`

const Bar = s.span`
  width: 16px;
  height: 2px;
  margin-bottom: 3px;
  display: block;
  background: ${BLACK};
`

const Bars = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <Bar />
    <Bar />
    <Bar />
  </Wrapper>
)

Bars.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Bars
