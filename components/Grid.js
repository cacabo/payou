import styled from 'styled-components'

import {
  SM,
  MD,
  LG,
  minWidth,
  maxWidth,
} from '../constants/widths'

const percent = numCols => `${(numCols / 12 * 100)}%`

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
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;

  ${({ marginBottom }) => marginBottom && `
    margin-bottom: ${marginBottom};
  `}

  ${maxWidth(SM)} {
    display: block;
  }
`

export const Col = styled.div`
  flex: ${({ width }) => (width ? 'none' : 1)};
  width: ${({ width }) => width || 'auto'};

  ${maxWidth(SM)} {
    ${({ sm }) => sm && `
      width: ${percent(sm)};
      flex: none;
    `}

    ${({ offsetSm }) => offsetSm && `
      margin-left: ${percent(offsetSm)};
    `}
  }

  ${minWidth(MD)} {
    ${({ md }) => md && `
      width: ${percent(md)}
      flex: none;
    `}

    ${({ offsetMd }) => offsetMd && `
      margin-left: ${percent(offsetMd)};
    `}
  }

  ${minWidth(LG)} {
    ${({ lg }) => lg && `
      width: ${percent(lg)}
      flex: none;
    `}

    ${({ offsetLg }) => offsetLg && `
      margin-left: ${percent(offsetLg)};
    `}
  }

  ${({ flex }) => flex && (`
    display: flex;
  `)}
`

export const ColSpace = styled(Col)`
  flex: none;
  width: ${({ width }) => width || '1rem'};

  ${maxWidth(SM)} {
    display: none;
  }
`
