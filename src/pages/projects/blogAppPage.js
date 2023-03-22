import gitHubIcon from "../../../public/icons/github.png";
import Link from "next/link";
import Image from "next/image";
import backArrowIcon from "../../../public/icons/iconmonstr-arrow-left-lined-240.png";
import avatarImg from "../../../public/images/headshot_tan_bg_back11 (1).png";
import blogAppImage from "../../../public/images/blog_app.png";
import LangIconsForBlogs from "../../../components/projects/LangIconsForBlogs";
export default function blogAppPage() {
  return (
    <>
      <div id="blogStyle" className="blogsPage column">
        <Link className="column" href="/undefined" target="_blank">
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
            MongoDB.
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
              href="https://ashton-bennett.github.io/"
              className="tanColor opacityHalf"
            >
              here
            </Link>
            .
          </p>
        </section>
        <div className="column">
          <Link
            className="column"
            href="https://github.com/Ashton-Bennett/fullstackopen/tree/part_7/src"
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

          <Link className="row marginBottom opacityHalf" href="/projectsPage">
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

{
  /* 
<h3>Built with</h3>
<LangIconsForBlogs />
<h3>Purpose</h3>
<p className="cardText">
  To allow users to share, comment, and like blogs with each other.
</p>
<h3>See the code</h3>
<Link
  href="https://github.com/Ashton-Bennett/ashton-bennett.github.io/tree/master"
  target="_blank"
>
  <Image
    className="arrowIconStyle cardGithubIcon"
    priority
    src={gitHubIcon}
    alt="Github icon"
  />
</Link> */
}
