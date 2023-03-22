import Image from "next/image";
import reactIcon from "../../public/icons/react_icon.svg";
import javaScriptIcon from "../../public/icons/javascript-39395.png";
import cssIcon from "../../public/icons/css_icon.png";
import htmlIcon from "../../public/icons/html_logo.png";

export default function LangIcons() {
  return (
    <div className="row marginBottom">
      <div className="column">
        {" "}
        <Image
          className="arrowIconStyle"
          priority
          src={reactIcon}
          alt="React.js icon"
        />
        <p id="fontSizeOne">React,&nbsp;</p>
      </div>{" "}
      <div className="column">
        {" "}
        <Image
          className="langIconStyle"
          priority
          src={javaScriptIcon}
          alt="Javascript icon"
        />
        <p id="fontSizeOne">Javascript,&nbsp;</p>
      </div>{" "}
      <div className="column">
        {" "}
        <Image
          className="arrowIconStyle"
          priority
          src={cssIcon}
          alt="CSS icon"
        />
        <p id="fontSizeOne">CSS,&nbsp;</p>
      </div>{" "}
      <div className="column lilPadding">
        {" "}
        <Image
          className="arrowIconStyle "
          priority
          src={htmlIcon}
          alt="HTML icon"
        />
        <p id="fontSizeOne">HTML</p>
      </div>{" "}
    </div>
  );
}
