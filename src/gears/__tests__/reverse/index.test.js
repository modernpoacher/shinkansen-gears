import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Reverse from 'shinkansen-gears/gears/reverse'

Enzyme.configure({ adapter: new Adapter() })

describe('shinkansen-gears/gears/reverse', () => {
  it('renders', () => {
    expect(shallow(<Reverse pathname={'MOCK PATHNAME'} />))
      .toMatchSnapshot()
  })
})
