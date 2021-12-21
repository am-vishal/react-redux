import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

const Homepage = () => {
  return (
    <div>
      <h1>Hooks {'&'} Redux</h1>
      <ol>
        <li>
          <Link to="/autofill">Autofill</Link>
        </li>
        <li>
          <Link to="/popup">Popup</Link>
        </li>
        <li>
          <Link to="/localstorage">Local Storage</Link>
        </li>
        <li>
          <Link to="/state">useState Hook</Link>
        </li>
        <li>
          <Link to="/effect">useEffect Hook</Link>
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
          <Link to="/contextwithreducer">useContext And useReducer Hook</Link>
        </li>
        <li>
          <Link to="/contextwithreducer2">useContext And useReducer Hook - 2</Link>
        </li>
        <li>
          <Link to="/contextwithreducer">useContext And useReducer Hook</Link>
        </li>
        <li>
          <Link to="/redux">redux</Link>
        </li>
      </ol>
    </div>
  );
};

export default Homepage;
