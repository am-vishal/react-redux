import React from 'react';

const RefAndLayoutEffect = () => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = 'some value';
    console.log('useEffect: ', ref.current);
  });
  // then, later in another hook or something
  React.useLayoutEffect(() => {
    console.log('useLayputEffect: ', ref.current); // <-- this logs an old value because this runs first!
  });
  return <div>"hello"</div>;
};

export default RefAndLayoutEffect;
