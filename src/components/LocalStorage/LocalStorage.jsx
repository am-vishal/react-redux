import React, {useState} from 'react';

const LocalStorage = () => {
  const [value, setValue] = useState(0);
  const ls = localStorage.setItem('key', JSON.stringify(value));
  const lsd = localStorage.getItem('key');
  console.log(lsd);

  const ss = sessionStorage.setItem('sesion', 'sStorage');
  const sssd = sessionStorage.getItem('sesion');
  console.log(sssd);

  const handleClick = () => {};

  return (
    <div>
      <input type="text" value={value} />
      <button onClick={handleClick}>CLickl</button>
      {lsd}
      <br />
      {sssd}
    </div>
  );
};

export default LocalStorage;
