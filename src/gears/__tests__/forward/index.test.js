import React from 'react'
import renderer from 'react-test-renderer'

import Forward from 'shinkansen-gears/gears/forward'

jest.mock('react-router-dom')

describe('shinkansen-gears/gears/forward', () => {
  it('renders', () => {
    const component = (
      <Forward pathname='MOCK PATHNAME' />
    )

    expect(renderer.create(component).toJSON())
      .toMatchSnapshot()
  })
})
