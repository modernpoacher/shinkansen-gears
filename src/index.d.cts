declare module 'shinkansen-gears/gears/reverse' {
  import type React from 'react'

  export interface ReverseProps {
    pathname: string
  }

  export default function Reverse (props: ReverseProps): React.JSX.Element
}

declare module 'shinkansen-gears/gears/forward' {
  import type React from 'react'

  export interface ForwardProps {
    pathname: string
  }

  export default function Forward (props: ForwardProps): React.JSX.Element
}

declare module 'shinkansen-gears/gears' {
  import React from 'react'

  export interface GearsProps {
    reverse: Record<string, unknown>
    forward: Record<string, unknown>
    pattern: string
  }

  export interface GearsState {
    reverse?: Record<string, unknown>
    forward?: Record<string, unknown>
  }

  export function renderReverse (reverse: Record<string, unknown>, pattern?: string): React.JSX.Element | null
  export function renderForward (forward: Record<string, unknown>, pattern?: string): React.JSX.Element | null
  export default class Gears extends React.Component<GearsProps, GearsState> {}
}

declare module 'shinkansen-gears' {
  export { default as Gears } from 'shinkansen-gears/gears'
}
