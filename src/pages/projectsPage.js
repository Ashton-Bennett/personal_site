import Header from "components/header/Header";
import ProjectCardBlogs from "../../components/projects/ProjectCardBlogs";
import ProjectCardAmpGuitar from "components/projects/ProjectCardAmpGuitar";
import backArrowIcon from "../../public/icons/iconmonstr-arrow-left-lined-240.png";
import Link from "next/link";
import Image from "next/image";
export default function ProjectsPage() {
  return (
    <div id="keepItReal" className="backgroundGradient">
      <div className="maxWidth">
        <Header />
        <div id="increaseWidth" className="column fadeIn ">
          <h1 className="addYMarginsDbl">Projects</h1>
          <ProjectCardAmpGuitar />
          <ProjectCardBlogs />
          <Link className="row marginBottom opacityHalf" href="/">
            <Image
              className="arrowIconStyle"
              src={backArrowIcon}
              alt="back arrow"
            ></Image>
            <h2 className="marginBottomRemove marginLeft">home</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
