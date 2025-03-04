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

import renderReverse from '#gears/render/reverse'

jest.mock('#gears/gears/reverse', () => jest.fn())

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

describe('#gears/render/reverse', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('`renderReverse`', () => {
    it('is defined', () => {
      return expect(renderReverse)
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
})
