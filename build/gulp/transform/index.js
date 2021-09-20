import debug from 'debug'

import path from 'path'
import gulp from 'gulp'

import {
  currentDir,
  sourcePath,
  targetPath
} from 'build/paths'

import handleError from 'build/gulp/handle-error'

import {
  readFile,
  writeFile
} from 'fs/promises'

const log = debug('shinkansen-gears:build:gulp:transform')

log('`transform` is awake')

// eslint-disable-next-line no-irregular-whitespace
// \u200b
// ✓ \u2713
// • \u2022

const CSS = /(<style.*>)[ -~"'+-:;,#%{}()/*\n\s\u200b\u2713\u2022]*(<\/style>)/gm // eslint-disable-line no-irregular-whitespace

const buildSourcePath = path.relative(currentDir, sourcePath)
const buildTargetPath = path.relative(currentDir, targetPath)

const getCss = async (css = '') => {
  const filePath = path.join(buildSourcePath, 'css/preview-head.css')
  const fileData = await readFile(filePath, 'utf8')

  return `$1\n${fileData.trim()}\n$2`.trim()
}

export async function transform () {
  log('transform')

  const htmlFilePath = path.join(buildTargetPath, 'preview-head.html')

  return (await writeFile(htmlFilePath, (await readFile(htmlFilePath, 'utf8')).replace(CSS, await getCss()), 'utf8'))
}

export function transformClean () {
  log('transformClean')

  return Promise.resolve()
}

export function transformWatch () {
  log('transformWatch')

  return (
    gulp.watch(
      path.join(buildSourcePath, 'css/*.css'),
      {
        name: 'css-watch',
        cwd: currentDir
      },
      transform
    ).on('error', handleError)
  )
}

export default transform
