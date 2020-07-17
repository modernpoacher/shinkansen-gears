## @modernpoacher/shinkansen-gears

# Shinkansen Gears

*Gears* implements *React* + *React Router* navigation components for Zashiki.

## Usage

```javascript
import {
  Gears
} from 'shinkansen-gears'
```

*Gears* exposes the props `reverse`, `forward`, and `pattern`.

These props are _optional_. If no props are given then *Gears* will render `null`.

*Gears* depends on a peer of *[Shinkansen Rails](https://github.com/modernpoacher/shinkansen-rails)* to transform the props `reverse` and `forward` into `<Link />` components for *React Router*. (The prop `pattern` describes how `reverse` and `forward` should be transformed.)

```javascript
import React from 'react'
import PropTypes from 'prop-types'

export class Gears extends React.Component { }

Gears.propTypes = {
  reverse: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }),
  forward: PropTypes.shape({
    alpha: PropTypes.string,
    omega: PropTypes.string
  }),
  pattern: PropTypes.string
}
```

## See also

- [Shinkansen Rails](https://github.com/modernpoacher/shinkansen-rails)
- [Shinkansen Pantograph](https://github.com/modernpoacher/shinkansen-pantograph)
