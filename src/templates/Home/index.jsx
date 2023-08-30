import { useEffect, useRef, useState } from 'react';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    };
    fetchData();
  }, []);

  return [result, loading];
};

export const Home = () => {
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <p>loading...</p>;
  }

  if (!loading && result) {
    console.log(result);
  }
  return <h1>oi</h1>;
};
