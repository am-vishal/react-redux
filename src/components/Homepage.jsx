import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Hooks {'&'} Redux</h1>
      <ul>
        <li>
          <Link to="/autofill">Autofill</Link>
        </li>
        <li>
          <Link to="/popup">Popup</Link>
        </li>
        <li>
          <Link to="/redux">redux</Link>
        </li>
        <li>
          <Link to="/callback">useCallback Hook</Link>
        </li>
        <li>
          <Link to="/context">useContext Hook</Link>
        </li>
        <li>
          <Link to="/reducer">useReducer Hook</Link>
        </li>
        <li>
          <Link to="/localstorage">Local Storage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
