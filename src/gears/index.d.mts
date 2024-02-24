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
