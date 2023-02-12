import { Lexend } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";
import { InterfaceThemeLanguage } from "@/interfaces/Interface";

const lexend = Lexend({ subsets: ["latin"], weight: "800" });

export default function About({
  theme,
  setTheme,
  lang,
  setLang,
}: InterfaceThemeLanguage) {
  return (
    <>
      <Head>
        <title>{lang ? "About - Portfolio" : "Sobre mí - Portafolio"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div
        className={`${
          theme
            ? "w-full h-full flex flex-col justify-between overflow-auto bg-gradient-to-b from-white to-transparent rounded-md backdrop-blur-3xl"
            : "w-full h-full flex flex-col justify-between overflow-auto bg-transparent backdrop-blur-3xl"
        }`}
      >
        <div className="w-full py-5 px-3 flex-row lg:flex lg:justify-center lg:items-center">
          <div
            className={`${
              theme ? "flex flex-col gap-5 pr-5" : "flex flex-col gap-5 pr-5"
            }`}
          >
            <h1
              className={lexend.className}
              style={{ fontSize: 50, fontWeight: 800, lineHeight: 1 }}
            >
              {lang ? " About me" : "Sobre Mí"}
            </h1>
            <p className="text-xl font-medium">
              {lang
                ? "Read a little about me, I know you'll like it!. ❤️"
                : "Lee un poco sobre mí, ¡sé que te gustará!. ❤️"}
            </p>
            <p className="text-xl pt-3 font-sans">
              {lang
                ? "Hi! My name is Sebastian and I like to create things that live on the internet. I am 21 years old and my interest in web development started in 2019, when I decided to study a career that is in the tech industry. It turns out that creating websites is the most fun thing in the world and it taught me a lot about HTML, CSS AND JavaScript."
                : "Hola! Mi nombre es Sebastián y me gusta crear cosas que viven en internet. Tengo 21 años y mi interes en el desarrollo web comenzó en 2019, cuando decidí estudiar una carrera que está en la industria de la tecnología. Resulta que crear sitios web es lo más divertido del mundo y me enseñó mucho sobre HTML, CSS Y JavaScript."}
              <br />
              <br />
              {lang
                ? "Currently, I'm developing my soft skills and my skills as a developer. Currently, I'm mainly on creating accessible and inclusive digital projects and experiences for other developers like me and to make myself known to companies that want to take advantage of my great knowledge and skills."
                : "Actualmente, estoy desarrollando mis habilidades blandas y mis aptitudes como desarrollador. Estoy centrado principalmente en crear proyectos y experiencias digitales accesibles e inclusivas para otros desarrolladores como yo y darme a conocer a empresas que quieran aprovechar de mis grandes conocimientos y habilidades."}
              <br />
            </p>
          </div>

          <div className="w-full flex flex-col gap-5 justify-center items-center px-3 relative">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://app.daily.dev/codewithsebas"
            >
              <div
                className={`${
                  theme
                    ? "absolute w-20 h-20 rounded-full animate-bg bg-blue-500 blur-3xl"
                    : "absolute w-20 h-20 rounded-full animate-bg bg-blue-500/80 blur-3xl"
                }`}
              ></div>

              <div className="w-60 h-full lg:pt-0 pt-5">
                <Image
                  src="https://api.daily.dev/devcards/12a7032a5f23401eba6ba8ab08a9f2d7.png?r=okc"
                  width={600}
                  height={600}
                  alt="Sebastian Giraldo's Dev Card"
                />
              </div>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://app.daily.dev/codewithsebas"
              className="font-mono"
            >
              Daily.dev
            </a>
          </div>
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
