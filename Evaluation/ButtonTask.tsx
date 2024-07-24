import { Button } from '@mui/material';

const ButtonTask = () => {
  const types = [
    { label: "Delete", count: 3 },
    { label: "Save", count: 2 }
  ];

  return (
    <>
        {types.map((type, index) => (
            Array.from({ length: type.count }).map((_, i) => (
            <Button 
                variant='contained' 
                key={`${index}-${i}`} 
            >
                {type.label}
            </Button>
            ))
        ))}
    </>
  );
}

export default ButtonTask;
