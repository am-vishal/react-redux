import React from 'react';
import {ParentGreet} from '../../Parent';

const GrandChild = () => {
  return (
    <div>
      <h1>GrandChild</h1>
      <ParentGreet.Consumer>
        {(greet) => {
          return <p>This msg is coming from grandpa {greet}</p>;
        }}
      </ParentGreet.Consumer>
    </div>
  );
};

export default GrandChild;
