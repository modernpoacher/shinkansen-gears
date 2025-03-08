declare module '#gears/render/reverse' {
  import type React from 'react'

  export default function renderReverse (reverse?: Record<string, unknown>, pattern?: string): React.JSX.Element | null
}

declare module 'shinkansen-gears/render/reverse' {
  export { default } from '#gears/render/reverse'
}
