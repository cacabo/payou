import React from 'react'
import s from 'styled-components'
import Link from 'next/link'
import { Container } from '../components'

import {
  WHITE,
  BORDER,
  GRAY,
  GREEN,
  BLACK,
} from '../constants/colors'
import { HOME_ROUTE, EMPLOYERS_ROUTE, ABOUT_ROUTE } from '../constants/routes'

const NavWrapper = s.nav`
  width: 100%;
  background: ${WHITE};
  border-bottom: 1px solid ${BORDER};
  padding: 1rem 0;
  position: fixed;
  z-index: 1300;
`

const NavSpace = s.div`
  display: block;
  width: 100%;
  height: 56px;
`

const Logo = s.a`
  color: ${BLACK} !important;
  font-weight: bold;
  text-decoration: none !important;
  display: inline-block;
  margin-bottom: 0;
  cursor: pointer;
`

const Links = s.div`
  display: inline-block;
  float: right;

  a {
    color: ${GRAY};
    cursor: pointer;
    display: inline-block;
    width: auto;
    margin: 0;
    margin-left: 1.5rem;
    font-size: 80%;
    font-weight: bold;
    text-decoration: none !important;

    &:hover {
      color: ${GREEN};
    }
  }
`

export default () => (
  <>
    <NavWrapper>
      <Container>
        <Link href={HOME_ROUTE}>
          <Logo>SalaryMatch</Logo>
        </Link>
        <Links>
          <Link href={HOME_ROUTE}>
            <a>For employees</a>
          </Link>
          <Link href={EMPLOYERS_ROUTE}>
            <a>For employers</a>
          </Link>
          <Link href={ABOUT_ROUTE}>
            <a>About</a>
          </Link>
        </Links>
      </Container>
    </NavWrapper>

    <NavSpace />
  </>
)
