import React from 'react'

interface GearsProps {
  reverse: {},
  forward: {},
  pattern: string
}

declare const Gears: (props: GearsProps) => React.JSX.Element

export default Gears
