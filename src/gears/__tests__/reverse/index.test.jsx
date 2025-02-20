import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import Reverse from '#gears/gears/reverse'

/**
 * @param {{ to: string | { pathname: string }, children: React.ReactNode | React.ReactNode[] }} param0
 * @returns {React.JSX.Element}
 */
function MockLink ({ to, children }) {
  if (typeof to === 'string') {
    return (
      <a href={to} className='mock-link'>
        {children}
      </a>
    )
  }

  const {
    pathname
  } = to

  return (
    <a href={pathname} className='mock-link'>
      {children}
    </a>
  )
}

MockLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({})
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

jest.mock('react-router', () => {
  return {
    __esModule: true,
    Link: MockLink
  }
})

describe('#gears/gears/reverse', () => {
  it('renders', () => {
    const component = (
      <Reverse
        pathname='MOCK PATHNAME'
      />
    )

    return expect(renderer.create(component).toJSON())
      .toMatchSnapshot()
  })
})
