import React from 'react';

const MemoComp = () => {
  return (
    <div>
      <h2>What is memoization?</h2>
      <p>
        In simple terms, memoization is a process that allows us to cache the values of recursive/expensive function calls so that the next
        time the function is called with the same argument(s), the cached value is returned rather than having to re-compute the function.
        This ensures that our applications run faster because we avoid the time it would usually take to re-execute the function by
        returning a value that ’s already stored in memory.
      </p>
      <h4>Note::- useCallback: Caches the provided function instance </h4>
      <h4>
        Note::- useMemo: Invokes the provided function {'&'} caches the result
        <b>Will only changes when props will change</b>
        Do shallow copy only check for reference
      </h4>
      <pre>
        {`const x={
          key:10
        };
        const y={
          key:10
        };
        console.log(x===y) //false
        `}
        doing shallow copy creating 2 diff new object in memory and comparing them this is what memo does -{'>'} memo(App)
        {`const x={
          key:10
        };
        y=x;
        console.log(x===y) //true
        `}
        pointing to same memory spot that's what useCall back does pointing to same function so it won't repeat
      </pre>
      <p>useCallback actually does not need callback fun() useMemo does</p>

      <pre>
        {`
          import React, {useState} from 'react';
          const ReactuseMemo = () => {
            function useMemo() {
              const [count, setCount] = useState(60);
              const expensiveCount = useMemo(() => {
                return count ** 2;
              }, [count]); // recompute when count changes.
            }
            return <div></div>;
          };
          export default ReactuseMemo;
          `}
      </pre>
    </div>
  );
};

export default MemoComp;
