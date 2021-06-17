# use-fetch-on-interval

> A hook that allows you to run fetch on interval

[![NPM](https://img.shields.io/npm/v/use-fetch-on-interval.svg)](https://www.npmjs.com/package/use-fetch-on-interval) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-fetch-on-interval
```

## Usage

```jsx
import React from 'react'
import axios from 'axios'
import useFetchOnInterval from 'use-fetch-on-interval'

export async function fetchDataWithAxios() {
  try {
    return await axios.get('./data.json')
  } catch (err) {
    throw err
  }
}

const oneSecond = 1000
const interval = oneSecond

const App = () => {
  const { data, error, isLoading } = useFetchOnInterval(fetchDataWithAxios, interval)
  return (
    <div>
      <p>
        <code>DATA: {JSON.stringify(data)}</code>
      </p>
      <p>
        <code>ERROR: {JSON.stringify(error)}</code>
      </p>
      <p>
        <code>IS_LOADING: {JSON.stringify(isLoading)}</code>
      </p>
    </div>
  )
}
```

## License

MIT © [szabikr](https://github.com/szabikr)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
