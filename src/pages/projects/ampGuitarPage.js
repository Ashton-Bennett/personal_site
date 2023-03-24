import LangIcons from "components/projects/LangIcons";
import gitHubIcon from "../../../public/icons/github.png";
import Link from "next/link";
import Image from "next/image";
import ampGuitarImg from "../../../public/images/amp_guitar_img.png";
import backArrowIcon from "../../../public/icons/iconmonstr-arrow-left-lined-240.png";
import avatarImg from "../../../public/images/headshot_tan_bg_back11 (1).png";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AmpGuitarPage() {
  const router = useRouter();

  useEffect(() => {
    router.push(router.pathname + "#blogStyle");
  }, []);
  return (
    <>
      <div id="blogStyle" className="blogsPage column">
        <Link
          className="column"
          href="https://ashton-bennett.github.io/"
          target="_blank"
        >
          <Image
            className="blogImageStyle"
            priority
            src={ampGuitarImg}
            alt="Website screenshot for Amp Guitar"
          />
        </Link>
        <div className="row blogsPage spaceBetween maxWidthEightHun">
          <div className="row removeOnSmallScreen ">
            <Image
              className="avatarStyle"
              src={avatarImg}
              alt="picture of Ashton Bennett"
            ></Image>
            <div className="column blogsPage">
              <div className="blogsPage">
                Ashton Bennett
                <div>
                  <p>Created: Dec. 2022</p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div id="picCaption" className="">
            {" "}
            <h3 className="column">Built with</h3>
            <LangIcons />
          </div>
        </div>

        <section className="addXPadding column removeCenter maxWidthEightHun ">
          <h1 className=" ">Amp Guitar</h1>
          <p>
            Was created to combine my love for technology and playing guitar. It
            has been very well received by other guitarists and musicians that
            understand the complexities of music theory.
          </p>
          <p>
            A single page web application that provides tools to amplify
            guitarists&apos; skills. The first tool provided is a scale finder.
            The finder feature will help the user write melodies and solos for
            any particular section of a song. Created using music theory and
            functional programming, it will bring hundreds of musical scale
            diagrams to the user. Give it a try&nbsp;
            <Link
              href="https://ashton-bennett.github.io/"
              className="tanColor opacityHalf"
            >
              here
            </Link>
            .
          </p>
          <p>
            I always welcome constructive criticism and user feedback. To help
            streamline these ideas the app includes a contact form that once
            submitted will go to my personal email. Building upon user feedback
            is critical for any application&apos;s success.
          </p>
          <p>
            In time I will implement more features that will help guitarists
            understand and incorporate music theory into their creative process.
            To get more details click the Github link below.
          </p>
        </section>
        <div className="column">
          <Link
            className="column"
            href="https://github.com/Ashton-Bennett/ashton-bennett.github.io/tree/master"
            target="_blank"
          >
            <h3 className="opacityHalf">See the code</h3>
            <Image
              className="arrowIconStyle cardGithubIcon opacityHalf"
              priority
              src={gitHubIcon}
              alt="Github icon"
            />
          </Link>

          <Link className="row addYMarginsBig opacityHalf" href="/projectsPage">
            <Image
              className="arrowIconStyle"
              src={backArrowIcon}
              alt="back arrow"
            ></Image>
            <h2 className="marginBottomRemove marginLeft">back</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
