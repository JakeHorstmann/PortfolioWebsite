import { React, useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const routes = [
    { name: "Projects", link: "/projects" },
    { name: "About Me", link: "/about" },
    { name: "Contact Me", link: "/contact" },
  ];

  return (
    <div className="navbar">
      <div className="logoNavbar">
        <p> use to take up 20% of screen</p>
      </div>
      <nav className="navbarLinks">
        <p> use to display all navbarLinks</p>
        {routes.map((route) => (
          <div className="navbarLink">
            {" "}
            <a href={route.link}>{route.name}</a>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
