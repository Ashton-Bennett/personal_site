import Link from "next/link";
import Image from "next/image";
import ampGuitarImg from "../../public/images/amp_guitar_img.png";
("../../src/pages/projects/ampGuitarPage.js");
import { motion } from "framer-motion";
import LangIcons from "./LangIcons";

export default function ProjectCardAmpGuitar() {
  return (
    <motion.div
      className=" column card "
      whileHover={{
        color: "white",
        scale: 1.1,
        cursor: "pointer",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        title="go to next section"
        className="column"
        href="/projects/ampGuitarPage"
        target="_blank"
      >
        <Image
          className="cardImageStyle "
          priority
          src={ampGuitarImg}
          alt="Website screenshot for Amp Guitar"
        />
        <h2>Amp Guitar</h2>
        <LangIcons />
      </Link>
    </motion.div>
  );
}
