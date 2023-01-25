import Head from "next/head";
import Image from "next/image";
import React from "react";

type Props = {
	theme: boolean
};

const Projects = ({theme}: Props) => {
	return (
		<>
			<Head>
				<title>My Portfolio - About</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<div className={`${
				theme
					? "w-full h-full overflow-auto bg-gradient-to-b from-white to-[#f1f7fd] rounded-md duration-200"
					: "w-full h-full overflow-auto bg-gradient-to-b from-[#17181a] to-transparent rounded-md duration-200"
			}`}>
				<div className="relative w-full max-h-80 object-cover">
					<Image
						className="w-full max-h-80 object-cover"
						src="/banner.png"
						alt="Banner"
						width={1000}
						height={1000}
						priority
						style={{ borderRadius: 5 }}
					/>
					<Image
						className="absolute rounded-full z-20 border right-5 top-52"
						src="/porfile.jpg"
						alt="Banner"
						width={200}
						height={200}
						priority
						style={{ borderRadius: 100 }}
					/>
				</div>
				<div className="w-full p-5 pt-6 flex flex-col gap-5">
					<h1 className="text-5xl font-extrabold">About me!</h1>
					<p className="text-xl font-medium">Welcome to my Dashboard Modern Portfolio!. ❤️</p>
					<div className="relative">
						<span className="absolute w-full h-0.5 bg-white/5"></span>
						<span className="absolute w-full h-0.5 bg-black/5"></span>
					</div>
					<p className="text-xl pt-3 font-light">
						My professional experience has been developed mainly in the area of
						information technology. <br /> I have worked as a software developer
						and I have also had the opportunity to lead projects and work teams.
						<br />
						<br />
						During my career I have acquired extensive experience in the
						development of web and mobile applications, as well as in the
						implementation of database solutions and systems integration. <br />
						I am also knowledgeable in agile software development methodologies
						and application development lifecycle management. In addition to my
						technical expertise, I have also developed skills in the area of
						communication and teamwork. <br />
						
						<br /> I am always willing to learn and adapt to new technologies
						and methodologies, and I am sure that I can bring a lot of value to
						any company where I have the opportunity to work. FullStack
						developer, with experience in web application development using
						tools such as React JS, Next JS, TypeScript, Tailwind, CSS, HTML and
						CSS, JavaScript, PHP, Node JS, MongoDB, MySQL. <br />
						<br />
						Also with experience designing nice user interfaces and knowledge in
						Photoshop, Illustrator and Figma. Faithful believer that planning is
						the first step to success, I like to have an order in the activities
						of my daily and professional life, as this allowed me to establish a
						step by step in each project, delegate functions to a team and get
						satisfactory results for all.
					</p>
				</div>

				<div className="w-full p-5 flex flex-col gap-5">
				<h1 className="text-4xl font-semibold">Tools</h1>
					<div className="relative">
						<span className="absolute w-full h-0.5 bg-white/5"></span>
						<span className="absolute w-full h-0.5 bg-black/5"></span>
					</div>
					<h2 className="text-4xl font-bold">Software</h2>
					<ul className="w-full text-lg font-extralight">
						<li>This website is hosted on <a rel="noreferrer"
							target="_blank" className="text-blue-500 text-xl" href="https://www.netlify.com/"> Netlify</a> and uses the <a rel="noreferrer"
							target="_blank" className="text-blue-500 text-xl" href="https://vercel.com/">Vercel</a> framework</li>
						<li>Coding : <a rel="noreferrer"
							target="_blank" className="text-blue-500 text-xl" href="https://code.visualstudio.com/">Visual Studio Code</a> with <a rel="noreferrer"
							target="_blank" className="text-blue-500 text-xl" href="https://marketplace.visualstudio.com/items?itemName=tobiasalthoff.atom-material-theme">Atom Material Theme</a></li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Projects;
