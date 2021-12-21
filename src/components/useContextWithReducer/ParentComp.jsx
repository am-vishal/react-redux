import React, { createContext, useReducer, useMemo } from 'react';
import ComponentA from 'components/useContextWithReducer/ComponentA/ComponentA'
import ComponentB from 'components/useContextWithReducer/ComponentB/ComponentB'
import ComponentC from 'components/useContextWithReducer/ComponentC/ComponentC'

export const CountContext = createContext();
let initialState = 0
function reducer(state, action) {
  switch (action) {
    case 'INCR':
      return state + 1;
    case 'DECR':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
const ParentComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => {
    return { state: state, payload: dispatch };
  }, [state, dispatch]);

  return (
    <CountContext.Provider value={contextValue}>
      <h1>
        <span style={{ marginRight: '10px' }}>Count:</span>
        {state >= 0 ? state : state + '   Negative Value'}
      </h1>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </CountContext.Provider>
  )
}

export default ParentComp;