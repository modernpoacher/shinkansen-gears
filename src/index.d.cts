declare module 'shinkansen-gears/gears/reverse' {
  import React from 'react'

  export type ReverseProps = {
    pathname: string
  }

  export default function Reverse (props: ReverseProps): React.JSX.Element
}

declare module 'shinkansen-gears/gears/forward' {
  import React from 'react'

  export type ForwardProps = {
    pathname: string
  }

  export default function Forward (props: ForwardProps): React.JSX.Element
}

declare module 'shinkansen-gears/gears' {
  import React from 'react'

  export type GearsProps = {
    reverse: {},
    forward: {},
    pattern: string
  }

  export type GearsState = {
    reverse?: {}
    forward?: {}
  }

  export function renderReverse (reverse: {}, pattern: string | void): React.JSX.Element | null
  export function renderForward (forward: {}, pattern: string | void): React.JSX.Element | null
  export default class Gears extends React.Component<GearsProps, GearsState> {}
}

declare module 'shinkansen-gears' {
  export { default as Gears } from 'shinkansen-gears/gears'
}
