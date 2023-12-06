import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/assets/images/user_circle.png";

const Header = () => {
  const style = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <header className="header">
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink to="/host" style={({ isActive }) => (isActive ? style : null)}>
          Host
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <Link to="login">
          <img src={imageUrl} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
};

export default Header;
