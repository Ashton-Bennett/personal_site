import Image from "next/image";
import "animate.css";
import alogo from "../public/icons/AshtonBennett_minimalistic_logo.ico-removebg-preview.png";

export default function LoadingPage() {
  return (
    <div className="column centerRow addHeight backgroundGradient fullWidth">
      <Image
        priority
        src={alogo}
        className="   aLogo animate__animated animate__flip animate__infinite infinite animate__slow	2s "
        alt="Ashton Bennett Logo"
      />
    </div>
  );
}
