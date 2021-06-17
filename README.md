# use-fetch-on-interval

> A hook that allows you to run fetch on interval

[![NPM](https://img.shields.io/npm/v/use-fetch-on-interval.svg)](https://www.npmjs.com/package/use-fetch-on-interval) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-fetch-on-interval
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-fetch-on-interval'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [szabikr](https://github.com/szabikr)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
