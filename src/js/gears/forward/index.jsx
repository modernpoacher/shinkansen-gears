/**
 *  @typedef {GearsTypes.Forward.ForwardProps} ForwardProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router'

/**
 *  @param {ForwardProps} props
 *  @returns {React.JSX.Element}
 */
function Forward ({ pathname }) {
  const key = pathname.concat('-forward')
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
