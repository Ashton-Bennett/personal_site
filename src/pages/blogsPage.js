import Header from "components/header/Header";
import OptionalChaining from "../../components/blogs/OptionalChaining";
import UseFieldHook from "components/blogs/UseFieldHook";
import Link from "next/link";
import Image from "next/image";
import backArrowIcon from "../../public/icons/iconmonstr-arrow-left-lined-240.png";
import BlogDisplayCard from "components/blogs/BlogDisplayCard";
import codeImage from "../../public/images/coding-image.jpg";
import siblingPic from "../../public/images/sibling_pic.jpg";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function BlogsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push(router.pathname + "#keepItReal");
  }, []);

  return (
    <div id="keepItReal" className="backgroundGradient">
      <div className="maxWidth">
        <Header />
        <div id="increaseWidth" className="column fadeIn">
          <h1 className="addYMarginsDbl">Blogs</h1>
          <div className="row flexWrap">
            <OptionalChaining />
            <UseFieldHook />

            <BlogDisplayCard
              header={"React’s UseContext()"}
              fileName={"ReactUseContext"}
              date={"March, 17, 2023"}
              readTime={"3m read time"}
              image={codeImage}
            />

            <BlogDisplayCard
              header={"CSS Selector ( ~ )"}
              fileName={"CSSGeneralSibling"}
              date={"March, 2nd, 2023"}
              readTime={"2m read time"}
              image={siblingPic}
            />
          </div>
          <Link className="row addYMarginsBig opacityHalf" href="/#about">
            <Image
              className="arrowIconStyle"
              src={backArrowIcon}
              alt="back arrow"
            ></Image>
            <h2 className="marginBottomRemove marginLeft">home</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
