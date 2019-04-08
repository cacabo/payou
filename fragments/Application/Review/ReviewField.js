import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import { Text } from '../../../components'

const Right = s.span`
  float: right;
`

const ReviewField = ({ title, value }) => (
  <Text>
    <strong>
      {title}
      {': '}
    </strong>
    <Right>{value}</Right>
  </Text>
)

ReviewField.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default ReviewField
