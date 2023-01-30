import { Lexend } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Footer";
import { InterfaceThemeLanguage } from "@/interfaces/Interface";
import { ProjectsData } from "@/utils/projects";

const lexend = Lexend({ subsets: ["latin"], weight: "800" });
import { FaGithub } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { TfiUnlink } from "react-icons/tfi";

export default function About({
	theme,
	setTheme,
	lang,
	setLang,
}: InterfaceThemeLanguage) {
	return (
		<>
			<Head>
				<title>
					{lang ? "Contact - Portfolio" : "Contacto - Portafolio"}
				</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<div
				className={`${
					theme
						? "w-full h-full flex flex-col justify-between overflow-auto bg-gradient-to-b from-white to-transparent rounded-md backdrop-blur-3xl"
						: "w-full h-full flex flex-col justify-between overflow-auto bg-gradient-to-b from-[#17181a] to-transparent rounded-md backdrop-blur-3xl"
				}`}>
				<div>
					<div className="w-full p-7 flex flex-col  gap-5">
						<h1
							className={lexend.className}
							style={{ fontSize: 50, fontWeight: 800, lineHeight: 1 }}>
							{lang ? "My Projects" : "Mis Proyectos"}
						</h1>
						<p className="text-xl font-sans">
							{lang
								? "A list of projects I have been working on or built"
								: "Una lista de proyectos en los que he estado trabajando o que he construido"}
						</p>
					</div>

					<div className="w-full p-7 pt-0 grid grid-cols-1 gap-4">
						{ProjectsData.map(
							({
								id,
								title,
								description,
								descriptionE,
								example,
								repo,
								live,
								techs,
								animation,
							}) => (
								<div
									key={id}
									className={`${
										theme
											? "relative w-full rounded-md border p-5 flex flex-col justify-between gap-3 hover:border duration-200 hover:shadow-lg"
											: "relative w-full rounded-md border border-white/10 p-5 flex flex-col justify-between gap-3 hover:border-white/20 duration-200 hover:shadow-lg hover:shadow-white/5"
									}`}>
									<div
										className={`${
											animation
												? "absolute w-20 h-20 right-0 rounded-full animate-bg bg-sky-500 blur-3xl"
												: "absolute w-20 h-20 right-0 rounded-full animate-bg blur-3xl"
										}`}></div>

									<div
										className={`${
											theme
												? "absolute bottom-10 -left-24 w-2 h-2 rounded-full bg-black blur-lg"
												: "absolute bottom-10 -left-24 w-2 h-2 rounded-full bg-white blur-lg"
										}`}></div>

									<div
										className={`${
											theme
												? "absolute bottom-20 right-0 w-2 h-2 rounded-full bg-blue-500 blur-lg"
												: "absolute bottom-20 right-0 w-2 h-2 rounded-full bg-blue-500 blur-lg"
										}`}></div>
									<div className="flex justify-between items-center z-20">
										<GoFileSubmodule className=" text-4xl" />
										<a href={repo} rel="noreferrer" target="_blank">
											<FaGithub className=" text-3xl" />
										</a>
									</div>
									<div className="flex gap-5">
										<div className="w-3/5 flex flex-col">
											<h1 className="text-3xl font-semibold">{title}</h1>
											<p className="font-sans text-base">
												{lang ? descriptionE : description}
											</p>
										</div>
										<div className="w-1/2">
											<a href={live} rel="noreferrer" target="_blank">
												<Image
													src={example}
													alt={title}
													width={400}
													height={400}
													className="rounded-md"
												/>
											</a>
										</div>
									</div>

									<div className="flex justify-between items-center">
										<p className="font-semibold flex gap-3">{techs}</p>
										<div className="flex gap-2 items-center">
											<a href={live} rel="noreferrer" target="_blank">
												{live ? (
													<p className="flex items-center gap-3 font-bold">
														live <TfiUnlink />
													</p>
												) : (
													""
												)}
											</a>
										</div>
									</div>
								</div>
							)
						)}
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
