import React from 'react'

interface GearsProps {
  reverse: {},
  forward: {},
  pattern: string
}

declare const Gears: (props: GearsProps) => React.JSX.Element

export function renderReverse (reverse: {}, pattern: string | void): React.JSX.Element | null
export function renderForward (forward: {}, pattern: string | void): React.JSX.Element | null
export default Gears
