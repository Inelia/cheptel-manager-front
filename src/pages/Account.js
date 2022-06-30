import React from 'react';
import { useEffect } from 'react';

function Account() {
  useEffect(() => {
    document.body.style.backgroundColor = 'rgb(250, 251, 252)';
  }, []);
  return <div>Account</div>;
}

export default Account;
