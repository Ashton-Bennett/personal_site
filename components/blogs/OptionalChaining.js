import Image from "next/image";
import Link from "next/link";
import chainImg from "../../public/images/chain_img.jpg";
import hourGlassIcon from "../../public/icons/hour-glass.png";
import { motion } from "framer-motion";
export default function OptionalChaining() {
  return (
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
        Optional Chaining
      </h2>
      <Link className="column" href="/blogs/optionalChainingBlogPost">
        <Image
          className="cardImageStyle widthReducer"
          priority
          src={chainImg}
          alt="a chain"
        />

        <h3 className="marginBottomOne">
          <i>Febuary, 16th, 2023</i>
        </h3>
        <Image
          className="smallIconStyle"
          priority
          src={hourGlassIcon}
          alt="an hour glass"
        />
        <h4 className="whiteColor marginBottom">3m read time</h4>
      </Link>
    </motion.div>
  );
}
