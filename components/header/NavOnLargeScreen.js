import { useEffect } from "react";
export default function NavOnLargeScreen({
  setSectionToFadeOut,
  currentSection,
  setCurrentSection,
}) {
  const handleClick = (event) => {
    setSectionToFadeOut(currentSection);
    setCurrentSection(event.target.value);
    setTimeout(() => {
      location.assign(`/#${event.target.value}`);
    }, 250);
    return false;
  };

  useEffect(() => {
    if (!currentSection) return;
    document.querySelector(`input[value="${currentSection}"]`).checked = true;
  }, [currentSection]);

  return (
    <div className="showNav whiteColor">
      <div className="tracking-in-expand-fwd">
        <a href="#about" onClick={handleClick}>
          <input
            id="welcome"
            type="radio"
            name="sectionNav"
            value="about"
            defaultChecked
          />
          <label htmlFor="welcome">About</label>{" "}
        </a>
        <div className="vertical"></div>
      </div>
      <div className="tracking-in-expand-fwdProjects">
        <a href="#projects" onClick={handleClick}>
          <input
            id="projectNav"
            type="radio"
            name="sectionNav"
            value="projects"
          />
          <label htmlFor="projectNav">Projects</label>
        </a>
        <div className="vertical"></div>
      </div>
      <div className="tracking-in-expand-fwdBlogs">
        <a href="#blogs" onClick={handleClick}>
          <input id="blogsNav" type="radio" name="sectionNav" value="blogs" />
          <label htmlFor="blogsNav">Blogs</label>{" "}
        </a>
        <div className="vertical"></div>
      </div>
      <div className="tracking-in-expand-fwdStory">
        <a href="#story" onClick={handleClick}>
          <input id="storyNav" type="radio" name="sectionNav" value="story" />
          <label htmlFor="storyNav">Story</label>{" "}
        </a>
        <div className="vertical"></div>
      </div>
      <div className="tracking-in-expand-fwdContact">
        <a href="#contact" onClick={handleClick}>
          <input
            id="contactNav"
            type="radio"
            name="sectionNav"
            value="contact"
          />
          <label htmlFor="contactNav">Contact</label>{" "}
        </a>
      </div>
    </div>
  );
}
