import "@/styles/globals.css";
import { Work_Sans } from "@next/font/google";

const font = Work_Sans({ subsets: ["latin"] });
export default function App({ Component, pageProps, router }) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  );
}
