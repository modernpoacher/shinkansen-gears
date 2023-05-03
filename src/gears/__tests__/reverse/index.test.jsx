import React from 'react'
import renderer from 'react-test-renderer'

import Reverse from '#gears/reverse'

jest.mock('react-router-dom')

describe('#gears/reverse', () => {
  it('renders', () => {
    const component = (
      <Reverse pathname='MOCK PATHNAME' />
    )

    return expect(renderer.create(component).toJSON())
      .toMatchSnapshot()
  })
})
