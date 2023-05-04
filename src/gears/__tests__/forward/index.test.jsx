import React from 'react'
import renderer from 'react-test-renderer'

import Forward from 'shinkansen-gears/forward'

jest.mock('react-router-dom')

describe('shinkansen-gears/forward', () => {
  it('renders', () => {
    const component = (
      <Forward pathname='MOCK PATHNAME' />
    )

    return expect(renderer.create(component).toJSON())
      .toMatchSnapshot()
  })
})
