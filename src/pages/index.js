import Head from "next/head";
import About from "components/homepage/About";
import Header from "components/header/Header";
import Projects from "components/homepage/Projects";
import Blogs from "components/homepage/Blogs";
import Story from "components/homepage/Story";
import Contact from "components/homepage/Contact";
import LoadingPage from "components/LoadingPage";
import { useState, useEffect, useRef } from "react";
import NavOnLargeScreen from "components/header/NavOnLargeScreen";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [loading, setloading] = useState(true);
  const [sectionToFadeOut, setSectionToFadeOut] = useState("about");
  const [displayHamburgerNav, setDisplayHamburgerNav] = useState(true);
  const [currentSection, setCurrentSection] = useState("about");
  const [windowWidth, setWindowWidth] = useState(null);
  const fadeOut = useRef("");

  // observer hook to determine what section the user is on
  const [refAbout, inViewAbout, entryAbout] = useInView({
    threshold: 0.45,
  });
  const [refProjects, inViewProjects, entryProjects] = useInView({
    threshold: 0.45,
  });
  const [refBlogs, inViewBlogs, entryBlogs] = useInView({
    threshold: 0.45,
  });
  const [refStory, inViewStory, entryStory] = useInView({
    threshold: 0.45,
  });
  const [refContact, inViewContact, entryContact] = useInView({
    threshold: 0.45,
  });

  // used to determine the amount particles in background on #about
  useEffect(() => {
    const setDimension = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", setDimension);
    setWindowWidth(window.innerWidth);
    return function () {
      window.removeEventListener("resize", setDimension);
    };
  }, []);

  useEffect(() => {
    if (inViewAbout) {
      setCurrentSection(entryAbout.target.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewAbout]);

  useEffect(() => {
    if (inViewProjects) {
      setCurrentSection(entryProjects.target.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewProjects]);

  useEffect(() => {
    if (inViewBlogs) {
      setCurrentSection(entryBlogs.target.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewBlogs]);

  useEffect(() => {
    if (inViewStory) {
      setCurrentSection(entryStory.target.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewStory]);

  useEffect(() => {
    if (inViewContact) {
      setCurrentSection(entryContact.target.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewContact]);

  const loadTimer = () => {
    setTimeout(() => setloading(false), "1500");
  };

  useEffect(() => {
    fadeOut.current = sectionToFadeOut;
  }, [sectionToFadeOut]);

  return (
    <div id="appWrapper" className="column scrollWrap">
      {loading && <LoadingPage onLoad={loadTimer()} />}
      <div className="maxWidth">
        {!loading && (
          <>
            <Head>
              <title>Ashton Bennett&apos;s Portfolio</title>
              <meta
                name="description"
                content="Ashton Bennett's web developer portfolio site. React, HTML, CSS, Front End. Software development."
              />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta property="og:title" content="Ashton Bennett's portfolio" />
              <meta
                property="og:image"
                content="../../public/icons/AshtonBennett_minimalistic_logo.ico-removebg-preview.png"
              />
              <meta
                property="og:description"
                content="Creating pixel perfect UI"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header
              displayHamburgerNav={displayHamburgerNav}
              setDisplayHamburgerNav={setDisplayHamburgerNav}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              setSectionToFadeOut={setSectionToFadeOut}
            />
            <NavOnLargeScreen
              setSectionToFadeOut={setSectionToFadeOut}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />
            <About
              windowWidth={windowWidth}
              ref={refAbout}
              fadeOutStyle={fadeOut.current === "about" ? true : false}
            />
            <Projects
              ref={refProjects}
              fadeOutStyle={fadeOut.current === "projects" ? true : false}
              setDisplayHamburgerNav={setDisplayHamburgerNav}
            />
            <Blogs
              ref={refBlogs}
              fadeOutStyle={fadeOut.current === "blogs" ? true : false}
              setDisplayHamburgerNav={setDisplayHamburgerNav}
            />
            <Story
              ref={refStory}
              fadeOutStyle={fadeOut.current === "story" ? true : false}
            />
            <Contact
              ref={refContact}
              fadeOutStyle={fadeOut.current === "contact" ? true : false}
            />
          </>
        )}
      </div>
    </div>
  );
}
