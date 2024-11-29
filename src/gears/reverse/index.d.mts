declare module '#gears/gears/reverse' {
  import type React from 'react'

  export interface ReverseProps {
    pathname: string
  }

  export default function Reverse (props: ReverseProps): React.JSX.Element
}

declare module 'shinkansen-gears/gears/reverse' {
  export { default } from '#gears/gears/reverse'
  export * from '#gears/gears/reverse'
}
