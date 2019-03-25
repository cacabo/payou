import React from 'react'
import Link from 'next/link'
import s from 'styled-components'

import { Container, Section } from '../components'
import {
  SNOW,
  DARK_GRAY,
  SLATE,
  DARK_SLATE,
} from '../constants/colors'
import {
  HOME_ROUTE,
  EMPLOYERS_ROUTE,
  ABOUT_ROUTE,
  PRIVACY_ROUTE,
} from '../constants/routes'

const FooterWrapper = s.div`
  width: 100%;
  padding: 1rem 0;
  background: ${SNOW};

  p {
    margin-bottom: 0;
  }
`

const Logo = s.img`
  height: 26px;
`

const Legal = s.p`
  padding-top: 1rem;
  font-size: 80%;
  color: ${DARK_GRAY};
`

const Links = s.div`
  margin-bottom: 1rem;

  div {
    margin-bottom: 0.5rem;

    a {
      color: ${SLATE} !important;
      text-decoration: none !important;

      &:hover {
        color: ${DARK_SLATE} !important;
      }
    }
  }
`

const links = [
  {
    route: HOME_ROUTE,
    text: 'For employees',
  },
  {
    route: EMPLOYERS_ROUTE,
    text: 'For employers',
  },
  {
    route: ABOUT_ROUTE,
    text: 'About us',
  },
  {
    route: PRIVACY_ROUTE,
    text: 'Privacy',
  },
]

export default () => (
  <FooterWrapper>
    <Section>
      <Container>
        <Logo src="/static/img/logo.svg" alt="Payou logo" />
        <Links>
          {links.map(({ route, text }) => (
            <div key={`${route}-${text}`}>
              <Link href={route}>
                <a>
                  {text}
                </a>
              </Link>
            </div>
          ))}
        </Links>
        <Legal>
          Payou &copy; 2019, all rights reserved.
        </Legal>
      </Container>
    </Section>
  </FooterWrapper>
)
