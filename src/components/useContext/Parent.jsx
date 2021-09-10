import React, {createContext} from 'react';
import Child1 from './Child/Child1';

const ParentGreet = createContext();
const Parent = () => {
  return (
    <div>
      <h1>Parent</h1>
      <ParentGreet.Provider value={'Hello, from Parent'}>
        <Child1 />
      </ParentGreet.Provider>
    </div>
  );
};

export default Parent;
export {ParentGreet};
