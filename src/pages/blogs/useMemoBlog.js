import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import computerImage from "../../../public/images/usememo_pic.jpg";
import Image from "next/image";
import backArrowIcon from "../../../public/icons/iconmonstr-arrow-left-lined-240.png";
import avatarImg from "../../../public/images/headshot_tan_bg_back11 (1).png";
import { useEffect } from "react";
import { useRouter } from "next/router";

const exampleSyntaxCode = `const cachedValue = useMemo(calculateValue, dependencies)`;

const exampleCodeOne = `function App() {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState("white");
  
    const squareRoot = slowFunction(counter);
  
    const increaseCounter = () => {
      setCounter(counter + 1);
    };
  
    const handleChangeColor = () => {
      setColor(color === "white" ? "aqua" : "white");
    };
    // more in the component but this is what matters most. `;

const exampleCodeTwo = `import { useMemo } from "react";
const UseMemoComponent = () => {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState("white");
  
    const squareRoot = useMemo(() => slowFunction(counter), [counter]);
     // the dependency array is the [counter] part.
    const increaseCounter = () => {
      setCounter(counter + 1);
    };
  
    const handleChangeColor = () => {
      setColor(color === "white" ? "aqua" : "white");
    };
  
    // more below but this is the import part`;

const exampleCodeThree = "";

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
          src={computerImage}
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
                <p>Posted: April, 10, 2023</p>
              </div>
            </div>
          </div>{" "}
        </div>
        <section className="addXPadding column removeCenter maxWidthEightHun">
          <h1>UseMemo Hook</h1>
          <p>
            <strong>What: &nbsp;</strong>A tool provided by React to help reduce
            unnecessary re-renders.
          </p>
          <p>
            <strong>When: &nbsp;</strong>A function takes along time to complete
            and is possibly slowing down other parts of the component.
          </p>
          <p>
            <strong>Where: &nbsp;</strong>Needs to be inside of a react
            component, wrapped around the function it is trying to improve.
          </p>
          <p>
            <strong>Why: &nbsp;</strong>To help improve performance and UI of an
            application.
          </p>
          <p>
            <strong>How: &nbsp;</strong> It works by caching the value(s) of the
            dependency array. If the given value or values change then it will
            rerun the slow/expensive function.
          </p>
          <p>
            This hook is something that you probably won&apos;t use often, but
            will be very valuable in certain cases. Keep in mind if used too
            much it can overfill cache and slow performance. This post is about
            using UseMemo to improve performance. Though, It can also be used to
            ensure referential equality, I won&apos;t be going over that here.
            To see more use cases click
            <Link
              title="go to react page with more details"
              className="tanColor"
              href="https://react.dev/reference/react/useMemo"
              target="_blank"
            >
              {" "}
              here
            </Link>
            .
          </p>
          <h2>Syntax</h2>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br> <br></br>
        <section className="addXPadding">
          <p>
            {" "}
            The example component below is NOT using the useMemo hook. It has a
            couple of state setting hooks and event handlers that are
            called/changed on the click of two different buttons. There is a
            slow function that will be called every time the user clicks the
            button to increase the counter. This slow function will make the
            handleChangeColor function also run slow.
          </p>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeOne}
        </SyntaxHighlighter>
        <section className="addXPadding column ">
          <p className="whiteColor addYPadding">
            The next example is the same component with a different name and is
            using the useMemo hook. The hook wraps around the function that
            needs the performance boost. Keep in mind once wrapped this function
            won&apos;t slow the handleChangeColor function. When the
            value/values of the dependency array change it will trigger the slow
            function to be called again and will be it&apos;s usual slow speed.
            The benefit here is useMemo will make that slow function
            independently slow.
          </p>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>
        <section className=" column">
          <h2 className="marginTop">Example App</h2>
          <iframe
            src="https://codesandbox.io/embed/usememo-hook-example-kju4s6?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: "100%",
              height: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="useMemo Hook Example"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </section>
        <section className="addXPadding column">
          <h2 className="marginTop">Summary</h2>
          <p>
            The useMemo hook is a tool all React developers will want to keep in
            their back pocket. It can help isolate functions that will take a
            long time to complete, and if that function isn&apos;t being used
            allot, why let it slow down the whole component? The example given
            is very basic, but when needed in a complex situation useMemo can be
            a real life saver.
          </p>
          <p>
            Check out the example app code on&nbsp;
            <Link
              className="tanColor"
              href="https://github.com/Ashton-Bennett/test_apps/tree/usememo"
              target="_blank"
            >
              Github
            </Link>{" "}
          </p>
          <Link
            title="go back to blog listing page"
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
