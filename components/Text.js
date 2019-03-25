import s from 'styled-components'

import {
  DARK_GRAY,
  BLACK,
  SLATE,
  WHITE,
  WHITE_ALPHA,
} from '../constants/colors'

export const Title = s.h2`
  color: ${({ white }) => (white ? WHITE : BLACK)};
  ${({ big }) => big && 'font-size: 200%;'}
  margin-bottom: 1.5rem;
`

export const Text = s.p`
  color: ${({ white }) => (white ? WHITE : DARK_GRAY)};
  ${({ big }) => big && 'font-size: 125%;'}
  ${({ marginBottom }) => marginBottom && (`margin-bottom: ${marginBottom};`)}
`

export const MediumText = s(Text)`
  color: ${BLACK};
  font-weight: 500;
`

export const StrongText = s(Text)`
  color: ${({ white }) => (white ? WHITE : BLACK)};
  font-weight: 700;
`

export const Preheading = s.h4`
  margin-bottom: 2.675rem;
  font-weight: 500;
  color: ${({ white }) => (white ? WHITE_ALPHA(0.8) : SLATE)};
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
