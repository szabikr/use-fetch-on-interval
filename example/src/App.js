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
export default App
