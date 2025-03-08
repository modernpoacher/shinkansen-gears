import {
  join
} from 'node:path'

import Webpack from 'webpack'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import RemoveFilesPlugin from 'remove-files-webpack-plugin'

const {
  EnvironmentPlugin
} = Webpack

const PATH = process.cwd()
const STORYBOOK = join(PATH, '.storybook')
const DEPS = join(PATH, 'node_modules')

export default {
  mode: 'production',
  entry: {
    'preview-head': join(STORYBOOK, 'preview-head.scss')
  },
  output: {
    path: STORYBOOK
  },
  stats: {
    colors: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              postcssOptions: {
                config: false,
                plugins: [
                  'postcss-import',
                  'postcss-discard-comments',
                  'postcss-discard-empty',
                  [
                    'postcss-map', {
                      maps: [
                        join(DEPS, '@modernpoacher/design-system/src/tokens/palette.json')
                      ]
                    }
                  ],
                  [
                    'autoprefixer', {
                      remove: false
                    }
                  ],
                  [
                    'perfectionist', {
                      trimLeadingZero: false,
                      sourcemap: true,
                      indentSize: 2,
                      format: 'expanded',
                      syntax: 'scss'
                    }
                  ]
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: {
                loadPaths: [
                  join(DEPS, '@modernpoacher/design-system/src/sass'),
                  join(PATH, 'src/sass')
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new RemoveFilesPlugin({
      after: {
        test: [
          {
            folder: STORYBOOK,
            method (filePath) {
              return /preview-head\.js$/m.test(filePath)
            }
          }
        ]
      }
    })
  ]
}
