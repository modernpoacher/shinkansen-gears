declare module '#gears/gears' {
  import React from 'react'

  type GearsProps = GearsTypes.GearsProps
  type GearsState = GearsTypes.GearsState

  export function renderReverse (reverse?: Record<string, unknown>, pattern?: string): React.JSX.Element | null
  export function renderForward (forward?: Record<string, unknown>, pattern?: string): React.JSX.Element | null
  export default class Gears extends React.Component<GearsProps, GearsState> {}
}

declare module 'shinkansen-gears/gears' {
  export type GearsProps = GearsTypes.GearsProps
  export type GearsState = GearsTypes.GearsState

  export { default } from '#gears/gears'
  export * from '#gears/gears'
}
