import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router'

export class Forward extends React.Component {
  render () {
    const {
      pathname
    } = this.props

    const key = `${pathname}-forward`
    const to = {
      pathname
    }

    return (
      <li key={key} className='shinkansen-piston-forward'>
        <Link to={to}>
          Forward
        </Link>
      </li>
    )
  }
}

Forward.propTypes = {
  pathname: PropTypes.string.isRequired
}
