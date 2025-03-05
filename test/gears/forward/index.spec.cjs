const {
  expect // @ts-ignore
} = require('chai')

const Forward = require('#gears/gears/forward')

describe('#gears/gears/forward', () => {
  describe('`Forward`', () => {
    it('is a function', () => {
      expect(Forward)
        .to.be.a('function')
    })
  })
})
