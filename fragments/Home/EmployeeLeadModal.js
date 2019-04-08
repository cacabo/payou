import React from 'react'
import PropTypes from 'prop-types'

import { Title, Modal, ModalContainer } from '../../components'
import Form from './EmployeeLeadForm'

const EmployerLeadModal = ({ show, toggle }) => (
  <Modal show={show} toggle={toggle}>
    <ModalContainer paddingTop="0.5rem">
      <Title>Contact us</Title>

      <p>{'Do you wish your employeer offered PAYOU? Fill this out and we\'ll see how we can meet your needs.'}</p>

      <Form />
    </ModalContainer>
  </Modal>
)

EmployerLeadModal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default EmployerLeadModal
