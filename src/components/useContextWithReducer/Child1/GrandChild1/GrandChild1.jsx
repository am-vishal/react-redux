import React, { useContext } from 'react';
import { ColorContext } from 'components/useContextWithReducer/ParentComp';

const GrandChild1 = () => {
  const color = useContext(ColorContext)
  return (
    <div>
      <h1>Grandchild 1 value is : {color}</h1>
    </div>
  )
}

export default GrandChild1;