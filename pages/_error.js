import React from 'react'

import routes from '../constants/routes'
import Layout from '../fragments/Layout/index'
import {
  FormWrapper,
  Text,
  Title,
  Btn,
} from '../components'

export default () => (
  <Layout>
    <FormWrapper>
      <Title>404: Page not found</Title>
      <Text>
        {'We searched far and wide, but couldn\'t find the page you\'re looking for.'}
      </Text>
      <Btn fullWidth href={routes.HOME_ROUTE}>
        Back to home
      </Btn>
    </FormWrapper>
  </Layout>
)
