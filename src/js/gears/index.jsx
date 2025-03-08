/**
 *  @typedef {GearsTypes.GearsProps} GearsProps
 *  @typedef {GearsTypes.GearsState} GearsState
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import equal from 'fast-deep-equal'

import {
  Rails
} from 'shinkansen-rails'

import renderReverse from '#gears/render/reverse'

import renderForward from '#gears/render/forward'

export default class Gears extends Component {
  /**
   *  @type {GearsState}
   */
  state = {} // define state

  /**
   *  Store latest 'props' in 'state'
   *
   *  @param {GearsProps} props   Latest props
   *  @param {GearsState} state   Current state
   *  @returns {GearsState} Derived state
   */
  static getDerivedStateFromProps ({ reverse, forward }, { reverse: R, forward: F }) {
    return {
      reverse: equal(R, reverse) ? R : reverse,
      forward: equal(F, forward) ? F : forward
    }
  }

  /**
   *  Compare latest 'props' and 'state' for changes to 'pattern', 'reverse' or 'forward'
   *
   *  @param {GearsProps} props   Latest props
   *  @param {GearsState} state   Current state
   *  @returns {boolean}
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
      reverse = {},
      forward = {},
      pattern = Rails.pattern()
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
  reverse: PropTypes.shape({}),
  forward: PropTypes.shape({}),
  pattern: PropTypes.string
}
