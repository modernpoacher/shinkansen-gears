const {
  expect // @ts-ignore
} = require('chai')

const {
  renderReverse,
  renderForward
} = require('#gears/render')

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
