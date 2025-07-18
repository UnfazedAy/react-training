import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount =>prevCount > 0 ? prevCount - 1 : 0);
  };

  return { count, increment, decrement };
}

export default useCounter;