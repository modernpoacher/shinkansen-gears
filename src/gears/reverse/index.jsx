/**
 * @typedef {import('shinkansen-gears/gears/reverse').ReverseProps} ReverseProps
 */

import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

/**
 * @param {ReverseProps}
 * @returns {React.JSX.Element}
 */
function Reverse ({ pathname }) {
  const key = pathname.concat('-reverse')
  const to = {
    pathname
  }

  return (
    <li key={key} className='shinkansen-gears-reverse'>
      <Link to={to}>
        Reverse
      </Link>
    </li>
  )
}

Reverse.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default Reverse
