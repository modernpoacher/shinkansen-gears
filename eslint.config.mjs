/**
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 */

import globals from 'globals'
import standard from '@sequencemedia/eslint-config-standard/configs/recommended/merge'
import typescript from '@sequencemedia/eslint-config-typescript/configs/recommended/merge'
import reactPlugin from '@eslint-react/eslint-plugin'
import storybookPlugin from 'eslint-plugin-storybook'

const reactParserOptions = {
  ecmaFeatures: {
    jsx: true
  }
}

const reactPlugins = {
  react: reactPlugin
}

const storybookPlugins = {
  storybook: storybookPlugin
}

/**
 * @type {RulesRecord}
 */
const reactRules = {
  'no-unused-vars': [
    'error',
    {
      varsIgnorePattern: 'React'
    }
  ],
  '@stylistic/quotes': [
    'error',
    'single'
  ],
  '@stylistic/jsx-quotes': [
    'error',
    'prefer-single'
  ],
  '@stylistic/indent': [
    'error',
    2,
    {
      SwitchCase: 1,
      ignoredNodes: [
        'TemplateLiteral *'
      ],
      offsetTernaryExpressions: true
    }
  ]
}

export default [
  {
    ignores: [
      'coverage'
    ]
  },
  /**
   *  React config for all `jsx` files
   */
  {
    ...reactPlugin.configs.recommended,
    files: [
      '**/*.jsx'
    ]
  },
  /**
   *  Storybook config
   */ // @ts-ignore
  ...storybookPlugin.configs['flat/recommended'],
  /**
   *  Standard config
   */
  standard({
    files: [
      '**/*.{mjs,cjs,mts,cts}'
    ],
    ignores: [
      'src',
      'stories',
      'test',
      'jest.*.mjs'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  /**
   *  Standard config for `mjs` and `mts` files
   */
  standard({
    files: [
      'src/**/*.{mjs,cjs,mts,cts}',
      'stories/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }),
  standard({
    files: [
      'test/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  }),
  /**
   *  Standard config for all `jsx` files
   */
  standard({
    files: [
      'src/**/*.jsx',
      'stories/**/*.jsx'
    ],
    ignores: [
      'src/**/__tests__/**/*.jsx',
      'stories/**/__tests__/**/*.jsx'
    ],
    languageOptions: {
      parserOptions: {
        ...reactParserOptions
      },
      globals: {
        ...globals.browser
      }
    }, // @ts-expect-error Storybook
    plugins: {
      ...reactPlugins,
      ...storybookPlugins
    },
    rules: {
      ...reactRules
    }
  }),
  /**
   *  Standard config for `jsx` files
   */
  standard({
    files: [
      'src/**/__tests__/**/*.jsx',
      'stories/**/__tests__/**/*.jsx',
      'jest.*.mjs'
    ],
    languageOptions: {
      parserOptions: {
        ...reactParserOptions
      },
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    }, // @ts-expect-error Storybook
    plugins: {
      ...reactPlugins,
      ...storybookPlugins
    },
    rules: {
      ...reactRules
    }
  }),
  /**
   *  TypeScript config
   */
  typescript({
    files: [
      '**/*.{mts,cts}'
    ],
    ignores: [
      'src',
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        GearsTypes: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-redundant-type-constituents': 'off'
    }
  }),
  typescript({
    files: [
      'src/**/*.{mts,cts}',
      'test/**/*.{mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        GearsTypes: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-redundant-type-constituents': 'off'
    }
  })
]
