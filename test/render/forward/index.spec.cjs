const {
  expect // @ts-ignore
} = require('chai')

const renderForward = require('#gears/render/forward')

describe('#gears/render/forward', () => {
  describe('`renderForward`', () => {
    it('is a function', () => {
      expect(renderForward)
        .to.be.a('function')
    })
  })
})
