import React, {createContext} from 'react';
import GrandChild1 from './Child1/GrandChild1.jsx/GrandChild1';

const ColorContext = createContext();
const ParentComp = () => {
  return (
    <div>
      <ColorContext.Provider value="Green">
        <h1>parent</h1>
        <GrandChild1 />
      </ColorContext.Provider>
    </div>
  );
};

export default ParentComp;
export {ColorContext};
