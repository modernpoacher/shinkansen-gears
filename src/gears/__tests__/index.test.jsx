/**
 *  @typedef {{
 *    go: jest.Mock
 *    to: jest.Mock
 *    pattern: jest.Mock
 *  }} MockRails
 */

import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import equal from 'fast-deep-equal'

import {
  Rails
} from 'shinkansen-rails'

import Gears from '#gears/gears'

jest.mock('fast-deep-equal', () => jest.fn())

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
 *  @param {{ to: string | { pathname: string }, children: React.ReactNode | React.ReactNode[] }} param0
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

describe('#gears/gears', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Gears />
      )

      Rails.go.mockReturnValue(true)
      Rails.to.mockReturnValue('MOCK TO')

      return expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })

  describe('`Gears.getDerivedStateFromProps`', () => {
    it('is defined', () => {
      return expect(Gears.getDerivedStateFromProps)
        .toBeDefined()
    })
  })

  describe('`Gears.getDerivedStateFromProps()`', () => {
    const mockReverse = {}
    const mockForward = {}
    const mockReverseChanged = {
      alpha: 'alpha',
      omega: 'omega'
    }
    const mockForwardChanged = {
      alpha: 'alpha',
      omega: 'omega'
    }

    describe('`props` has changed', () => {
      it('returns the `state`', () => {
        equal.mockReturnValue(false)

        const props = { reverse: mockReverseChanged, forward: mockForwardChanged }
        const state = { reverse: mockReverse, forward: mockForward }
        const returnValue = Gears.getDerivedStateFromProps(props, state)

        return expect(returnValue)
          .toEqual({
            reverse: mockReverseChanged,
            forward: mockForwardChanged
          })
      })
    })

    describe('`props` has not changed', () => {
      it('returns the `state`', () => {
        equal.mockReturnValue(true)

        const props = { reverse: mockReverse, forward: mockForward }
        const state = { reverse: mockReverse, forward: mockForward }
        const returnValue = Gears.getDerivedStateFromProps(props, state)

        return expect(returnValue)
          .toEqual({
            reverse: mockReverse,
            forward: mockForward
          })
      })
    })
  })

  describe('`shouldComponentUpdate()`', () => {
    const mockReverse = {}
    const mockForward = {}
    const mockState = {
      forward: mockForward,
      reverse: mockReverse
    }

    /**
     *  @type {void | null | renderer.ReactTestInstance}
     */
    let instance

    const component = (
      <Gears
        reverse={mockReverse}
        forward={mockForward}
        pattern='MOCK PATTERN'
      />
    )

    beforeEach(() => {
      instance = (
        renderer.create(component)
          .getInstance()
      )
    })

    describe('`props` has changed', () => {
      describe('`pattern` has changed', () => {
        it('returns true', () => {
          equal.mockReturnValue(true)

          return expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN CHANGED' }, mockState))
            .toBe(true)
        })
      })
    })

    describe('`props` has not changed', () => {
      beforeEach(() => {
        equal.mockReturnValue(true)
      })

      describe('`state` has changed', () => {
        describe('`reverse` has changed', () => {
          it('returns true', () => {
            return expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN' }, { ...mockState, reverse: {} }))
              .toBe(true)
          })
        })

        describe('`forward` has changed', () => {
          it('returns true', () => {
            return expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN' }, { ...mockState, forward: {} }))
              .toBe(true)
          })
        })
      })

      describe('`state` has not changed', () => {
        describe('`reverse` has not changed', () => {
          it('returns false', () => {
            return expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN' }, mockState))
              .toBe(false)
          })
        })

        describe('`forward` has not changed', () => {
          it('returns false', () => {
            return expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN' }, mockState))
              .toBe(false)
          })
        })
      })
    })
  })
})
