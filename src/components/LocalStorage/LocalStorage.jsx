import React, { useState } from 'react';

const LocalStorage = () => {
  const [value, setValue] = useState(0);
  const setItemLS = localStorage.setItem('key', JSON.stringify(value));
  const getItemLS = localStorage.getItem('key');
  console.log(setItemLS, getItemLS);

  const setItemSS = sessionStorage.setItem('sesion', 'sStorage');
  const getItemSS = sessionStorage.getItem('sesion');
  console.log(setItemSS, getItemSS);

  const handleClick = () => {
    setValue(1)
  };

  return (
    <div>
      <input type="text" value={value} />
      <button onClick={handleClick}>CLickl</button>
      {getItemLS}
      <br />
      {getItemSS}
    </div>
  );
};

export default LocalStorage;
