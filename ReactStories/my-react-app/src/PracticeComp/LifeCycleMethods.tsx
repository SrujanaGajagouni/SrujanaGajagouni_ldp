import React, { useState, useEffect } from 'react';
import { Stack, Button, Typography} from '@mui/material';

const FunctionalLifeCycleMethod: React.FC = () => {
  const[count, setCount] = useState<number>(0)
  useEffect( () => {
    console.log('Component mounted');
  },[]);
  useEffect( () => {
    if (count !== 0) {
      console.log('Component updated');
    }
  },[count]);
  const increment = () => {setCount(count+1)}
  const reset = () => {
    setCount(0)
    console.log('Component unmount');
  }
  return(
    <Stack direction='column' alignItems='center' spacing={1}>
      <Typography variant='h4' >count:{count}</Typography>
      <Button variant='contained' color='primary' size='medium' onClick={increment} sx={{width:200}} >Click Here</Button>
      <Button variant='contained' color='primary' size='medium' onClick={reset} sx={{width:200}}>Reset</Button>
    </Stack>
  )
}
 export default FunctionalLifeCycleMethod