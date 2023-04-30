import "@/styles/globals.css";
import { Work_Sans } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
const font = Work_Sans({ subsets: ["latin"] });
export default function App({ Component, pageProps, router }) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
