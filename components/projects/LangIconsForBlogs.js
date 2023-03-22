import Image from "next/image";
import reactIcon from "../../public/icons/react_icon.svg";
import mongoDbIcon from "../../public/icons/mongodb-icon.svg";
import nodeIcon from "../../public/icons/nodejs-icon.svg";
import reduxIcon from "../../public/icons/redux.svg";

export default function LangIconsForBlogs() {
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
          src={reduxIcon}
          alt="Redux icon"
        />
        <p id="fontSizeOne">Redux,&nbsp;</p>
      </div>{" "}
      <div className="column">
        {" "}
        <Image
          className="arrowIconStyle"
          priority
          src={nodeIcon}
          alt="Node.js icon"
        />
        <p id="fontSizeOne">Node,&nbsp;</p>
      </div>{" "}
      <div className="column lilPadding">
        {" "}
        <Image
          className="arrowIconStyle "
          priority
          src={mongoDbIcon}
          alt="MongoDB icon"
        />
        <p id="fontSizeOne">MongoDB</p>
      </div>{" "}
    </div>
  );
}
