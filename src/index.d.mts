import Reverse from './gears/reverse/index.mjs'
import Forward from './gears/forward/index.mjs'
import Gears from './gears/index.mjs'

declare module 'shinkansen-gears' {
  export function renderReverse (reverse?: string, pattern?: string): typeof Reverse | null
  export function renderForward (reverse?: string, pattern?: string): typeof Forward | null
  export default Gears
}
