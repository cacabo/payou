import s from 'styled-components'

export const Section = s.section`
  padding: calc(1rem + 2.5%) 0;

  background: ${({ background }) => background || 'transparent'};
`
