import Image from "next/image";
import Link from "next/link";
import spacePic from "../../public/images/space_pic.jpg";
import linkedInIcon from "../../public/icons/linkedin.png";
import twitterIcon from "../../public/icons/twitter.png";
import githubIcon from "../../public/icons/github.png";
import emailIcon from "../../public/icons/email.png";
import ScrollingArrow from "./ScrollingArrow";
import upArrow from "../../public/icons/north_FILL0_wght200_GRAD0_opsz48.png";
import { motion } from "framer-motion";
import { textFade } from "./Projects";
import fadeoutanimations from "utils/fadeoutanimations";
import { forwardRef } from "react";

const Contact = forwardRef(function Contact({ fadeOutStyle }, ref) {
  const { initialForAnimation, animateForAnimation } =
    fadeoutanimations(fadeOutStyle);
  return (
    <section ref={ref} id="contact" className="column addHeight scrollSnap">
      <Image
        className="imageStyle"
        priority
        src={spacePic}
        alt="picture of outer space"
      />{" "}
      <motion.aside
        className="column textSectionLargeScreen"
        initial={initialForAnimation}
        animate={animateForAnimation}
        whileInView={fadeOutStyle === true ? undefined : "end"}
        variants={textFade}
        transition={{ staggerChildren: 0.75 }}
      >
        <div className="row widthEighty spaceBetween">
          <motion.h1 variants={textFade}>Contact</motion.h1>{" "}
        </div>
        <motion.p className="widthEighty" variants={textFade}>
          <i>
            &apos;The star that shines the brightest is not the one that shines
            alone, but the one that shines among others.&apos; -Unknown
          </i>
        </motion.p>
        <div className="paddingBtmLg">
          <motion.ul
            className="row socialLinks spaceBetween widthEighty addYMargins"
            variants={textFade}
          >
            <Link
              href={"https://www.linkedin.com/in/ashton-bennett-76876a207/"}
              target="_blank"
            >
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                variants={textFade}
              >
                {" "}
                <Image
                  id="linkedInIcon"
                  className="socialLinkIcons"
                  priority
                  src={linkedInIcon}
                  alt="LinkedIn icon"
                  height={50}
                  width={50}
                />
              </motion.li>
            </Link>
            <Link href={"https://twitter.com/AshtonDEngineer"} target="_blank">
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                variants={textFade}
              >
                {" "}
                <Image
                  priority
                  id="twitterIcon"
                  className="socialLinkIcons"
                  src={twitterIcon}
                  alt="Twitter icon"
                  height={50}
                  width={50}
                />
              </motion.li>
            </Link>
            <Link href={"https://github.com/Ashton-Bennett"} target="_blank">
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                variants={textFade}
              >
                {" "}
                <Image
                  priority
                  id="githubIcon"
                  className="socialLinkIcons"
                  src={githubIcon}
                  alt="Github icon"
                  height={50}
                  width={50}
                />
              </motion.li>
            </Link>
            <Link href={"mailto:ashtonbennett801@gmail.com"} target="_blank">
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                variants={textFade}
              >
                <Image
                  priority
                  id="emailIcon"
                  className="socialLinkIcons"
                  src={emailIcon}
                  alt="email icon"
                  height={50}
                  width={50}
                />
              </motion.li>
            </Link>
            <motion.li
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              variants={textFade}
            >
              <ScrollingArrow link={"#about"} arrow={upArrow} />
            </motion.li>
          </motion.ul>
        </div>
      </motion.aside>
    </section>
  );
});

export default Contact;
