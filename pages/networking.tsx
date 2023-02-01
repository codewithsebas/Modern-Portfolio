import { Lexend } from "@next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
import { InterfaceThemeLanguage } from "@/interfaces/Interface";

const lexend = Lexend({ subsets: ["latin"], weight: "800" });

export default function Networking({
  theme,
  setTheme,
  lang,
  setLang,
}: InterfaceThemeLanguage) {
  return (
    <>
      <Head>
        <title>{lang ? "Networking - Portfolio" : "Mi Red - Portafolio"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div
        className={`${
          theme
            ? "w-full h-full flex flex-col justify-between overflow-auto bg-gradient-to-b from-white to-transparent rounded-md backdrop-blur-3xl"
            : "w-full h-full flex flex-col justify-between overflow-auto bg-gradient-to-b from-[#17181a] to-transparent rounded-md backdrop-blur-3xl"
        }`}
      >
        <div className="w-full h-full p-7 flex items-center justify-center gap-5">
          <h1
            className={lexend.className}
            style={{ fontSize: 50, fontWeight: 800, lineHeight: 1 }}
          >
            {lang ? "Page under development 😅" : "Pagina en desarrollo 😅"}
          </h1>
        </div>

        <Footer
          theme={theme}
          setTheme={setTheme}
          lang={lang}
          setLang={setLang}
        />
      </div>
    </>
  );
}
