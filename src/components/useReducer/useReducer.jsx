import React, {useReducer} from 'react';

let initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case 'INCR':
      return state + 1;
    case 'DECR':
      return state - 1;
    default:
      return state;
  }
}
const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducer Hook</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({type: 'INCR'})}>Increment</button>
      <button onClick={() => dispatch({type: 'DECR'})}>Decrement</button>
    </div>
  );
};

export default UseReducer;
