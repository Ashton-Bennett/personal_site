import Image from "next/image";
import Link from "next/link";
import hookImg from "../../../public/images/grace-to-_vVqIVDzJ44-unsplash.jpg";
import avatarImg from "../../../public/images/headshot_tan_bg_back11 (1).png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import backArrowIcon from "../../../public/icons/iconmonstr-arrow-left-lined-240.png";
import xIcon from "../../../public/icons/iconmonstr-x-mark-1-240.png";
import checkIcon from "../../../public/icons/iconmonstr-check-mark-15-240.png";

const exampleSyntaxCode = `const App = () => {
    const [name,setName] = useState("")
    
    return(
        <div>
            <form>
                name:
                <input
                type="text"
                value={name}
                onChange={(event) =>setName(event.target.value)}
                />
            </form>
        </div>
    )
}
export default App;`;
const exampleCodeOne = `const App = () => {
    const name = usefield("text")
    
    return(
        <div>
            <form>
                name:
                <input
                {...name}
                />
            </form>
        </div>
    )
}
export default App;`;

const exampleCodeTwo = `import { useState } from "react";

const useField = (type) => {
    const [value, setValue] = useState("")

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onResetHandler = () => {
        setValue("")
    }

    return [{type, value, onChange}, onResetHandler]
};

export default useField;`;

const exampleCodeThree = `import {useField} from "../../hooks/useField
// in the component
useField("HTML input type as string")`;

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

export default function useFieldBlogPost() {
  return (
    <div className="column">
      <div id="blogStyle" className="blogsPage  maxWidthEightHun">
        <Image
          priority
          className="blogImageStyle marginBottomRemove"
          id="blogImg"
          src={hookImg}
          alt="a hook"
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
                <p>Posted: Feb. 2023</p>
              </div>
            </div>
          </div>{" "}
        </div>

        <section className="addXPadding column removeCenter maxWidthEightHun">
          <h1 className=" ">useField Custom Hook</h1>
          <p>
            <strong>What: &nbsp;</strong> A custom hook that works great on
            input fields.
          </p>
          <p>
            <strong>When: &nbsp;</strong> When you have a form with multiple
            inputs with each input being saved to state.
          </p>
          <p>
            <strong>Where: &nbsp;</strong>Can be imported from
            ../../hooks/usefield, all hook rules apply.
          </p>
          <p>
            <strong>Why: &nbsp;</strong>To reduce the amount of event handlers
            needed for input fields.
          </p>
          <p>
            <strong>How: &nbsp;</strong>Import, set a variable to hook, use
            variable in an input tag, call variable using .value or
            .onResetHandler().
          </p>
          <div className="row widthEighty spaceBetween">
            <div>
              <h2>
                <strong>This:</strong>
              </h2>
            </div>
            <Image
              priority
              className="arrowIconStyle"
              src={xIcon}
              alt="X"
            ></Image>
          </div>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>
        <section className="addXPadding column removeCenter">
          <div className="row widthEighty spaceBetween">
            <div>
              <h2>
                <strong>Becomes:</strong>
              </h2>
            </div>
            <Image
              priority
              className="arrowIconStyle"
              src={checkIcon}
              alt="check icon"
            ></Image>
          </div>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeOne}
        </SyntaxHighlighter>
        <section className="addXPadding column ">
          <div className=" addYPadding">
            <h2>Syntax of the hook itself:</h2>
            <p className="whiteColor">
              Needs to be passed a string and will return an array. The first
              index of that array is an object that holds the value. The second
              index is a function that will reset the value when called.
              operator:
            </p>
          </div>
        </section>

        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>

        <section className="addXPadding  ">
          <h2 className=" addYPadding">To use it:</h2>
        </section>

        <SyntaxHighlighter language="javascript">
          {exampleCodeThree}
        </SyntaxHighlighter>

        <section className="addXPadding ">
          <h2 className=" addYPadding">Examples:</h2>
        </section>

        <SyntaxHighlighter language="javascript">
          {exampleCodeFour}
        </SyntaxHighlighter>

        <section className="addXPadding column">
          <div className="whiteColor addYPadding">
            <p>
              Once the variable is set to the hook, that variable can be used in
              an input tag. The parameter is not required, but if used should
              always be a string. Passing a parameter is beneficial for
              validation and easier user entry.
            </p>
            <br></br>
            <p>
              By passing “password” we are able to get an input field that shows
              dots.{" "}
            </p>
            <br></br>
            <p>
              {" "}
              By passing “email” we are able to get an input field that requires
              “@”
            </p>
            <br></br>
            <div>
              <p>
                {" "}
                For more examples on different input values that can be passed
                into useField() go to:
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"
                  target="_blank"
                  className="tanColor"
                >
                  {" "}
                  link
                </Link>
              </p>
            </div>
          </div>
        </section>

        <SyntaxHighlighter language="javascript">{excFive}</SyntaxHighlighter>

        <section className="addXPadding ">
          <h2 className="marginTop">Form/input Example:</h2>
          <p>
            As the user enters text into the field it will update state. That
            state can be accessed at username.value.Any variables set to
            useField() will have the property: “.onResetHandler()” This property
            is useful to clear the form once the data has been sent and stored
            elsewhere.{" "}
          </p>{" "}
          <br></br>
          <p>
            I have shared a practice app, to see useField in action, that can be
            found on Github at:{" "}
            <Link
              className="tanColor"
              href="https://github.com/Ashton-Bennett/test_apps/tree/usefield"
              target="_blank"
            >
              link
            </Link>{" "}
          </p>
          <div className="column">
            <Link className="row marginBottom opacityHalf" href="/blogsPage">
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
