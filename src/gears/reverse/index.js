import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router'

const Reverse = ({ pathname }) => {
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
