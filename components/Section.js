import s from 'styled-components'

export const Section = s.section`
  padding: ${({ hero }) => (
    hero ? (`
      calc(6rem + 2.5%) 0 calc(2rem + 2.5%) 0;
    `) : (`
      calc(2rem + 2.5%) 0 calc(1rem + 2.5%) 0;
    `)
  )}

  background: ${({ background }) => background || 'transparent'};
`

export const BackgroundSection = s(Section)`
  ${({ backgroundImage }) => (`
    background-image: url(${backgroundImage || ''});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `)}
`
