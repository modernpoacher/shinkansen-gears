import React from 'react'

import {
  Rails
} from 'shinkansen-rails'

import Reverse from '#gears/gears/reverse'

/**
 *  @type {(reverse?: Record<string, unknown>, pattern?: string) => React.JSX.Element | null}
 */
export default function renderReverse (reverse, pattern) {
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
