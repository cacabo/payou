import React from 'react'
import PropTypes from 'prop-types'

import { Title, Modal, ModalContainer } from '../../components'
import Form from './EmployerLeadForm'

const EmployerLeadModal = ({ show, toggle }) => (
  <Modal show={show} toggle={toggle}>
    <ModalContainer paddingTop="0.5rem">
      <Title>Contact us</Title>

      <p>{'Want to extend the Payou benefit to your employees? Fill this out and we\'ll see how we can meet your needs.'}</p>

      <Form />
    </ModalContainer>
  </Modal>
)

EmployerLeadModal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default EmployerLeadModal
