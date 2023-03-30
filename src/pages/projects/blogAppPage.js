import gitHubIcon from "../../../public/icons/github.png";
import Link from "next/link";
import Image from "next/image";
import backArrowIcon from "../../../public/icons/iconmonstr-arrow-left-lined-240.png";
import avatarImg from "../../../public/images/headshot_tan_bg_back11 (1).png";
import blogAppImage from "../../../public/images/blog_app.png";
import LangIconsForBlogs from "../../../components/projects/LangIconsForBlogs";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function BlogAppPage() {
  const router = useRouter();

  useEffect(() => {
    router.push(router.pathname + "#blogStyle");
  }, []);
  return (
    <>
      <div id="blogStyle" className="blogsPage column">
        <Link
          className="column"
          href="https://blog-app-by-ashton.fly.dev/"
          target="_blank"
        >
          <Image
            className="blogImageStyle"
            priority
            src={blogAppImage}
            alt="Website screenshot for Blog App"
          />
        </Link>
        <div className="row blogsPage spaceBetween maxWidthEightHun">
          <div className="row removeOnSmallScreen">
            <Image
              className="avatarStyle"
              src={avatarImg}
              alt="picture of Ashton Bennett"
            ></Image>
            <div className="column blogsPage">
              <div className="blogsPage">
                Ashton Bennett
                <div>
                  <p>Created: Nov. 2022</p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div id="picCaption" className="">
            {" "}
            <h3 className="column">Built with</h3>
            <LangIconsForBlogs />
          </div>
        </div>

        <section className="addXPadding column removeCenter maxWidthEightHun">
          <h1 className=" ">Blog App</h1>
          <p>
            I created this app to gain a better understanding of full stack
            development and practice using Express, Node, React, Redux, and
            MongoDB.{" "}
            <Link
              href="https://blog-app-by-ashton.fly.dev/"
              className="tanColor opacityHalf"
              target="_blank"
            >
              Try it out here.
            </Link>
          </p>
          <p>
            Blog app will require the user to login. Once validated the user
            will be able to complete all CRUD operations. They can complete a
            toggable form that will upload their favorite blog for other users
            to see, comment, and like. There is also functionality that will
            allow the user to delete a blog post, but only if they are the user
            that created that particular blog. If you would like to see the code
            click the link,&nbsp;
            <Link
              href="https://github.com/Ashton-Bennett/blog_app"
              className="tanColor opacityHalf"
              target="_blank"
            >
              here
            </Link>
            .
          </p>
        </section>
        <div className="column">
          <Link
            className="column"
            href="https://github.com/Ashton-Bennett/blog_app"
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
