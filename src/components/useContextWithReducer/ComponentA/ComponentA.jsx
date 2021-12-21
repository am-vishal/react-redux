import React, { useContext } from 'react'
import { CountContext } from '../ParentComp'
import '../Style.css'
const ComponentA = () => {
  const countContext = useContext(CountContext)
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => countContext.payload('INCR')}>+</button>
      <button onClick={() => countContext.payload('DECR')}>-</button>
      <button onClick={() => countContext.payload('RESET')}>Reset</button>
    </div>
  )
}

export default ComponentA
