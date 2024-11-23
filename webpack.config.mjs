import {
  join
} from 'node:path'

import Webpack from 'webpack'

import {
  CleanWebpackPlugin as CleanPlugin
} from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import RemoveFilesPlugin from 'remove-files-webpack-plugin'

import {
  storybookPath as STORYBOOK_PATH,
  modulePath as MODULE_PATH
} from '#build/paths'

const {
  EnvironmentPlugin,
  SourceMapDevToolPlugin
} = Webpack

export default {
  mode: 'production',
  entry: {
    'preview-head': join(STORYBOOK_PATH, 'sass/preview-head.scss')
  },
  output: {
    path: join(STORYBOOK_PATH, 'css')
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
                        join(MODULE_PATH, '@modernpoacher/design-system/src/tokens/palette.json')
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
                  join(MODULE_PATH, '@modernpoacher/design-system/src/sass')
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanPlugin({
      verbose: false,
      cleanOnceBeforeBuildPatterns: [
        join(STORYBOOK_PATH, 'css/*.css'),
        join(STORYBOOK_PATH, 'css/*.css.map')
      ]
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new SourceMapDevToolPlugin({
      test: /\.css$/i,
      filename: '[name].css.map'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new RemoveFilesPlugin({
      after: {
        test: [
          {
            folder: join(STORYBOOK_PATH, 'css'),
            method (filePath) {
              return /\.js$/m.test(filePath)
            }
          }
        ]
      }
    })
  ]
}
