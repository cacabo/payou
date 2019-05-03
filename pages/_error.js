import React from 'react'
import PropTypes from 'prop-types'

import routes from '../constants/routes'
import Layout from '../fragments/Layout/index'
import {
  FormWrapper,
  Text,
  Title,
  Btn,
} from '../components'

const ErrorPage = ({ status = 404 }) => (
  <Layout>
    <FormWrapper>
      <Title>
        {`${status}: Page not found`}
      </Title>
      <Text>
        {'We searched far and wide, but couldn\'t find the page you\'re looking for.'}
      </Text>
      <Btn fullWidth href={routes.HOME_ROUTE}>
        Back to home
      </Btn>
    </FormWrapper>
  </Layout>
)

ErrorPage.defaultProps = {
  status: 404,
}

ErrorPage.propTypes = {
  status: PropTypes.number,
}

export default ErrorPage
