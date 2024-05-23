import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="links">
        <Link to="/?cat=art">art</Link>
        <Link to="/?cat=science">science</Link>
        <Link to="/?cat=technology">technology</Link>
        <Link to="/?cat=cinema">cinema</Link>
        <Link to="/?cat=design">design</Link>
        <Link to="/?cat=food">food</Link>
      </div>
      <div className="action">
        <Link className="write-link" to="/write">write</Link>
        <p className="logout">Logout</p>
        <p className="user-name">j</p>
      </div>
    </header>
  );
};

export default Navbar;
