import { InterfaceThemeLanguage } from "@/interfaces/Interface";
import { Lexend } from "@next/font/google";
import { BsPaypal } from "react-icons/bs";
import { SiKofi } from "react-icons/si";

const font = Lexend({ subsets: ["latin"], weight: "300" });

const Footer = ({ theme }: InterfaceThemeLanguage) => {
  return (
    <footer
      className={`${
        theme
          ? "flex justify-center gap-2 rounded-b-md text-black py-3"
          : "flex justify-center gap-2 rounded-b-md text-white py-3"
      }`}
    >
      <div
        className={`${
          theme
            ? "flex items-center gap-3 text-black/20 duration-200"
            : "flex items-center gap-3 text-white/20 duration-200"
        }`}
      >
        <a
          aria-label="Sebastián Giraldo"
          href="https://www.linkedin.com/in/code-sebastian-giraldo/"
          rel="noreferrer"
          target="_blank"
          className={font.className}
        >
          Sebatian Giraldo
        </a>
        <a
          aria-label="Ko Fi"
          className={font.className}
          href="https://ko-fi.com/codewithsebas"
          rel="noreferrer"
          target="_blank"
        >
          <SiKofi />
        </a>
        <a
          aria-label="Paypal"
          rel="noreferrer"
          target="_blank"
          href="https://paypal.me/codewithsebas?country.x=CO&locale.x=es_XC"
        >
          <BsPaypal />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
