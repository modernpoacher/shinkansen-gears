import {
  expect
} from 'chai'

import {
  renderReverse,
  renderForward
} from '#gears/render'

describe('#gears/render', () => {
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
