import debug from 'debug'

import {
  join
} from 'node:path'

import {
  readFile,
  writeFile
} from 'node:fs/promises'

const log = debug('shinkansen-gears/storybook/transform')

log('`gears` is awake')

// \u200b
// ✓ \u2713
// • \u2022

const CSS = /(<style.*>)[ -~"'+-:;,#%{}()/*\n\s\u200b\u2713\u2022]*(<\/style>)/gm

const PATH = process.cwd()
const STORYBOOK = join(PATH, '.storybook')

async function getCss () {
  log('getCss')

  const filePath = join(STORYBOOK, 'preview-head.css')

  return `$1\n${(await readFile(filePath, 'utf8')).trim()}\n$2`.trim()
}

export default async function transform () {
  log('transform')

  const filePath = join(STORYBOOK, 'preview-head.html')

  return (await writeFile(filePath, (await readFile(filePath, 'utf8')).replace(CSS, await getCss()), 'utf8'))
}
