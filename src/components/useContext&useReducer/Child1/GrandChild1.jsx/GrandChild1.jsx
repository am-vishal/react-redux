import {ColorContext} from 'components/useContext&useReducer/ParentComp';
import React from 'react';

const GrandChild1 = () => {
  return (
    <div>
      <ColorContext.Consumer>
        {(value) => value`sdfsedf ${value}`}
        <h1>grandchild 222</h1>
      </ColorContext.Consumer>
    </div>
  );
};

export default GrandChild1;
