import React from 'react'
import PropTypes from 'prop-types'

import Form from '../../components/form'
import Fieldset from '../../components/fieldset'
import Button from '../../components/button'
import ButtonGroup from '../../components/button/button-group'

const CheckoutForm = ({ coupons, summary, handleCancel, handleSubmit }) => (
  <Form>
    <Fieldset title="cupons">
      <ol>{coupons}</ol>
    </Fieldset>

    <Fieldset title="resumo">
      <ol>{summary}</ol>
    </Fieldset>

    <ButtonGroup>
      <Button status="cancel" text="cancelar" action={handleCancel} />
      <Button text="confirmar" action={handleSubmit} />
    </ButtonGroup>
  </Form>
)

CheckoutForm.propTypes = {
  coupons: PropTypes.any,
  summary: PropTypes.any,
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default CheckoutForm
