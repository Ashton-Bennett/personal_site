import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import siblingPic from "../../../public/images/sibling_pic.jpg";
import Image from "next/image";
import backArrowIcon from "../../../public/icons/iconmonstr-arrow-left-lined-240.png";
import avatarImg from "../../../public/images/headshot_tan_bg_back11 (1).png";
import { useEffect } from "react";
import { useRouter } from "next/router";

const exampleSyntaxCode = `former_element ~ target_element { style properties }`;
const exampleCodeOne = `                    /*  CSS FILE */

h1 ~ p {
  color:blue;
}`;
const exampleCodeTwo = `<div>
<h1>CSS General Sibling Selector ~</h1>
<div>This element is not selected</div>
<p>This is a sibling</p>
<p>This is a sibling</p>
<h2>It is different than the + selector</h2>
<p>This is a sibling</p>
<p>This is a sibling</p>
</div>`;

export default function CSSGeneralSibling() {
  const router = useRouter();

  useEffect(() => {
    router.push(router.pathname + "#blogStyle");
  }, []);
  return (
    <div className=" column ">
      <div id="blogStyle" className="blogsPage maxWidthEightHun">
        <Image
          className="blogImageStyle marginBottomRemove blogsPage "
          id="blogImg"
          src={siblingPic}
          alt="a chain"
        ></Image>
        <div className="row blogsPage">
          <Image
            className="avatarStyle"
            src={avatarImg}
            alt="picture of Ashton Bennett"
          ></Image>
          <div className="column blogsPage">
            <div className="blogsPage">
              Ashton Bennett
              <div>
                <p>Posted: March, 3rd, 2023</p>
              </div>
            </div>
          </div>{" "}
        </div>

        <section className="addXPadding column removeCenter maxWidthEightHun">
          <h1>CSS General Sibling Operator (~)</h1>
          <p>
            <strong>What: &nbsp;</strong>A CSS combinator.
          </p>
          <p>
            <strong>When: &nbsp;</strong>You want to add styling to an element
            that proceeds a different element at some point.
          </p>
          <p>
            <strong>Where: &nbsp;</strong>In your CSS stylesheet.
          </p>
          <p>
            <strong>Why: &nbsp;</strong>To reduce unnecessary selectors, such as
            class and id.
          </p>
          <p>
            <strong>How: &nbsp;</strong>By adding ~ in between two selectors in
            a CSS stylesheet that also have the same parent.
          </p>
          <p>
            It is used alot like the adjacent sibling selector (+), but they
            can’t be used interchangeably. It will make your life easier knowing
            the difference.
          </p>
          <p>
            The adjacent <strong>sibling selector</strong> will work when the
            second selector
            <em>immediately</em> follows the first selector. While the{" "}
            <strong>general selector</strong>
            will style all the target selectors even if they{" "}
            <em>are not immediately</em>
            after. The general selector tends to be able to target more
            elements.
          </p>
          <h2>Syntax</h2> <br></br>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>
        <section className="addXPadding column ">
          <h2>Examples</h2>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeOne}
        </SyntaxHighlighter>
        <br></br>
        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>
        <section className="addXPadding column ">
          <p className="whiteColor addYPadding">
            Here all the p elements will be colored blue, even though they are
            not immediately following the h1 element and even if there is a h2
            thrown in the middle of the four p tags. If we changed the CSS file
            to include the + instead of the ~ none of the tags will be selected
            and nothing would be the colored blue.
          </p>
        </section>
        <section className="addXPadding column">
          <h2 className="marginTop">Summary</h2>
          <p>
            The general sibling combinator aka selector (Pronounced TILL-duh or
            TILL-dee.) is a great tool to add to your belt. It will help you
            reduce the amount of HTML while providing specific CSS styling.
            Though it is used similarly as the adjacent selector (+) the
            outcomes are different. I have created a code pen to play around
            with. You can find it&nbsp;
            <Link
              title="go to codepen website"
              className="tanColor"
              href="https://codepen.io/Ashtonbennett801/pen/JjadKjg?editors=1100"
              target="_blank"
            >
              here.
            </Link>{" "}
          </p>
          <Link
            title="go back to blog page"
            className="row addYMarginsBig opacityHalf"
            href="/blogsPage"
          >
            <Image
              className="arrowIconStyle"
              src={backArrowIcon}
              alt="back arrow"
            ></Image>
            <h2 className="marginBottomRemove marginLeft">back</h2>
          </Link>
        </section>
      </div>
    </div>
  );
}
