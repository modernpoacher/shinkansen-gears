import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router'

export class Reverse extends React.Component {
  render () {
    const {
      pathname
    } = this.props

    const key = `${pathname}-reverse`
    const to = {
      pathname
    }

    return (
      <li key={key} className='locomotive-piston-reverse'>
        <Link to={to}>
          Reverse
        </Link>
      </li>
    )
  }
}

Reverse.propTypes = {
  pathname: PropTypes.string.isRequired
}
