/**
 *  @typedef {{
 *    go: jest.Mock
 *    to: jest.Mock
 *    pattern: jest.Mock
 *  }} MockRails
 */

import React from 'react'
import PropTypes from 'prop-types'
import getComponentInstanceFrom from 'react-component-instance'
import snapshotOf, {
  getComponentElement
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

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

describe('#gears/gears', () => {
  describe('Always', () => {
    it('renders', () => {
      Rails.go.mockReturnValue(true)
      Rails.to.mockReturnValue('MOCK TO')

      expect(snapshotOf(getComponentElement(render(
        <Gears />
      ))))
        .toMatchSnapshot()
    })
  })

  describe('`Gears.getDerivedStateFromProps`', () => {
    it('is defined', () => {
      expect(Gears.getDerivedStateFromProps)
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

        expect(returnValue)
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

        expect(returnValue)
          .toEqual({
            reverse: mockReverse,
            forward: mockForward
          })
      })
    })
  })

  describe('`shouldComponentUpdate()`', () => {
    /**
     *  @type {undefined | Gears}
     */
    let instance

    beforeEach(() => {
      Rails.go.mockReturnValue(true)
      Rails.to.mockReturnValue('MOCK TO')

      instance = getComponentInstanceFrom(getComponentElement(
        render(
          <Gears />
        )
      ))
    })

    describe('`props` has changed', () => {
      describe('`pattern` has changed', () => {
        it('returns true', () => {
          equal.mockReturnValue(true)

          const props = {
            ...instance.props,
            pattern: 'MOCK PATTERN CHANGED'
          }

          const state = {
            ...instance.state
          }

          expect(instance.shouldComponentUpdate(props, state))
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
            const props = {
              ...instance.props
            }

            const state = {
              ...instance.state,
              reverse: {
                alpha: 'MOCK CHANGED ALPHA',
                omega: 'MOCK CHANGED OMEGA'
              }
            }

            expect(instance.shouldComponentUpdate(props, state))
              .toBe(true)
          })
        })

        describe('`forward` has changed', () => {
          it('returns true', () => {
            const props = {
              ...instance.props
            }

            const state = {
              ...instance.state,
              forward: {
                alpha: 'MOCK CHANGED ALPHA',
                omega: 'MOCK CHANGED OMEGA'
              }
            }

            expect(instance.shouldComponentUpdate(props, state))
              .toBe(true)
          })
        })
      })

      describe('`state` has not changed', () => {
        describe('`reverse` has not changed', () => {
          it('returns false', () => {
            const props = {}

            const state = {
              ...instance.state,
              reverse: {
                alpha: 'MOCK ALPHA',
                omega: 'MOCK OMEGA'
              }
            }

            instance.props = props
            instance.state = state

            expect(instance.shouldComponentUpdate(props, state))
              .toBe(false)
          })
        })

        describe('`forward` has not changed', () => {
          it('returns false', () => {
            const props = {}

            const state = {
              ...instance.state,
              forward: {
                alpha: 'MOCK ALPHA',
                omega: 'MOCK OMEGA'
              }
            }

            instance.props = props
            instance.state = state

            expect(instance.shouldComponentUpdate(props, state))
              .toBe(false)
          })
        })
      })
    })
  })
})
