import "./navbar.css"
import { useState, useEffect } from "react";

function Index() {
  const [isActive, setActive] = useState(false);
  const [menuSelected, setmenuSelected] = useState(0);

  //Define as Global
  let hamburgerMenu: Element | null;
  let navMenu: Element | null;
  let navItem: NodeListOf<Element>;

  //Toggle Hamburger Menu to Open/Close Directly
  const toggleHamMenu = () => {
    hamburgerMenu = document.querySelector(".NavHamburger");
    navMenu = document.querySelector('.NavMenu');
    if (!isActive) {
      hamburgerMenu?.classList.add('active');
      navMenu?.classList.add('active');
      setActive(true);
    }
    else if (isActive) {
      hamburgerMenu?.classList.remove('active');
      navMenu?.classList.remove('active');
      setActive(false);
    }
  };

  //Set Hamburger To Close After Selected
  const handleHamMenuSelected = () => {
    navItem = document.querySelectorAll(".NavItem");
    navItem.forEach(n => n.addEventListener("click", () => {
      hamburgerMenu?.classList.remove('active');
      navMenu?.classList.remove('active');
      setActive(false);
    }
    ))
  };


  const handleMenuSelected = () => {
    navItem = document.querySelectorAll(".NavItem");
    navItem.forEach(n => n.classList.remove('active'))
    const index = menuSelected === 1 ? 0 : 
                  menuSelected === 2 ? 1 :
                  menuSelected === 3 ? 2 :
                  menuSelected === 4 ? 3 :
                  menuSelected === 5 ? 4 :
                  menuSelected === 6 ? 5 : -1
    if(index >= 0)              
      navItem.item(index).classList.add("active")         
  };

  useEffect(() => {
    handleHamMenuSelected()
    handleMenuSelected()
  }, [menuSelected]);

  return (
    <>
      <div className="NavContainer">
        <ul className="NavMenu">
          <li className="NavItem" onClick={() => setmenuSelected(1)}>
            <a href="#about">About</a>
          </li>
          <li className="NavItem" onClick={() => setmenuSelected(2)}>
            <a href="#education">Education</a>
          </li>
          <li className="NavItem" onClick={() => setmenuSelected(3)}>
            <a href="#skills">Skills</a>
          </li>
          <li className="NavItem" onClick={() => setmenuSelected(4)}>
            <a href="#experience">Experience</a>
          </li>
          <li className="NavItem" onClick={() => setmenuSelected(5)}>
            <a href="#projects">Projects</a>
          </li>
          <li className="NavItem" onClick={() => setmenuSelected(6)}>
            <a href="#honors">Honors</a>
          </li>
        </ul>
        <div className="NavHamburger" onClick={toggleHamMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </>
  );

}
export default Index;