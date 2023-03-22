import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import chainImage from "../../../public/images/chain_img.jpg";
import Image from "next/image";
import backArrowIcon from "../../../public/icons/iconmonstr-arrow-left-lined-240.png";
import avatarImg from "../../../public/images/headshot_tan_bg_back11 (1).png";

const exampleSyntaxCode = `  
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)`;
const exampleCodeOne = `      const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician.instrument)
// console will throw an error`;

const exampleCodeTwo = `const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician?.instrument)
// console will show undefined`;

const exampleCodeThree = `const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician?.contact?.phone)
// console will show undefined
console.log(musician?.contact?.address?.street)
// console will show "68 Abby Road"`;

const exampleCodeFour = `const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician?.contact?.phone?.call())
// console will throw an error
console.log(musician?.contact?.phone?.call?.())
// console will show undefined`;

const excFive = `const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician?.contact?.phone ?? "Like I would give you Paul
McCartney's number...")
// console would return the value of everything on the left of the ??
as long as its value isn't null or undefined. In our case it is
undefined, so the value to the right of the ?? is returned.`;

export default function optionalChainingBlogPost() {
  return (
    <div className=" column ">
      <div id="blogStyle" className="blogsPage maxWidthEightHun">
        <Image
          className="blogImageStyle marginBottomRemove blogsPage "
          id="blogImg"
          src={chainImage}
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
                <p>Posted: Feb. 2023</p>
              </div>
            </div>
          </div>{" "}
        </div>

        <section className="addXPadding column removeCenter maxWidthEightHun">
          <h1 className=" ">Optional Chaining Operator in Javascript</h1>
          <p>
            <strong>What: &nbsp;</strong>An operator that can reduce potential
            errors.
          </p>
          <p>
            <strong>When: &nbsp;</strong>Accessing object values/properties that
            may or may not be defined.
          </p>
          <p>
            <strong>Where: &nbsp;</strong>It's better to return undefined
            instead of throwing an error.
          </p>
          <p>
            <strong>Why: &nbsp;</strong>To keep apps from crashing and provide
            cleaner code.
          </p>
          <p>
            <strong>How: &nbsp;</strong>Add a question mark with a period in
            between nested object property names.
          </p>
          <p>
            Optional Chaining was introduced in ES2020, and Is used like the{" "}
            <span className="tanBackground blackColor smallFontSize ">
              <strong>&nbsp;.&nbsp;</strong>
            </span>
            &nbsp; operator, but when a value is null or undefined it returns
            undefined rather than throwing an error. It’s a defensive way of
            coding to reduce potential errors. Best used when unsure of the
            potential values/properties of a nested object (ex: calling to an
            api).
          </p>
          <h2>Syntax</h2> <br></br>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>
        <section className="addXPadding column ">
          <p>
            Translation: If obj.val exists return the value of prop within said
            val.
          </p>
          <h2>Examples</h2>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeOne}
        </SyntaxHighlighter>
        <section className="addXPadding column ">
          <p className="whiteColor addYPadding">
            Same instance but with the optional chain{" "}
            <span className="tanBackground blackColor smallFontSize ">
              <strong>&nbsp;?.&nbsp;</strong>
            </span>{" "}
            operator:
          </p>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>
        <section className="addXPadding column ">
          <p className="whiteColor addYPadding">
            Can be used multiple times, to access potential values, deep within
            an object:
          </p>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeThree}
        </SyntaxHighlighter>
        <section className="addXPadding column ">
          <p className="whiteColor addYPadding">
            It will also work with functions that may or may not be within the
            object:
          </p>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeFour}
        </SyntaxHighlighter>
        <section className="addXPadding column ">
          <p className="whiteColor addYPadding">
            The last example shows how to use optional chaining{" "}
            <span className="tanBackground blackColor smallFontSize ">
              <strong>&nbsp;?.&nbsp;</strong>
            </span>{" "}
            with the nullish coalescing<br></br>operator{" "}
            <span className="tanBackground blackColor smallFontSize ">
              <strong>&nbsp;??&nbsp;</strong>
            </span>{" "}
          </p>
        </section>
        <SyntaxHighlighter language="javascript">{excFive}</SyntaxHighlighter>
        <section className="addXPadding column">
          <h2 className="marginTop">Summary</h2>
          <p>
            Optional chaining can be a great tool to use whenever you are using
            dot notation to access nested values within objects. Returning
            undefined rather than throwing an error can help keep your
            application intact. Though, still new and not all browsers have
            adopted it,&nbsp;
            <Link
              className="tanColor"
              href="https://caniuse.com/?search=optional%20chaining"
              target="_blank"
            >
              (See more here.)
            </Link>{" "}
            It's still worth checking out.
          </p>
          <Link className="row marginBottom opacityHalf" href="/blogsPage">
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
