import React from "react";

const NavBar = () => {
  return (
    <>
      <h1>Ballon Africa</h1>
      <nav>
        <ul>
          <li>How it works</li>
          <li>Our Products</li>
          <li>Features</li>
          <li>Reviews</li>
        </ul>
      </nav>
      <div className="loggin">
        <button>Login</button>
        <button id="buttoned">Sign Up</button>
      </div>
    </>
  );
};

export default NavBar;
