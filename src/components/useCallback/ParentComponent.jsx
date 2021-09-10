import React, {useState, useCallback} from 'react';
import Button from './Button';
import Count from './Count';
import {Title} from './Title';

const ParentComponent = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge((age) => age + 1);
  }, []);

  const incrementSalary = useCallback(() => {
    setSalary((salary) => salary + (salary * 30) / 100);
  }, []);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
