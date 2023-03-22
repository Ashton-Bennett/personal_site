import Link from "next/link";
import Image from "next/image";
import blogAppImage from "../../public/images/blog_app.png";
import { motion } from "framer-motion";
import LangIconsForBlogs from "./LangIconsForBlogs";
export default function ProjectCardBlogs() {
  return (
    <Link href="/projects/blogAppPage">
      <motion.div
        className="column card"
        whileHover={{
          color: "white",
          scale: 1.1,
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Image
          className="cardImageStyle "
          priority
          src={blogAppImage}
          alt="Website screenshot for blog app"
        />
        <h2>Blog App</h2>
        <LangIconsForBlogs />
      </motion.div>
    </Link>
  );
}
