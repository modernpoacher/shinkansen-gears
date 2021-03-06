import React from 'react'

import { storiesOf } from '@storybook/react'
import StorybookReactRouter from 'storybook-react-router'

import {
  Gears
} from 'shinkansen-gears'

const FORWARD = {
  alpha: 'alpha',
  omega: 'omega'
}

const REVERSE = {
  alpha: 'alpha',
  omega: 'omega'
}

storiesOf('Gears', module)
  .addDecorator(StorybookReactRouter())
  .add('Reverse - Forward', () => (
    <Gears
      reverse={REVERSE}
      forward={FORWARD}
    />
  ))
  .add('Reverse', () => (
    <Gears
      reverse={REVERSE}
    />
  ))
  .add('Forward', () => (
    <Gears
      forward={FORWARD}
    />
  ))
