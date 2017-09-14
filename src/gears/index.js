import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import {
  Rails
} from 'shinkansen-rails'

import Reverse from './reverse'
import Forward from './forward'

function renderReverse (reverse, pattern) {
  if (Rails.go(reverse, pattern)) {
    const pathname = Rails.to(reverse, pattern)

    return (
      <Reverse
        pathname={pathname}
      />
    )
  }

  return null
}

function renderForward (forward, pattern) {
  if (Rails.go(forward, pattern)) {
    const pathname = Rails.to(forward, pattern)

    return (
      <Forward
        pathname={pathname}
      />
    )
  }

  return null
}

export default class Gears extends React.Component {
  state = {} // define state

  /**
   *  Convert latest 'props' to an Immutable.Map() and store in 'state'
   *
   *  @param {Object} props   Latest props
   */
  componentWillReceiveProps ({ reverse, forward }) { // console.log('(Gears)componentWillReceiveProps()', { reverse, forward }) // eslint-disable-line
    const r = Immutable.Map(reverse)
    const f = Immutable.Map(forward)

    const {
      reverse: R,
      forward: F
    } = this.state

    if (!Immutable.is(r, R)) {
      this.setState({
        reverse: r
      })
    }

    if (!Immutable.is(f, F)) {
      this.setState({
        forward: f
      })
    }
  }

  /**
   *  Compare latest 'props' and 'state' for changes to 'pattern', 'reverse' or 'forward'
   *
   *  @param {Object} props   Latest props
   */
  shouldComponentUpdate ({ pattern }, state) { // console.log('(Gears)shouldComponentUpdate()', { pattern }, state)
    const {
      pattern: PATTERN
    } = this.props

    if (pattern !== PATTERN) return true

    const {
      reverse,
      forward
    } = state

    const {
      reverse: REVERSE,
      forward: FORWARD
    } = this.state // state must be defined

    return (reverse !== REVERSE || forward !== FORWARD)
  }

  render () { // console.log('(Gears)render()')
    const {
      reverse,
      forward,
      pattern
    } = this.props

    const reverseGear = renderReverse(reverse, pattern)
    const forwardGear = renderForward(forward, pattern)

    if (reverseGear || forwardGear) {
      return (
        <ul className='shinkansen-gears'>
          {reverseGear}
          {forwardGear}
        </ul>
      )
    }

    return null
  }
}

Gears.defaultProps = {
  reverse: {},
  forward: {},
  pattern: Rails.pattern()
}

Gears.propTypes = {
  reverse: PropTypes.object,
  forward: PropTypes.object,
  pattern: PropTypes.string
}
