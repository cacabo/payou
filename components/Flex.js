import s from 'styled-components'

export const Flexbox = s.div`
  display: flex;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`

export const Flex = s.div`
  flex: 1;
  ${({ paddingTop }) => paddingTop && (`
    padding-top: ${paddingTop};
  `)}
`
