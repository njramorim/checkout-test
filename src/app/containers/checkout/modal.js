import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../../components/modal'
import Alert from '../../components/alert'
import Loader from '../../components/loader'
import iconCar from '../../assets/images/icon-car.svg'

const CheckoutModal = ({ isLoading, hasAlert }) => (
  <Modal visible={isLoading} dark={Boolean(hasAlert)}>
    {hasAlert &&
      (hasAlert === 'success' ? (
        <Alert
          status="success"
          title="compra confirmada"
          image={iconCar}
          description="enviaremos atualizações sobre o pedido para o seu email"
        />
      ) : (
        <Alert
          status="warning"
          title="compra cancelada"
          image={iconCar}
          description="o pedido não foi enviado e você não sera cobrado"
        />
      ))}
    {isLoading && <Loader />}
  </Modal>
)

CheckoutModal.propTypes = {
  hasAlert: PropTypes.any,
  isLoading: PropTypes.bool
}

export default CheckoutModal
