import Image from "next/image";
import headshot from "../../public/images/no_bk (1).png";
import ScrollingArrow from "./ScrollingArrow";
import downArrow from "../../public/icons/south_FILL0_wght200_GRAD0_opsz48.png";
import ParticleBackground from "../ParticleBackground";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { textFade } from "./Projects";
import Link from "next/link";

const About = forwardRef(function About(props, ref) {
  return (
    <main ref={ref} id="about" className="column addHeight scrollSnap">
      <title>Ashton Bennett&#39;s portfolio page</title>
      <div
        id="mainSectionAside"
        className="column removeCenter textSectionLargeScreen"
      >
        <h1 className="tanColor marginBottomSmall scale-in-bottom marginTopNone">
          Welcome!
        </h1>
        <p className="widthEighty fade-in-fwd">
          My name is Ashton Bennett. I&apos;m a front-end developer who loves
          creating user-friendly{" "}
          <span className="tanColor textShadow">web</span> applications.
        </p>
        <div className="row widthEighty fade-in-fwd ">
          <Link href="#projects" title="go to projects section">
            <motion.button
              whileHover={{
                scale: 1.1,
                color: "whitesmoke",
                cursor: "pointer",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="widthEighty marginLeftNone"
              variants={textFade}
            >
              My work
            </motion.button>
          </Link>
          {/* <ScrollingArrow link={"#projects"} arrow={downArrow} /> */}
        </div>
      </div>
      <div className="headshotWrapper relative">
        <ParticleBackground windowWidth={props.windowWidth} />
        <Image
          id="headshot"
          className="widthEighty absolute "
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
