import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import equal from 'fast-deep-equal'

import {
  Rails
} from 'shinkansen-rails'

import Gears, { renderReverse, renderForward } from '#gears/gears'

jest.mock('fast-deep-equal', () => jest.fn())

jest.mock('shinkansen-rails', () => ({
  Rails: {
    go: jest.fn(),
    to: jest.fn(),
    pattern: jest.fn()
  }
}))

function MockLink ({ to, children }) {
  return (
    <a href={to} className='mock-link'>
      {children}
    </a>
  )
}

MockLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape()
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

  describe('`renderReverse`', () => {
    it('is defined', () => {
      return expect(renderReverse)
        .toBeDefined()
    })
  })

  describe('`renderForward`', () => {
    it('is defined', () => {
      return expect(renderForward)
        .toBeDefined()
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

        const returnValue = Gears.getDerivedStateFromProps({ reverse: mockReverseChanged, forward: mockForwardChanged }, { reverse: mockReverse, forward: mockForward })

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

        const returnValue = Gears.getDerivedStateFromProps({ reverse: mockReverse, forward: mockForward }, { reverse: mockReverse, forward: mockForward })

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

  describe('`renderReverse()`', () => {
    beforeEach(() => {
      Rails.to.mockReturnValue('MOCK TO')
    })

    describe('`Rails.go()` returns true', () => {
      it('invokes `Rails.to()`', () => {
        Rails.go.mockReturnValue(true)

        renderReverse('MOCK REVERSE', 'MOCK PATTERN')

        return expect(Rails.to)
          .toBeCalledWith('MOCK REVERSE', 'MOCK PATTERN')
      })
    })

    describe('`Rails.go()` returns false', () => {
      it('does not invoke `Rails.to()`', () => {
        Rails.go.mockReturnValue(false)

        renderReverse('MOCK REVERSE', 'MOCK PATTERN')

        return expect(Rails.to)
          .not.toBeCalled()
      })
    })
  })

  describe('`renderForward()`', () => {
    beforeEach(() => {
      Rails.to.mockReturnValue('MOCK TO')
    })

    describe('`Rails.go()` returns true', () => {
      it('invokes `Rails.to()`', () => {
        Rails.go.mockReturnValue(true)

        renderForward('MOCK FORWARD', 'MOCK PATTERN')

        return expect(Rails.to)
          .toBeCalledWith('MOCK FORWARD', 'MOCK PATTERN')
      })
    })

    describe('`Rails.go()` returns false', () => {
      it('does not invoke `Rails.to()`', () => {
        Rails.go.mockReturnValue(false)

        renderForward('MOCK FORWARD', 'MOCK PATTERN')

        return expect(Rails.to)
          .not.toBeCalled()
      })
    })
  })
})
