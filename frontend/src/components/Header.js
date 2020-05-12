import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <React.Fragment>
      <div className="headerTitle">
        <h1>Animal Shelter</h1>
      </div>
      <div className="headerLinks">
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/account">Account</Link>
        </h3>
      </div>
    </React.Fragment>
  )
}

export default Header;