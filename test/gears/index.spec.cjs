const {
  expect // @ts-ignore
} = require('chai')

const Gears = require('#gears/gears')

describe('#gears/gears', () => {
  describe('`Gears`', () => {
    it('is a function', () => {
      expect(Gears)
        .to.be.a('function')
    })
  })
})
