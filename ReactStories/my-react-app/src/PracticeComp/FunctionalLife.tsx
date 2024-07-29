import React, { useState, useEffect } from 'react';

const FunctionalLifeCycle: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('Component mounted');

    // return () => {
    //   console.log('Component will unmount');
    // };
  }, []);

  useEffect(() => {
    if (count !== 0) {
      console.log('Component updated');
    }
  }, [count]); 

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const reset = () => {
    console.log('Component will unmount');
    setCount(0);
    
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default FunctionalLifeCycle;
