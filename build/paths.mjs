import path from 'node:path'

export const currentDir = process.cwd()
export const sourcePath = path.join('.storybook')
export const targetPath = path.join('.storybook')
export const modulePath = path.join(currentDir, 'node_modules')
