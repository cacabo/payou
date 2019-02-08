import s from 'styled-components'

export const Title = s.h2``

export const Preheading = s.h6`
  margin-bottom: 2.175rem;
`

export const Blockquote = s.blockquote`
  opacity: 0.6;

  ::before {
    content: "“";
    position: absolute;
    transform: translateX(-100%);
    font-size: 125%;
  }

  ::after {
    content: "”";
    position: absolute;
    font-size: 125%;
  }
`
