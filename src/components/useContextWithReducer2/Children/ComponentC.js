import React, {useContext} from 'react';
import {ColorContext, NameContext} from '../Parent';
const ComponentC = () => {
  const color = useContext(ColorContext);
  const name = useContext(NameContext);
  return (
    <div>
      <div>ComponentC</div>
      {color}
      {name}
    </div>
  );
};

export default ComponentC;
