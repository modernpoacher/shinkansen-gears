/**
 * @typedef {import('shinkansen-gears/gears').GearsProps} GearsProps
 * @typedef {import('shinkansen-gears/gears').GearsState} GearsState
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

import {
  Rails
} from 'shinkansen-rails'

import Reverse from './reverse/index.jsx'
import Forward from './forward/index.jsx'

/**
 * @type {(reverse: {}, pattern: string | void): React.JSX.Element | null}
 */
export function renderReverse (reverse, pattern) {
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

/**
 * @type {(reverse: {}, pattern: string | void): React.JSX.Element | null}
 */
export function renderForward (forward, pattern) {
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

export default class Gears extends Component {
  /**
   *  @type {GearsState}
   */
  state = {} // define state

  /**
   *  Convert latest 'props' to an Immutable.Map() and store in 'state'
   *
   * @param {GearsProps} props   Latest props
   * @param {GearsState} state   Current state
   * @returns {GearsState} Derived state
   */
  static getDerivedStateFromProps ({ reverse, forward }, { reverse: R, forward: F }) {
    const r = Immutable.Map(reverse)
    const f = Immutable.Map(forward)

    return {
      reverse: Immutable.is(R, r) ? R : r,
      forward: Immutable.is(F, f) ? F : f
    }
  }

  /**
   *  Compare latest 'props' and 'state' for changes to 'pattern', 'reverse' or 'forward'
   *
   * @param {{ pattern: string }} props   Latest props
   * @param {GearsState} state   Current state
   * @returns {boolean}
   */
  shouldComponentUpdate ({ pattern }, state) {
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

    return (
      reverse !== REVERSE ||
      forward !== FORWARD
    )
  }

  render () {
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
