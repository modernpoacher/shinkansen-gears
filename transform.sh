#!/bin/bash

DEBUG=shinkansen-cogs*
node -e 'import("./build/transform.mjs").then(({ default: transform }) => transform())'
