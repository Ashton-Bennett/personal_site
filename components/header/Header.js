import Image from "next/image";
import iconImage from "../../public/icons/AshtonBennett_minimalistic_logo.ico-removebg-preview.png";
import burgerBoy from "../../public/icons/burgerboy.png";
import { useState } from "react";
import cancelIcon from "../../public/icons/cancel.png";
import NavMenu from "./NavMenu";
import Link from "next/link";

export default function Header({
  displayHamburgerNav,
  setDisplayHamburgerNav,
  currentSection,
  setCurrentSection,
  setSectionToFadeOut,
}) {
  const [displayNavMenu, setdisplayNavMenu] = useState(false);

  const handleLogoClick = async () => {
    setDisplayHamburgerNav(true);
    await setSectionToFadeOut(currentSection);
    const currentCheckedRadio = document.querySelector(
      `input[value="${currentSection}"]`
    );
    currentCheckedRadio.removeAttribute("checked");
    location.assign("/#about");
    document.querySelector(`input[value="about"]`).checked = true;
    setCurrentSection("about");
  };

  const toggleNavMenu = () => {
    if (displayNavMenu === true) {
      return setdisplayNavMenu(false);
    }
    setdisplayNavMenu(true);
  };

  return (
    <>
      <header id="header" className="row header spaceBetween ">
        {!displayNavMenu && (
          <>
            <Link
              href="/#about"
              className="row"
              onClick={() => handleLogoClick()}
              title="go to about section"
            >
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
            {displayHamburgerNav && (
              <Image
                id="hamburgerIcon"
                className="icon marginRight"
                onClick={toggleNavMenu}
                priority
                src={burgerBoy}
                alt={"hamburger icon"}
              />
            )}
            <a
              className="movingToLeft "
              id="resumeLink"
              href="/assets/ashton.bennett.resume.pdf"
              target="_blank"
              title="go to resume"
            >
              Résumé
            </a>
          </>
        )}
        {displayNavMenu && (
          <Image
            className="icon right"
            onClick={toggleNavMenu}
            priority
            src={cancelIcon}
            alt={"cancel icon"}
          />
        )}
      </header>{" "}
      <NavMenu toggleNavMenu={toggleNavMenu} displayNavMenu={displayNavMenu} />
    </>
  );
}
