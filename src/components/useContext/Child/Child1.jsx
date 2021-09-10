import React from 'react';
import GrandChild from './GrandChild/GrandChild';

const Child1 = () => {
  return (
    <div>
      <h1>Child1</h1>
      <GrandChild />
    </div>
  );
};

export default Child1;
