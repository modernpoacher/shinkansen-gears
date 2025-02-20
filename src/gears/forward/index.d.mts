declare module '#gears/gears/forward' {
  import type React from 'react'

  export type ForwardProps = GearsTypes.Forward.ForwardProps

  export default function Forward (props: ForwardProps): React.JSX.Element
}

declare module 'shinkansen-gears/gears/forward' {
  export type ForwardProps = GearsTypes.Forward.ForwardProps

  export { default } from '#gears/gears/forward'
  export * from '#gears/gears/forward'
}
