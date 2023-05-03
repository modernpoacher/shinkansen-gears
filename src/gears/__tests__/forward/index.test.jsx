import React from 'react'
import renderer from 'react-test-renderer'

import Forward from '#gears/forward'

jest.mock('react-router-dom')

describe('#gears/forward', () => {
  it('renders', () => {
    const component = (
      <Forward pathname='MOCK PATHNAME' />
    )

    return expect(renderer.create(component).toJSON())
      .toMatchSnapshot()
  })
})
