import { useState, useEffect } from 'react';

function Debounce(value, delay) {
  const [useDebounce, setUseDebounce] = useState(value);
  useEffect(() => {
    const handle = setTimeout(() => {
      setUseDebounce(value);
    }, delay);
    return () => {
      clearTimeout(handle);
    };
  }, [value]);

  return useDebounce;
}

export default Debounce;
