import React from 'react'

import ReverseComponent from './reverse/index.mjs'
import ForwardComponent from './forward/index.mjs'

type GearsProps = {
  reverse: {},
  forward: {},
  pattern: string
}

type GearsComponent = React.ComponentClass<GearsProps>

declare const Gears: GearsComponent

export function renderReverse (reverse: {}, pattern: string | void): ReverseComponent | null
export function renderForward (forward: {}, pattern: string | void): ForwardComponent | null
export default Gears
