import React from 'react';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = '#E5E5E5';
  }, []);
  return <div>Home</div>;
}

export default Home;
