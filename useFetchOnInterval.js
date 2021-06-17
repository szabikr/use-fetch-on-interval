import { useState, useEffect } from 'react';

export default function useFetchOnInterval(fetchData, interval) {
  const [ data, setData ] = useState({});
  const [ error, setError ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    async function runFetch() {
      setIsLoading(true);
      try {
        setData(await fetchData());
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    }
    runFetch();
    const id = setInterval(runFetch, interval);
    return () => clearInterval(id);
  }, []);

  return [ data, error, isLoading ];
}
