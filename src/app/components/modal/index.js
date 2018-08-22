import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import style from './style.scss'

const Modal = ({ children, visible, dark }) => (
  <aside
    className={classnames(
      style.modal,
      visible && style.modalOn,
      dark ? style.modalDark : style.modalClean
    )}
  >
    <div className={style.modalContent}>{children}</div>
  </aside>
)

Modal.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  dark: PropTypes.bool
}

Modal.defaultProps = {
  visible: true,
  dark: false
}

export default Modal
