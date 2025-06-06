/**
 *  @type {import('@storybook/react-webpack5').Preview}
 */

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}
