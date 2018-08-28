import React from 'react';

const githubURL = "https://github.com/pensivearchitect";
const NavBar = () => (
  <nav className="navbar is-link" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <p className="has-text-weight-bold">joshuabell.io</p>
      </div>
      <a className="navbar-item" href={githubURL}><p>Github</p></a>
    </div>
  </nav>
);

export default NavBar;
