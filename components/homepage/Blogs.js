import Image from "next/image";
import geoPic from "../../public/images/geometrical.jpg";
import ScrollingArrow from "./ScrollingArrow";
import downArrow from "../../public/icons/south_FILL0_wght200_GRAD0_opsz48.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { textFade } from "./Projects";
import fadeoutanimations from "utils/fadeoutanimations";
import { forwardRef } from "react";

const Blogs = forwardRef(function Blogs(
  { fadeOutStyle, setDisplayHamburgerNav },
  ref
) {
  const { initialForAnimation, animateForAnimation } =
    fadeoutanimations(fadeOutStyle);

  return (
    <section ref={ref} id="blogs" className="column addHeight scrollSnap">
      <Image
        className="imageStyle"
        priority
        src={geoPic}
        alt="abstract geometrical shape"
      />
      <motion.aside
        className="column textSectionLargeScreen"
        initial={initialForAnimation}
        animate={animateForAnimation}
        whileInView={fadeOutStyle === true ? undefined : "end"}
        variants={textFade}
        transition={{ staggerChildren: 0.75 }}
      >
        <div className="row widthEighty spaceBetween">
          <motion.h1 variants={textFade}>Blogs</motion.h1>{" "}
        </div>
        <motion.p className="widthEighty" variants={textFade}>
          I&apos;m passionate about sharing my knowledge and experience with
          others. That&apos;s why I maintain a section on technical blogs, where
          I write about web development.
        </motion.p>
        <Link href="/blogsPage" onClick={() => setDisplayHamburgerNav(false)}>
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
        <ScrollingArrow link={"#story"} arrow={downArrow} />
      </motion.aside>
    </section>
  );
});
export default Blogs;
