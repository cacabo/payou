import styled from 'styled-components'

import {
  SM,
  MD,
  LG,
  minWidth,
  maxWidth,
} from '../constants/widths'

export const Container = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 0 1rem;

  ${minWidth(SM)} {
    padding: 0 1rem;
  }

  ${minWidth(MD)} {
    padding: 0 6%;
  }

  ${minWidth(LG)} {
    padding: 0 8%;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${maxWidth(SM)} {
    display: block;
  }
`

export const Col = styled.div`
  flex: ${({ width }) => (width ? 'none' : '1')};
  width: ${({ width }) => width || 'auto'};
`

export const ColSpace = styled(Col)`
  flex: none;
  width: ${({ width }) => width || '1rem'};

  ${maxWidth(SM)} {
    display: none;
  }
`
