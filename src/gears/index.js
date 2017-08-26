import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import {
  Rails
} from 'shinkansen-rails'

import Reverse from './reverse'
import Forward from './forward'

export default class Gears extends React.Component {
  state = {} // define state

  /**
   *  Convert latest 'props' to an Immutable.Map() and store in 'state'
   *
   *  @param {Object} props   Latest props
   */
  componentWillReceiveProps ({ reverse, forward }) { // console.log('(Gears)componentWillReceiveProps()', { reverse, forward }) // eslint-disable-line
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
  shouldComponentUpdate ({ pattern, ...props }) { // console.log('(Gears)shouldComponentUpdate()', { pattern, ...props })
    const {
      pattern: PATTERN
    } = this.props

    if (pattern !== PATTERN) return true

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

  render () { // console.log('(Gears)render()')
    const {
      reverse,
      forward,
      pattern
    } = this.props

    const reverseGear = (Rails.engage(reverse, pattern))
      ? (
        <Reverse
          pathname={Rails.path(reverse, pattern)}
        />
      ) : null

    const forwardGear = (Rails.engage(forward, pattern))
      ? (
        <Forward
          pathname={Rails.path(forward, pattern)}
        />
      ) : null

    if (reverseGear || forwardGear) {
      return (
        <ul className='shinkansen-gears' key='shinkansen-gears'>
          {reverseGear}
          {forwardGear}
        </ul>
      )
    }

    return null
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
