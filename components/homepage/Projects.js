import Image from "next/image";
import computerImage from "../../public/images/pexels-nikolaos-dimou-2473183.jpg";
import downArrow from "../../public/icons/south_FILL0_wght200_GRAD0_opsz48.png";
import ScrollingArrow from "./ScrollingArrow";
import Link from "next/link";
import { animate, motion } from "framer-motion";
import { forwardRef } from "react";
import fadeoutanimations from "utils/fadeoutanimations";

export const textFade = {
  start: { opacity: 0, y: 5 },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.75,
      delayChildren: 0.55,
      staggerChildren: 0.3,
    },
  },
};

const Projects = forwardRef(function Projects(
  { fadeOutStyle, setDisplayHamburgerNav },
  ref
) {
  const { initialForAnimation, animateForAnimation } =
    fadeoutanimations(fadeOutStyle);

  return (
    <section ref={ref} id="projects" className="column addHeight scrollSnap ">
      <Image
        className="imageStyle"
        priority
        src={computerImage}
        alt="black laptop with colors exploding out of it."
      />

      <motion.aside
        className="column textSectionLargeScreen"
        initial={initialForAnimation}
        animate={animateForAnimation}
        whileInView={fadeOutStyle === true ? undefined : "end"}
        variants={textFade}
        transition={{ staggerChildren: 0.75 }}
      >
        {" "}
        <div className="row widthEighty spaceBetween">
          <motion.h1 variants={textFade}>Projects</motion.h1>
        </div>
        <motion.p className="widthEighty" variants={textFade}>
          {" "}
          I take pride in delivering high-quality work that meets the needs of
          my clients and their users. Take a look at my portfolio to see some of
          my recent projects and get a sense of my style. I&apos;m always
          excited to collaborate on new and exciting projects, so if you&apos;re
          interested in working with me, don&apos;t hesitate to reach out.
        </motion.p>
        <Link
          href="/projectsPage"
          onClick={() => setDisplayHamburgerNav(false)}
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              color: "whitesmoke",
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="widthEighty"
            variants={textFade}
          >
            View
          </motion.button>
        </Link>
        <ScrollingArrow link={"#blogs"} arrow={downArrow} />
      </motion.aside>
    </section>
  );
});

export default Projects;
