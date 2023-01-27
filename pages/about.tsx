import { Lexend } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBitbucket,
  SiJirasoftware,
} from "react-icons/si";
import Footer from "@/components/Footer";
import { InterfaceTheme } from "@/interfaces/Interface";

const lexend = Lexend({ subsets: ["latin"], weight: "800" });

export default function About({ theme, setTheme }: InterfaceTheme) {
  return (
    <>
      <Head>
        <title>My Portfolio - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div
        className={`${
          theme
            ? "w-full h-full overflow-auto bg-gradient-to-b from-[#f6f6f7] to-white rounded-md"
            : "w-full h-full overflow-auto bg-gradient-to-b from-[#17181a] to-transparent rounded-md"
        }`}
      >
        <div className="relative w-full max-h-80 object-cover">
          {theme ? (
            <Image
              className="w-full max-h-52 object-cover opacity-30"
              src="/arrow.jpg"
              alt="Banner"
              width={1000}
              height={1000}
              priority
            />
          ) : (
            <Image
              className="w-full max-h-52 object-cover opacity-10 sepia rotate-180"
              src="/arrow.jpg"
              alt="Banner"
              width={1000}
              height={1000}
              priority
            />
          )}
          <Image
            className="absolute rounded-full z-20 border right-7 top-28"
            src="/porfile.jpg"
            alt="Banner"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="w-full p-7 flex flex-col gap-5">
          <h1
            className={lexend.className}
            style={{ fontSize: 50, fontWeight: 800, lineHeight: 1 }}
          >
            About me
          </h1>
          <p className="text-xl font-medium">
            Read a little about me, I know you'll like it!. ❤️
          </p>
          <div className="relative">
            <span className="absolute w-full h-0.5 bg-white/5"></span>
            <span className="absolute w-full h-0.5 bg-black/5"></span>
          </div>
          <p className="text-xl pt-3 font-sans">
            Hi! My name is Sebastian and I like to create things that live on
            the internet. My interest in web development started in 2019, when I
            decided to study a career that is in the tech industry. It turns out
            that creating websites is the most fun thing in the world and it
            taught me a lot about HTML and CSS. <br />
            <br />
            Currently, I'm developing my soft skills and my skills as a
            developer. Currently, I'm mainly focused on creating accessible and
            inclusive digital projects and experiences for other developers like
            me and to make myself known to companies that want to take advantage
            of my great knowledge and skills.
            <br />
            <br />
            I have also recently launched a web app similar to Spotify, building
            a web application with the RAPIDAPI API using React and Nextjs.
            These are some of the technologies I've been working with recently:
            <br />
          </p>
        </div>

        <div className="w-full p-5 flex-wrap gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl leading-none">TECHNOLOGIES</h1>
            <div className="relative">
              <span className="absolute w-full h-0.5 bg-white/5"></span>
              <span className="absolute w-full h-0.5 bg-black/5"></span>
            </div>
            <div className="flex flex-wrap gap-5 text-4xl">
							<FaReact className="cursor-pointer hover:text-blue-300" />
							<TbBrandNextjs className="cursor-pointer hover:text-slate-300" />
							<SiJavascript className="cursor-pointer hover:text-yellow-400" />
							<SiTypescript className="cursor-pointer hover:text-blue-500" />
							<FaNodeJs className="cursor-pointer hover:text-green-500" />
							<FaHtml5 className="cursor-pointer hover:text-orange-400" />
							<FaCss3Alt className="cursor-pointer hover:text-blue-300" />
							<SiTailwindcss className="cursor-pointer hover:text-blue-300" />
							<SiMongodb className="cursor-pointer hover:text-green-500" />
							<SiMysql className="cursor-pointer hover:text-blue-300" />
							<FaGitAlt className="cursor-pointer hover:text-orange-400" />
							<FaGithub className="cursor-pointer hover:text-slate-300" />
							<SiBitbucket className="cursor-pointer hover:text-blue-500" />
							<SiJirasoftware className="cursor-pointer hover:text-blue-300" />
						</div>
          </div>
        </div>
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}
