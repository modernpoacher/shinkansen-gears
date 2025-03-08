import React from 'react'

import {
  Rails
} from 'shinkansen-rails'

import Forward from '#gears/gears/forward'

/**
 *  @type {(forward?: Record<string, unknown>, pattern?: string) => React.JSX.Element | null}
 */
export default function renderForward (forward, pattern) {
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
