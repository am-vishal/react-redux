import React, {createContext} from 'react';
import ComponentA from './Children/ComponentA';
export const NameContext = createContext();
export const ColorContext = createContext();
function Parent() {
  return (
    <div>
      <NameContext.Provider value={'Smith'}>
        <ColorContext.Provider value={'red'}>
          <ComponentA />
        </ColorContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

export default Parent;
