import {
  expect
} from 'chai'

import renderReverse from '#gears/render/reverse'

describe('#gears/render/reverse', () => {
  describe('`renderReverse`', () => {
    it('is a function', () => {
      expect(renderReverse)
        .to.be.a('function')
    })
  })
})
