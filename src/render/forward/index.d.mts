declare module '#gears/render/forward' {
  import type React from 'react'

  export default function renderForward (forward?: Record<string, unknown>, pattern?: string): React.JSX.Element | null
}

declare module 'shinkansen-gears/render/forward' {
  export { default } from '#gears/render/forward'
}
