declare module 'shinkansen-gears/gears/forward' {
  import type React from 'react'

  export interface ForwardProps {
    pathname: string
  }

  export default function Forward (props: ForwardProps): React.JSX.Element
}
