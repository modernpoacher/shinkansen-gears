import {
  expect
} from 'chai'

import {
  Gears,
  Reverse,
  Forward,
  renderReverse,
  renderForward
} from '#gears'

describe('#gears', () => {
  describe('`Gears`', () => {
    it('is a function', () => {
      expect(Gears)
        .to.be.a('function')
    })
  })

  describe('`Reverse`', () => {
    it('is a function', () => {
      expect(Reverse)
        .to.be.a('function')
    })
  })

  describe('`Forward`', () => {
    it('is a function', () => {
      expect(Forward)
        .to.be.a('function')
    })
  })

  describe('`renderReverse`', () => {
    it('is a function', () => {
      expect(renderReverse)
        .to.be.a('function')
    })
  })

  describe('`renderForward`', () => {
    it('is a function', () => {
      expect(renderForward)
        .to.be.a('function')
    })
  })
})
