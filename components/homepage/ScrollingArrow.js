import Image from "next/image";
import { motion } from "framer-motion";

export default function ScrollingArrow({ link, arrow }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 5 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.25,
        x: { duration: 1 },
        default: { ease: "linear" },
      }}
    >
      <a href={link}>
        <Image
          id="arrowIcon"
          className="arrowIconStyle tanColor"
          priority
          src={arrow}
          alt={`${arrow}`}
        />
      </a>
    </motion.div>
  );
}
