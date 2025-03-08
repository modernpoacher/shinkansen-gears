/**
 *  @typedef {{
 *    go: jest.Mock
 *    to: jest.Mock
 *    pattern: jest.Mock
 *  }} MockRails
 */

import {
  Rails
} from 'shinkansen-rails'

import renderForward from '#gears/render/forward'

jest.mock('#gears/gears/forward', () => jest.fn())

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

describe('#gears/render/forward', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('`renderForward`', () => {
    it('is defined', () => {
      return expect(renderForward)
        .toBeDefined()
    })
  })

  describe('`renderForward()`', () => {
    beforeEach(() => {
      Rails.to.mockReturnValue('MOCK TO')
    })

    describe('`Rails.go()` returns true', () => {
      it('invokes `Rails.to()`', () => {
        Rails.go.mockReturnValue(true)

        renderForward('MOCK REVERSE', 'MOCK PATTERN')

        return expect(Rails.to)
          .toBeCalledWith('MOCK REVERSE', 'MOCK PATTERN')
      })
    })

    describe('`Rails.go()` returns false', () => {
      it('does not invoke `Rails.to()`', () => {
        Rails.go.mockReturnValue(false)

        renderForward('MOCK REVERSE', 'MOCK PATTERN')

        return expect(Rails.to)
          .not.toBeCalled()
      })
    })
  })
})
