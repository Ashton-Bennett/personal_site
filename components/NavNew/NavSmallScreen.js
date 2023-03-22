// import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import Image from "next/image.js";
import iconImage from "../../public/icons/AshtonBennett_minimalistic_logo.ico-removebg-preview.png";
export default function NavSmallScreen() {
  const collapseItems = ["About", "Projects", "Blogs", "Story", "Contact"];

  return (
    <header>
      <Navbar
        shouldHideOnScroll
        variant="sticky"
        id="header"
        className="row header spaceBetween "
      >
        <Link href="/#about" className="row ">
          <Image
            priority
            src={iconImage}
            className="aLogo "
            alt="Ashton Bennett Logo"
          />

          <div
            id="smallTextHeader"
            className="smallFontSize movingToLeft increaseFontWeight"
          >
            shton Bennett
          </div>
        </Link>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          {/* <div className="navMenuStyle ">
            <ul className="navList">
              <li className="navItem">
                <Navbar.Link href="/#header">About</Navbar.Link>
              </li>
              <li className="navItem">
                {" "}
                <a href="/#projects">Projects</a>
              </li>
              <li className="navItem">
                {" "}
                <a href="/#blogs">Blogs</a>
              </li>
              <li className="navItem">
                {" "}
                <a href="/#story">Story</a>
              </li>
              <li className="navItem">
                {" "}
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div> */}
        </Navbar.Content>

        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <a href="#contact">Contact</a>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
        <Navbar.Toggle />
      </Navbar>
    </header>
  );
}
