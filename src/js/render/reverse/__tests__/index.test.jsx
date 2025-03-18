/**
 *  @typedef {{
 *    go: jest.Mock
 *    to: jest.Mock
 *    pattern: jest.Mock
 *  }} MockRails
 */

import React from 'react'
import PropTypes from 'prop-types'

import {
  Rails
} from 'shinkansen-rails'

import renderReverse from '#gears/render/reverse'

jest.mock('shinkansen-rails', () => {
  return {
    /**
     *  @type {MockRails}
     */
    Rails: {
      go: jest.fn(),
      to: jest.fn(),
      pattern: jest.fn()
    }
  }
})

/**
 *  @param {{ to: string | { pathname: string }, children: React.ReactNode | React.ReactNode[] }} props
 *  @returns {React.JSX.Element}
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

describe('#gears/render/reverse', () => {
  describe('`renderReverse`', () => {
    it('is defined', () => {
      expect(renderReverse)
        .toBeDefined()
    })
  })

  describe('`renderReverse()`', () => {
    beforeEach(() => {
      Rails.to.mockReturnValue('MOCK TO')
    })

    describe('`Rails.go()` returns true', () => {
      it('invokes `Rails.to()`', () => {
        Rails.go.mockReturnValue(true)

        renderReverse('MOCK REVERSE', 'MOCK PATTERN')

        expect(Rails.to)
          .toHaveBeenCalledWith('MOCK REVERSE', 'MOCK PATTERN')
      })
    })

    describe('`Rails.go()` returns false', () => {
      it('does not invoke `Rails.to()`', () => {
        Rails.go.mockReturnValue(false)

        renderReverse('MOCK REVERSE', 'MOCK PATTERN')

        expect(Rails.to)
          .not.toHaveBeenCalled()
      })
    })
  })
})
