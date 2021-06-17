import { useState, useEffect } from 'react'

export default function useFetchOnInterval(fetchData, interval) {
  const [ data, setData ] = useState({})
  const [ error, setError ] = useState({})
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    async function runFetch() {
      setIsLoading(true)
      try {
        const result = await fetchData()
        setData(result.data)
      } catch (err) {
        setError(err)
      }
      setIsLoading(false)
    }
    runFetch()
    const id = window.setInterval(runFetch, interval)
    return () => window.clearInterval(id)
  }, [])

  return { data, error, isLoading }
}
