import React, { createContext } from 'react';
import GrandChild1 from './Child1/GrandChild1/GrandChild1';
import Child2 from './Child2/Child2';

const ColorContext = createContext();
const ParentComp = () => {
  return (
    <div>
      <ColorContext.Provider value="Parent passeed Green">
        <GrandChild1 />
      </ColorContext.Provider>
      <Child2/>
    </div>
  )
}

export default ParentComp;
export { ColorContext };