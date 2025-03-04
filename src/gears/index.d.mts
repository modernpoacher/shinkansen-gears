declare module '#gears/gears' {
  import React from 'react'

  export type GearsProps = GearsTypes.GearsProps
  export type GearsState = GearsTypes.GearsState

  export default class Gears extends React.Component<GearsProps, GearsState> {}
}

declare module 'shinkansen-gears/gears' {
  export { default } from '#gears/gears'
  export * from '#gears/gears'
}
