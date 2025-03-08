#!/bin/bash

DEBUG="${DEBUG:-shinkansen-gears*}"

node -e 'import("./.storybook/transform.mjs").then(({ default: transform }) => transform())'
