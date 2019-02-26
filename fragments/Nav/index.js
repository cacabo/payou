import React, { Component } from 'react'
import s from 'styled-components'
import Link from 'next/link'

import Links from './Links'
import Bars from './Bars'
import { Container } from '../../components'
import {
  WHITE,
  BORDER,
  GREEN,
} from '../../constants/colors'
import { MD, maxWidth } from '../../constants/widths'
import { HOME_ROUTE } from '../../constants/routes'

const Z_INDEX = 1300

const NavWrapper = s.nav`
  width: 100%;
  background: ${WHITE};
  border-bottom: 1px solid ${BORDER};
  padding: 1rem 0;
  position: fixed;
  z-index: 1300;
`

const Shade = s.div`
  display: none;

  ${maxWidth(MD)} {
    display: ${({ active }) => (active ? 'block' : 'none')};
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    left: 0;
    top: 0;
    z-index: ${Z_INDEX - 1};
  }
`

const NavSpace = s.div`
  display: block;
  width: 100%;
  height: 56px;
`

const Logo = s.a`
  color: ${GREEN} !important;
  font-weight: bold;
  text-decoration: none !important;
  display: inline-block;
  margin-bottom: 0;
  cursor: pointer;
`

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    const { active } = this.state

    return (
      <>
        <NavWrapper>
          <Container>
            <Link href={HOME_ROUTE}>
              <Logo>SalaryMatch</Logo>
            </Link>
            <Bars active={active} onClick={this.toggle} />
            <Links active={active} />
          </Container>
        </NavWrapper>

        <Shade active={active} onClick={this.toggle} />

        <NavSpace />
      </>
    )
  }
}

export default Nav
