import React from 'react';
import Header from './Header';

function Account() {


  return (
    <div className="main">
      <p>Please sign in</p>
      <input
        placeholder="Email" />
      <input
        placeholder="Password" />
      <button>Login</button>
      <a href="/account">New? Click to register</a>
    </div>
  );
}

export default Account;