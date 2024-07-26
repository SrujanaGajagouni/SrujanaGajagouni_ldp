import { Button } from '@mui/material';

const ButtonTask = () => {
  const types = [
    { id: 'delete', label: "Delete", count: 3 },
    { id: 'save', label: "Save", count: 2 }
  ];

  return (
    <>
      {types.map(type => (
        Array.from({ length: type.count }).map((_, i) => (
          <Button
            variant='contained'
            key={`${type.id}-${i}`} 
          >
            {type.label}
          </Button>
        ))
      ))}
    </>
  );
}

export default ButtonTask;
