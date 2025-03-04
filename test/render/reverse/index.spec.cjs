const {
  expect // @ts-ignore
} = require('chai')

const renderReverse = require('#gears/render/reverse')

describe('#gears/render/reverse', () => {
  describe('`renderReverse`', () => {
    it('is a function', () => {
      expect(renderReverse)
        .to.be.a('function')
    })
  })
})
