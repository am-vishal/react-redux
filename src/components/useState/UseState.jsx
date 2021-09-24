import React, {useState} from 'react';

const UseState = () => {
  const [increase, setIncrease] = useState(() => {
    // console.log('run only 1');
    return 0;
  });
  const hanndlClickINC = (e) => {
    //stopPropagation stop mutliple click back to back or instead click
    e.stopPropagation();
    increase < 10 && setIncrease((increase) => increase + 1);
  };
  const hanndlClickDEC = (e) => {
    //stopPropagation stop mutliple click back to back or instead click
    e.stopPropagation();
    increase > 0 && setIncrease((increase) => increase - 1);
  };
  return (
    <div style={{display: 'inline-flex'}}>
      <p style={{margin: '0.5em'}}>React useStateHook</p>
      <button style={{margin: '0.5em'}} onClick={hanndlClickDEC}>
        -1 till 0
      </button>
      <p style={{margin: '0.5em'}}>{increase}</p>
      <button style={{margin: '0.5em'}} onClick={hanndlClickINC}>
        +1 till 10
      </button>
      <div></div>
    </div>
  );
};

export default UseState;
