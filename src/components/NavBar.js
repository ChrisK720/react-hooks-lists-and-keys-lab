import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    <a href="#home" key={links[1]}>home</a>
    <a href="#about" key={links[2]}>about</a>
    <a href="#projects" key={links[3]}>projects</a>
   

  </nav>
  
  
  
  );
}

export default NavBar;
