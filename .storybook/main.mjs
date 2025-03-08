/**
 *  @type {import('@storybook/react-webpack5').StorybookConfig}
 */

export default {
  stories: [
    '../stories/**/*.stories.jsx'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
