import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Immutable from 'immutable'

import {
  Rails
} from 'shinkansen-rails'

import Gears, { renderReverse, renderForward } from 'shinkansen-gears/gears'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('immutable', () => ({ is: jest.fn(), Map: jest.fn() }))

jest.mock('shinkansen-rails', () => ({
  Rails: {
    go: jest.fn(),
    to: jest.fn(),
    pattern: jest.fn()
  }
}))

describe('shinkansen-gears/gears', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('Always', () => {
    it('renders', () => {
      Rails.go.mockReturnValue(true)
      Rails.to.mockReturnValue('MOCK TO')

      expect(shallow(<Gears />))
        .toMatchSnapshot()
    })
  })

  describe('`renderReverse`', () => {
    it('is defined', () => {
      expect(renderReverse)
        .toBeDefined()
    })
  })

  describe('`renderForward`', () => {
    it('is defined', () => {
      expect(renderForward)
        .toBeDefined()
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
    const mockReverseChanged = {}
    const mockForwardChanged = {}

    beforeEach(() => {
      Immutable.Map.mockImplementation((v) => v)

      const component = (
        <Gears
          reverse={mockReverse}
          forward={mockForward}
          pattern={'MOCK PATTERN'}
        />
      )

      shallow(component)
    })

    describe('`props` have changed', () => {
      let returnValue

      beforeEach(() => {
        Immutable.is.mockReturnValue(false)

        returnValue = Gears.getDerivedStateFromProps({ reverse: mockReverseChanged, forward: mockForwardChanged }, { reverse: mockReverse, forward: mockForward })
      })

      it('invokes `Immutable.Map` with `reverse`', () => {
        expect(Immutable.Map)
          .toBeCalledWith(mockReverseChanged)
      })

      it('invokes `Immutable.Map` with `forward`', () => {
        expect(Immutable.Map)
          .toBeCalledWith(mockForwardChanged)
      })

      it('returns the `state`', () => {
        expect(returnValue)
          .toEqual({
            reverse: mockReverseChanged,
            forward: mockForwardChanged
          })
      })
    })

    describe('`props` have not changed', () => {
      let returnValue

      beforeEach(() => {
        Immutable.is.mockReturnValue(true)

        returnValue = Gears.getDerivedStateFromProps({ reverse: mockReverse, forward: mockForward }, { reverse: mockReverse, forward: mockForward })
      })

      it('invokes `Immutable.Map` with `reverse`', () => {
        expect(Immutable.Map)
          .toBeCalledWith(mockReverse)
      })

      it('invokes `Immutable.Map` with `forward`', () => {
        expect(Immutable.Map)
          .toBeCalledWith(mockForward)
      })

      it('returns the `state`', () => {
        expect(returnValue)
          .toEqual({
            reverse: mockReverse,
            forward: mockForward
          })
      })
    })
  })

  describe('`shouldComponentUpdate()`', () => {
    let wrapper
    let instance

    beforeEach(() => {
      wrapper = shallow(<Gears pattern={'MOCK PATTERN'} />)

      instance = wrapper.instance()
    })

    describe('`props` have changed', () => {
      beforeEach(() => {
        Immutable.is.mockReturnValue(true)
      })

      describe('`pattern` has changed', () => {
        it('returns true', () => {
          expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN CHANGED' }))
            .toBe(true)
        })
      })

      describe('`pattern` has not changed', () => {
        const mockState = {
          reverse: 'MOCK REVERSE',
          forward: 'MOCK FORWARD'
        }

        describe('`state` has `reverse`', () => {
          describe('`reverse` has changed', () => {
            it('returns true', () => {
              wrapper.setState(mockState)

              expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN' }, { ...mockState, reverse: 'MOCK REVERSE CHANGED' }))
                .toBe(true)
            })
          })

          describe('`reverse` has not changed', () => {
            it('returns false', () => {
              wrapper.setState(mockState)

              expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN' }, mockState))
                .toBe(false)
            })
          })
        })

        describe('`state` has `forward`', () => {
          describe('`forward` has changed', () => {
            it('returns true', () => {
              wrapper.setState(mockState)

              expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN' }, { ...mockState, forward: 'MOCK FORWARD CHANGED' }))
                .toBe(true)
            })
          })

          describe('`forward` has not changed', () => {
            it('returns false', () => {
              wrapper.setState(mockState)

              expect(instance.shouldComponentUpdate({ pattern: 'MOCK PATTERN' }, mockState))
                .toBe(false)
            })
          })
        })
      })
    })
  })

  describe('`renderReverse()`', () => {
    beforeEach(() => {
      Rails.to.mockReturnValue('MOCK TO')
    })

    describe('`Rails.go` returns true', () => {
      it('invokes `Rails.to`', () => {
        Rails.go.mockReturnValue(true)

        renderReverse('MOCK REVERSE', 'MOCK PATTERN')

        expect(Rails.to)
          .toBeCalledWith('MOCK REVERSE', 'MOCK PATTERN')
      })
    })

    describe('`Rails.go` returns false', () => {
      it('invokes `Rails.to`', () => {
        Rails.go.mockReturnValue(false)

        renderReverse('MOCK REVERSE', 'MOCK PATTERN')

        expect(Rails.to)
          .not.toBeCalled()
      })
    })
  })

  describe('`renderForward()`', () => {
    beforeEach(() => {
      Rails.to.mockReturnValue('MOCK TO')
    })

    describe('`Rails.go` returns true', () => {
      it('invokes `Rails.to`', () => {
        Rails.go.mockReturnValue(true)

        renderForward('MOCK FORWARD', 'MOCK PATTERN')

        expect(Rails.to)
          .toBeCalledWith('MOCK FORWARD', 'MOCK PATTERN')
      })
    })

    describe('`Rails.go` returns false', () => {
      it('invokes `Rails.to`', () => {
        Rails.go.mockReturnValue(false)

        renderForward('MOCK FORWARD', 'MOCK PATTERN')

        expect(Rails.to)
          .not.toBeCalled()
      })
    })
  })
})
