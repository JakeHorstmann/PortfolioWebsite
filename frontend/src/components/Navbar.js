import { React, useState } from "react";
import Logo from "./Logo";
import "../styles/Navbar.css";

function Navbar() {
  const routes = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About Me", link: "/about" },
    { name: "Contact Me", link: "/contact" },
  ];

  return (
    <div className="navbar">
      <div className="logoNavbar">
        <Logo logo_alt="My logo" />
      </div>
      <nav className="navbarLinks">
        {routes.map((route) => (
          <div key={route.link} className="navbarLink">
            {" "}
            <a href={route.link}>{route.name}</a>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
