import React from 'react'
import s from 'styled-components'


import { WHITE } from '../../constants/colors'


const Circle = s.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${WHITE};
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  padding: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.8);

  img {
    opacity: 0.5;
    padding-top: 5%;
  }
`


export default () => (
  <Circle>
    <img src="/static/img/icons/chevdown.svg" alt="Read more below" />
  </Circle>
)
