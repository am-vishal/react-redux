import React from 'react';

const LocalStorage = () => {
  const ls = localStorage.setItem('key', 'value');
  const lsd = localStorage.getItem('key');
  console.log(lsd);

  const ss = sessionStorage.setItem('sesion', 'sStorage');
  const sssd = sessionStorage.getItem('sesion');
  console.log(sssd);

  return (
    <div>
      {lsd}
      <br />
      {sssd}
    </div>
  );
};

export default LocalStorage;
