import type GearsComponent from './gears/index.mjs'

declare module 'shinkansen-gears' {
  export const Gears: typeof GearsComponent
}
