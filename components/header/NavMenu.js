import { AnimatePresence, motion } from "framer-motion";

export default function NavMenu({ toggleNavMenu, displayNavMenu }) {
  return (
    <AnimatePresence>
      {displayNavMenu && (
        <motion.div
          className="navMenuStyle"
          initial={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
        >
          <ul className="navList">
            <li className="navItem">
              <a href="#header" onClick={toggleNavMenu}>
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#about" onClick={toggleNavMenu}>
                Projects
              </a>
            </li>
            <li className="navItem">
              <a href="#projects" onClick={toggleNavMenu}>
                Blogs
              </a>
            </li>
            <li className="navItem">
              <a href="#blogs" onClick={toggleNavMenu}>
                Story
              </a>
            </li>
            <li className="navItem">
              <a href="#contact" onClick={toggleNavMenu}>
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="/assets/ashton.bennett.resume.pdf" target="_blank">
                Résumé{" "}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
