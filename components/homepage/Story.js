import Image from "next/image";
import chefPic from "../../public/images/chefPic.jpg";
import ScrollingArrow from "./ScrollingArrow";
import downArrow from "../../public/icons/south_FILL0_wght200_GRAD0_opsz48.png";
import { motion } from "framer-motion";
import { textFade } from "./Projects";
import fadeoutanimations from "utils/fadeoutanimations";
import { forwardRef } from "react";

const Story = forwardRef(function Story({ fadeOutStyle }, ref) {
  const { initialForAnimation, animateForAnimation } =
    fadeoutanimations(fadeOutStyle);
  return (
    <section ref={ref} id="story" className="column addHeight scrollSnap">
      <Image
        className="imageStyle"
        priority
        src={chefPic}
        alt="Chef preparing bread"
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
          <motion.h1 variants={textFade}>Story</motion.h1>{" "}
        </div>
        <motion.p className="widthEighty marginBottomOne" variants={textFade}>
          I have spent the majority of my career as a Chef. During that time, I
          truly enjoyed creating an environment for large teams to be
          successful. Constantly building and re-evaluating numerous different
          processes taught me countless valuable and transferable skills. The
          kitchen was an amazing place for me to express my creativity as well!
          Though I no longer work in food service, I still love cooking for
          family and friends.
        </motion.p>
        <div className="marginBottom">
          <ScrollingArrow link={"#contact"} arrow={downArrow} />
        </div>
      </motion.aside>
    </section>
  );
});

export default Story;
