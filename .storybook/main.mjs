/** @type { import('@storybook/react-webpack5').StorybookConfig } */

export default {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.jsx'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}
