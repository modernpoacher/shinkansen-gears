import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Forward from 'shinkansen-gears/gears/forward'

Enzyme.configure({ adapter: new Adapter() })

describe('shinkansen-gears/gears/forward', () => {
  it('renders', () => {
    expect(shallow(<Forward pathname={'MOCK PATHNAME'} />))
      .toMatchSnapshot()
  })
})
