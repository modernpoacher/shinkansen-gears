import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import {
  Gears
} from 'shinkansen-gears'

import {
  Reverse
} from './reverse'

import {
  Forward
} from './forward'

export class Piston extends React.Component {
  state = {} // define state

  /**
   *  Convert latest 'props' to an Immutable.Map() and store in 'state'
   *
   *  @param {Object} props   Latest props
   */
  componentWillReceiveProps (props) { // // console.log('(Piston)componentWillReceiveProps()', props) // eslint-disable-line
    const {
      reverse,
      forward
    } = props

    this.setState({
      REVERSE: Immutable.Map(reverse),
      FORWARD: Immutable.Map(forward)
    })
  }

  /**
   *  Compare latest 'props' with previous 'state' for changes to 'reverse' or 'forward'
   *
   *  @param {Object} props   Latest props
   */
  shouldComponentUpdate (props) { // // console.log('(Piston)shouldComponentUpdate()', props)
    /**
     *  Compare new 'props' to old 'state'
     */
    const {
      reverse,
      forward
    } = props

    const {
      REVERSE,
      FORWARD
    } = this.state // state must be defined

    /**
     *  Compare object values
     */
    return (
      !(Immutable.is(Immutable.Map(reverse), REVERSE)) ||
      !(Immutable.is(Immutable.Map(forward), FORWARD))
    )
  }

  render () { // // console.log('(Piston)render()')

    const {
      reverse,
      forward,
      pattern
    } = this.props

    const r = Gears.engage(reverse, pattern)
    const f = Gears.engage(forward, pattern)

    if (r || f) {
      return (
        <ul className='shinkansen-piston' key='shinkansen-piston'>
          {(r) ? (<Reverse pathname={Gears.path(reverse, pattern)} />) : false}
          {(f) ? (<Forward pathname={Gears.path(forward, pattern)} />) : false}
        </ul>
      )
    }

    return false
  }
}

Piston.defaultProps = {
  pattern: Gears.pattern()
}

Piston.propTypes = {
  reverse: PropTypes.object,
  forward: PropTypes.object,
  pattern: PropTypes.string
}
