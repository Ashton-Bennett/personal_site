import Image from "next/image";
import Link from "next/link";
import callbackImage from "../../../public/images/callbackImage.jpg";
import avatarImg from "../../../public/images/headshot_tan_bg_back11 (1).png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import backArrowIcon from "../../../public/icons/iconmonstr-arrow-left-lined-240.png";
import xIcon from "../../../public/icons/iconmonstr-x-mark-1-240.png";
import checkIcon from "../../../public/icons/iconmonstr-check-mark-15-240.png";
import { useEffect } from "react";
import { useRouter } from "next/router";

const exampleSyntaxCode = `
//Primitive comparisons:
const a = 1;
const b = 1;
const c = 2;
console.log(a === b); // true
console.log(b === c); // false

const d = 'hello';
const e = 'hello';
const f = 'bye';
console.log(d === e); // true
console.log(e === f); // false

// Objects are compared differently:
const obj1 = { animal: 'dog' };
const obj2 = { animal: 'dog' };
const obj3 = obj1

console.log(obj1 === obj1) // true
console.log(obj1 === obj2) // false
console.log(obj2 === obj3) // false
console.log(obj1 === obj3) // true`;

const exampleCodeOne = `const cachedFunction = useCallback(function, dependencyArray)`;

const exampleCodeTwo = `import {useState, useEffect, useCallback} from "react"

// Only showing the relevant parts of the app. 

const App = () => {
    const [result, setResult] = useState(0);
    const [num1] = useState(4);
    const [num2] = useState(5);

    const buildArray = () => [num1, num2];

    useEffect(()=> {
        setResult(buildArray());
    },[buildArray]);

    return...`;

const exampleCodeThree = `const buildArray = useCallback(() => [num1, num2], [num1,num2]);`;

const exampleCodeFour = `const username = useField();
const password = useField("password");
const email = useField("email");
const url = useField("url");
const birthdate = useField("date")`;

const excFive = `const clearForm = (event) => {
    event.preventDefault();
    usernameResetHandler();
    passwordResetHandler();
    emailResetHandler();
    urlResetHandler();
    birthDateHandler();
}`;

export default function UseFieldBlogPost() {
  const router = useRouter();

  useEffect(() => {
    router.push(router.pathname + "#blogStyle");
  }, []);

  return (
    <div className="column">
      <div id="blogStyle" className="blogsPage  maxWidthEightHun">
        <Image
          priority
          className="blogImageStyle marginBottomRemove"
          id="blogImg"
          src={callbackImage}
          alt="a person on the phone with sunset in background"
        ></Image>
        <div className="row">
          <Image
            priority
            className="avatarStyle"
            src={avatarImg}
            alt="picture of Ashton Bennett"
          ></Image>
          <div className="column">
            <div>
              Ashton Bennett
              <div>
                <p>Posted: April. 2023</p>
              </div>
            </div>
          </div>{" "}
        </div>

        <section className="addXPadding column removeCenter maxWidthEightHun">
          <h1 className=" ">UseCallback Hook</h1>
          <p>
            <strong>What:&nbsp;</strong> a React hook that lets you cache a
            function definition between re-renders until its dependency changes.
          </p>
          <p>
            <strong>When:&nbsp;</strong> passing a function from parent to child
            or adding a function to a dependency array.
          </p>
          <p>
            <strong>Where:&nbsp;</strong> inside of a top level, functional,
            React component. Cant be conditional.
          </p>
          <p>
            <strong>Why:&nbsp;</strong> to help prevent unnecessary re-renders
            or help with performance.
          </p>
          <p>
            <strong>How:&nbsp;</strong> wrap the hook around a function and add
            a dependency array at the end.
          </p>
          <section className="addXPadding column removeCenter">
            <div className="row widthEighty spaceBetween">
              <div>
                <h2>Syntax:</h2>
              </div>
            </div>
          </section>
          <SyntaxHighlighter language="javascript">
            {exampleCodeOne}
          </SyntaxHighlighter>
          <br></br>
          <div>
            <p>
              One of the keys to understanding the useCallback hook is{" "}
              <Link
                target="_blank"
                className="tanColor opacityHalf"
                href="https://dev.to/vicnovais/understanding-referential-equality-in-reacts-useeffect-2m7o"
              >
                referential equality
              </Link>
              . In a nutshell you need to know that two objects that have the
              same values and properties might not be equal. Javascript will
              determine if they are based on reference rather than values.
            </p>
            <br></br>
          </div>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>

        <section className="addXPadding column ">
          <div className=" addYPadding">
            <h2>Adding a function to a dependency array:</h2>
            <p className="whiteColor">
              In following example we would like to create an array based on the
              values of num 1 and 2. Then set that array to results.
              Unfortunately, we have created an infinite loop.
            </p>
          </div>
        </section>

        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>

        <section className="addXPadding  ">
          <h2 className=" addYPadding">Whats happing:</h2>
          <p>
            The buildArray function is initially created with a new reference,
            causing the useEffect to run. Every time the useEffect runs it will
            update the state causing another re-render. Which creates a new
            reference for buildArray causing the useEffect to run again and
            again.
          </p>
          <p>
            To fix the loop we can wrap our buildArray function in a useCallback
            hook and add a dependency array with the variables num1 and 2. This
            will cache the referential value of the buildArray function and
            prevent the useEffect from running more than once in our case.
          </p>
        </section>

        <SyntaxHighlighter language="javascript">
          {exampleCodeThree}
        </SyntaxHighlighter>

        <section className="addXPadding ">
          <br></br>
          <h2 className="">UseCallback VS UseMemo:</h2>
          <p>
            UseCallback is very similar to useMemo. The main difference is that
            useCallback returns the function that it wraps. UseMemo returns the
            value of the function that it wraps.
          </p>
        </section>

        <section className="addXPadding ">
          <h2 className="addYPadding marginTop">Summary</h2>
          <p>
            The useCallback can be a tricky thing to wrap your mind around if
            you are new to Javascript. I hope the simple example above will help
            anyone who is new to the hook. Here is a{" "}
            <Link
              className="tanColor opacityHalf"
              href="https://react.dev/reference/react/useCallback"
              target="_blank"
            >
              link
            </Link>{" "}
            to the react documents that have more use cases and detailed
            explanations.
          </p>{" "}
          <br></br>
          <p></p>
          <div className="column">
            <Link className="row addYMarginsBig opacityHalf" href="/blogsPage">
              <Image
                className="arrowIconStyle"
                src={backArrowIcon}
                alt="back arrow"
              ></Image>

              <h2 className="marginBottomRemove marginLeft">back</h2>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
