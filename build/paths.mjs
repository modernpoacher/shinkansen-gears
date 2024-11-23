import {
  join
} from 'node:path'

export const currentDir = process.cwd() // is resolved
export const storybookPath = join(currentDir, '.storybook')
export const modulePath = join(currentDir, 'node_modules')
