import React from 'react'
import renderer from 'react-test-renderer'

import Reverse from 'shinkansen-gears/gears/reverse'

jest.mock('react-router-dom')

describe('shinkansen-gears/gears/reverse', () => {
  it('renders', () => {
    const component = (
      <Reverse pathname='MOCK PATHNAME' />
    )

    expect(renderer.create(component).toJSON())
      .toMatchSnapshot()
  })
})
