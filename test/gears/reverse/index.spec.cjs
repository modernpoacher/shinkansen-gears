const {
  expect // @ts-ignore
} = require('chai')

const Reverse = require('#gears/gears/reverse')

describe('#gears/gears/reverse', () => {
  describe('`Reverse`', () => {
    it('is a function', () => {
      expect(Reverse)
        .to.be.a('function')
    })
  })
})
