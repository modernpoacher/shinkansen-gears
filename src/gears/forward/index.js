import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router'

const Forward = ({ pathname }) => {
  const key = `${pathname}-forward`
  const to = {
    pathname
  }

  return (
    <li key={key} className='shinkansen-gears-forward'>
      <Link to={to}>
        Forward
      </Link>
    </li>
  )
}

Forward.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default Forward
