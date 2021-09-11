import React, {useEffect, useState} from 'react';

const UseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);
  const [resourceType, setResourceType] = useState('');
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}/`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType, setResourceType]);
  const handlePosts = () => {
    setResourceType('posts');
  };
  const handleUsers = () => {
    setResourceType('users');
  };
  const handleComments = () => {
    setResourceType('comments');
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // this will run when the component mounts and anytime the stateful data changes
  useEffect(() => {
    console.log('Hey, Vishal here!');
  });

  // this will run, when the component is first initialized
  useEffect(() => {
    console.log('Hey, Vishal here!');
  }, []);

  // this will run only when count state changes
  useEffect(() => {
    fetch('Vishal').then(() => setCount(true));
  }, [count]);

  // this will run when the component is destroyed or before the component is removed from UI.
  useEffect(() => {
    console.log('Hey, Vishal here');
    return () => console.log('Goodbye Component');
  });

  return (
    <div>
      <h2>{resourceType}</h2>
      <h3>Window Width is : {windowWidth}</h3>
      <button onClick={handlePosts}>Posts</button>
      <button onClick={handleUsers}>Users</button>
      <button onClick={handleComments}>Comments</button>
      {items.slice(0, 10).map((item) => {
        return (
          <p key={item.id} style={{maxWidth: '100%'}}>
            {JSON.stringify(item)}
          </p>
        );
      })}
    </div>
  );
};

export default UseEffect;
