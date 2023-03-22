import { useEffect, useState } from "react";
export default function NavMenu({ toggleNavMenu, displayNavMenu }) {
  const [show, setShow] = useState(displayNavMenu);

  useEffect(() => {
    if (displayNavMenu) {
      setShow(true);
    }
  }, [displayNavMenu]);

  const handleAnimation = () => {
    if (!displayNavMenu) {
      setShow(false);
    }
  };
  return (
    show && (
      <div
        onAnimationEnd={handleAnimation}
        className={`${
          displayNavMenu ? "navMenuStyleSlideIn" : "navMenuStyleSlideOut"
        }`}
      >
        <div className="navMenuStyle ">
          <ul className="navList">
            <li className="navItem">
              <a href="#header" onClick={toggleNavMenu}>
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#about" onClick={toggleNavMenu}>
                Projects
              </a>
            </li>
            <li className="navItem">
              <a href="#projects" onClick={toggleNavMenu}>
                Blogs
              </a>
            </li>
            <li className="navItem">
              <a href="#blogs" onClick={toggleNavMenu}>
                Story
              </a>
            </li>
            <li className="navItem">
              <a href="#contact" onClick={toggleNavMenu}>
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="/assets/ashton.bennett.resume.pdf" target="_blank">
                Résumé{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  );
}
