import  { useState } from 'react';

const State = () => {
  const [user, setUser] = useState({ name: 'user' });

  const handleClick = () => {
    setUser({ name: 'updated user' }); 
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <h3>{user.name}</h3>
    </>
  );
};

export default State;
