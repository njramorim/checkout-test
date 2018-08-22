import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Header from './components/header'
import Checkout from './containers/checkout'

import style from './main.scss'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isReady: false
    }
  }

  componentDidMount() {
    this.setState({
      isReady: true
    })
  }

  render() {
    const { match } = this.props
    const { isReady } = this.state

    const shouldShow = isReady ? style.appWrapperReady : ''
    return (
      <div className={classnames(style.appWrapper, shouldShow)}>
        <Header />
        <Checkout params={match.params} />
      </div>
    )
  }
}

App.propTypes = {
  match: PropTypes.object
}

export default App
