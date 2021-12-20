import React, { useReducer } from 'react';

let initialCount = 0
function reducer(state, action) {
  switch (action.type) {
    case 'INCR':
      return { count: state + 1 }
    case 'DECR':
      return state - 1
    default:
      return state;
  }
}
const Child2 = () => {
  const [state, dispatch] = useReducer(reducer, initialCount)
  return (
    <div>
      <h2>Count: {state}</h2>
      <button onClick={() => dispatch({ type: 'DECR' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCR' })}>+</button>
    </div>
  );
};

export default Child2;