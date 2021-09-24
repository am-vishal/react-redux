import React, {useContext} from 'react';
import ColorContext from '../ParentComp';

const Child1 = () => {
  const color = useContext(ColorContext);
  return (
    <div>
      <h1>child2 color : {color}</h1>
    </div>
  );
};

export default Child1;
