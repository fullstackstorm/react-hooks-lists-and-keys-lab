import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link, counter) => {
    const href = `#${link}`;
    counter = counter++;
    
    return <a key={counter} href={href}>{link}</a>
  })

  return <nav>{linkElements}</nav>;
}

export default NavBar;
