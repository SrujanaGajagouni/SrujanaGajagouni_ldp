import { useCallback } from 'react';
import {useState} from 'react';
import { Button, Typography } from '@mui/material';

const CallbackHook = () => {
  const[count, IncCount] = useState(0);
  const[DecCount, DecrementCount] = useState(0);

  const handleClick = useCallback(() => {
    IncCount(prevCount => prevCount + 1  )
  },[])

  const handleDec=useCallback(() => {
    DecrementCount(prevCount => prevCount-1);
  },[])

  return (
    <div>
        <Button  onClick={handleClick} variant='contained'>Increment</Button>
        <Typography variant='h4'>count:{count}</Typography>
        <Button  onClick={handleDec} variant='contained'>Decrement</Button>
        <Typography variant='h4'>count:{DecCount}</Typography>
      
    </div>
  )
}

export default CallbackHook