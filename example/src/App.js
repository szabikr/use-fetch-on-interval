import React from 'react'
import { useMyHook } from 'use-fetch-on-interval'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App