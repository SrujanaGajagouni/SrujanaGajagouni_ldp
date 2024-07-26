import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const CountInc: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []); 

  return (
    <div>
      <Typography variant="h4">Count: {count}</Typography>
    </div>
  );
};

export default CountInc;