import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import {
  Rails
} from 'shinkansen-rails'

import {
  Reverse
} from './reverse'

import {
  Forward
} from './forward'

export class Gears extends React.Component {
  state = {} // define state

  /**
   *  Convert latest 'props' to an Immutable.Map() and store in 'state'
   *
   *  @param {Object} props   Latest props
   */
  componentWillReceiveProps (props) { // // console.log('(Gears)componentWillReceiveProps()', props) // eslint-disable-line
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
  shouldComponentUpdate (props) { // // console.log('(Gears)shouldComponentUpdate()', props)
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

  render () { // // console.log('(Gears)render()')

    const {
      reverse,
      forward,
      pattern
    } = this.props

    const r = Rails.engage(reverse, pattern)
    const f = Rails.engage(forward, pattern)

    if (r || f) {
      return (
        <ul className='shinkansen-gears' key='shinkansen-gears'>
          {(r) ? (<Reverse pathname={Rails.path(reverse, pattern)} />) : false}
          {(f) ? (<Forward pathname={Rails.path(forward, pattern)} />) : false}
        </ul>
      )
    }

    return false
  }
}

Gears.defaultProps = {
  pattern: Rails.pattern()
}

Gears.propTypes = {
  reverse: PropTypes.object,
  forward: PropTypes.object,
  pattern: PropTypes.string
}
