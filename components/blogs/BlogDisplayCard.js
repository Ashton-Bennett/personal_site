import Image from "next/image";
import Link from "next/link";
import hourGlassIcon from "../../public/icons/hour-glass.png";
import { motion } from "framer-motion";

// Need to import the image that is passed as a prop one layer up.

export default function BlogDisplayCard({
  header,
  fileName,
  date,
  readTime,
  image,
}) {
  return (
    <Link className="column" href={`/blogs/${fileName}`}>
      <motion.div
        className=" column card"
        whileHover={{
          scale: 1.1,
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <h2 className="whiteColor fontWeightFour addYMarginsSmall">{header}</h2>

        <Image
          className="cardImageStyle widthReducer"
          priority
          src={image}
          alt={header}
        />

        <h3 className="marginBottomOne">
          <i>{date}</i>
        </h3>
        <Image
          className="smallIconStyle"
          priority
          src={hourGlassIcon}
          alt="an hour glass"
        />
        <h4 className="whiteColor marginBottom">{readTime}</h4>
      </motion.div>
    </Link>
  );
}
