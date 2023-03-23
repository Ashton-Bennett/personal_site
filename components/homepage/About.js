import Image from "next/image";
import headshot from "../../public/images/no_bk.png";
import ScrollingArrow from "./ScrollingArrow";
import downArrow from "../../public/icons/south_FILL0_wght200_GRAD0_opsz48.png";
import ParticleBackground from "../ParticleBackground";
import { forwardRef } from "react";

const About = forwardRef(function About(props, ref) {
  return (
    <main ref={ref} id="about" className="column addHeight scrollSnap">
      <aside
        id="mainSectionAside"
        className="column removeCenter textSectionLargeScreen"
      >
        <h1 className="tanColor marginBottomSmall scale-in-bottom marginTopNone">
          Welcome!
        </h1>
        <p className="widthEighty fade-in-fwd">
          My name is Ashton Bennett. I&apos;m a front-end developer who loves
          creating user-friendly and pixel perfect{" "}
          <span className="tanColor textShadow">web</span> applications.
          Don&apos;t believe me? Take a look around.
        </p>
        <div className=" row widthEighty spaceBetween fade-in-fwd">
          <p></p>
          <ScrollingArrow link={"#projects"} arrow={downArrow} />
        </div>
      </aside>
      <div className="headshotWrapper relative fade-in-fwd-moreDelay">
        <ParticleBackground windowWidth={props.windowWidth} />
        <Image
          id="headshot"
          className="imageStyle widthEighty absolute "
          priority
          src={headshot}
          blurDataURL={headshot}
          alt="Ashton Bennett headshot"
        />
      </div>
    </main>
  );
});

export default About;
