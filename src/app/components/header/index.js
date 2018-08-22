import React from 'react'
import style from './style.scss'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <header className={style.header}>
    <a href="/#" className={style.logo}>
      <img src={logo} alt="enjoei" height="30" width="30" />
    </a>
  </header>
)

export default Header
