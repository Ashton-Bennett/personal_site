import Image from "next/image";
import Link from "next/link";
import hookImg from "../../public/images/grace-to-_vVqIVDzJ44-unsplash.jpg";
import hourGlassIcon from "../../public/icons/hour-glass.png";
import { motion } from "framer-motion";

export default function UseFieldHook() {
  return (
    <Link className="column" href="/blogs/useFieldBlogPost">
      <motion.div
        className=" column card"
        whileHover={{
          scale: 1.1,
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <h2 className="whiteColor fontWeightFour addYMarginsSmall">
          useField Custom Hook
        </h2>

        <Image
          className="cardImageStyle widthReducer"
          priority
          src={hookImg}
          alt="a hook"
        />

        <h3 className="marginBottomOne">
          <i>Febuary, 1st, 2023</i>
        </h3>
        <Image
          className="smallIconStyle"
          priority
          src={hourGlassIcon}
          alt="an hour glass"
        />
        <h4 className="whiteColor marginBottom">2m read time</h4>
      </motion.div>
    </Link>
  );
}
