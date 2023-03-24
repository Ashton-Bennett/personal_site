import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeImage from "../../../public/images/coding-image.jpg";
import Image from "next/image";
import backArrowIcon from "../../../public/icons/iconmonstr-arrow-left-lined-240.png";
import avatarImg from "../../../public/images/headshot_tan_bg_back11 (1).png";
import { useEffect } from "react";
import { useRouter } from "next/router";

const exampleSyntaxCode = `const VariableName1 = createContext(defaultValue);

const VariableName2 = useContext(VariableName1);`;

const exampleCodeOne = `import { createContext, useState } from "react";
// inside the component 
export const UserContext = createContext(null);`;

const exampleCodeTwo = `Parent component {
  const [user, setUser] = useState("");
  return(
    <UserContext.Provider value={user}>
      <Component>
        <ChildComponent>
          <GrandChildComponent/>   
        </ChildComponent>
      </Component>
    </UserContext.Provider>
 );
}
`;

const exampleCodeThree = `import { UserContext } from "../src/app/page";
import { useContext } from "react";

const GrandChildComponent = () => {
  const user = useContext(UserContext);
  return (
      <p>
        	Current User:{user}
      </p>
  );
};
export default ComponentC;`;

export default function ReactUseContext() {
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
          src={codeImage}
          alt="code on a computer"
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
                <p>Posted: March, 17, 2023</p>
              </div>
            </div>
          </div>{" "}
        </div>

        <section className="addXPadding column removeCenter maxWidthEightHun">
          <h1>React&apos;s useContext hook</h1>
          <p>
            <strong>What: &nbsp;</strong>A tool used to help manage state.
          </p>
          <p>
            <strong>When: &nbsp;</strong>You want to share state among multiple
            components.
          </p>
          <p>
            <strong>Where: &nbsp;</strong>It&apos;s ok for said state to be
            re-rendered without having a large hit on performance.
          </p>
          <p>
            <strong>Why: &nbsp;</strong>To avoid prop drilling / sending props
            to components that don&apos;t use them directly.
          </p>
          <p>
            <strong>How: &nbsp;</strong>Wrap the parent component with a
            provider, then call the consumer for the current value.
          </p>
          <p>
            The useContext hook is a great tool for managing state. In some
            simple cases it can be used to replace state managing tools like
            Redux, and GraphQL. Before going that route, I would recommend
            considering how many different places your shared states will be
            re-rendered with every update. If it&apos;s a large amount it could
            slow your app&apos;s performance.
          </p>
          <h2>Syntax</h2> <br></br>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>
        <section className="addXPadding column ">
          <p>
            To get started import and create your context in the parent of the
            components that will use the shared value..
          </p>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeOne}
        </SyntaxHighlighter>
        <section className="addXPadding column ">
          <p className="whiteColor addYPadding">
            Then wrap your parent component with the provider and set the state
            of the variable that will be used. Make sure to give your provider
            component a value of the shared state.
          </p>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>
        <section className="addXPadding column ">
          <p className="whiteColor addYPadding">
            In this case we want to share the value of user only with the
            GrandChildComponent. If we needed the value in Component, and
            ChildComponent, as well, then it would be best to pass props, and
            not use Context. Now that we have the provider set up its time to
            import the value of user into our GrandChildComponent. By using the
            useContext() hook we are able to grab the value and set it to a
            local variable name. In our case it&apos;s set to user.
          </p>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeThree}
        </SyntaxHighlighter>
        <section className="addXPadding column">
          <h2 className="marginTop">Summary</h2>
          <p>
            It&apos;s important to understand that the outermost component (the
            provider) declares and sets the desired shared state. That state can
            be shared to any child/nested component of the provider directly,
            without passing it through multiple layers of the component tree.
            Some common use cases are logged in / current user information and
            toggling different styling themes.&nbsp;
          </p>
          <p>
            Check out the full code on&nbsp;
            <Link
              className="tanColor"
              href="https://github.com/Ashton-Bennett/test_apps/tree/context_practice"
              target="_blank"
            >
              Github
            </Link>{" "}
          </p>
          <Link className="row addYMarginsBig opacityHalf" href="/blogsPage">
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
