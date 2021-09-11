import React from 'react';

export const Title = () => {
  console.log('rendering Title Component');
  return (
    <div>
      useCallbacl Hook
      <p>
        The useCallback hook is used when you have a component in which the child is rerendering again and again without need. seCallback
        will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing
        callbacks to optimized child components that rely on reference equality to prevent unnecessary "function" renders.
      </p>
      <pre>
        {`const memoizedCallback = useCallback(() => {
          doSomething(a, b)
        }, [a, b]);`}
      </pre>
    </div>
  );
};
export default Title;
