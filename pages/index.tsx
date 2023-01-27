import Head from "next/head";
import Image from "next/image";

import { Lexend } from "@next/font/google";
import Footer from "@/components/Footer";
import { InterfaceTheme } from "@/interfaces/Interface";

// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({ subsets: ["latin"], weight: "800" });

export default function Home({ theme, setTheme }: InterfaceTheme) {
	return (
		<>
			<Head>
				<title>My Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<div
				className={`${
					theme
						? "w-full h-full flex flex-col justify-between overflow-auto bg-gradient-to-b from-[#f6f6f7] to-white rounded-md"
						: "w-full h-full flex flex-col justify-between overflow-auto bg-gradient-to-b from-[#17181a] to-transparent rounded-md"
				}`}>
				<div>
					<div className="relative w-full max-h-80">
						{theme ? (
							<Image
								className="max-h-80 object-cover opacity-90"
								src="/back.jpg"
								alt="Banner"
								width={1076}
								height={1000}
								priority
							/>
						) : (
							<Image
								className="max-h-80 object-cover opacity-10"
								src="/backDark.jpg"
								alt="Banner"
								width={1076}
								height={1000}
								priority
							/>
						)}
						<div
							className={`${
								theme
									? "flex flex-col gap-5 items-center justify-center absolute left-0 right-0 bottom-0 top-0  rounded-lg"
									: "flex flex-col gap-5 items-center justify-center absolute left-0 right-0 bottom-0 top-0  rounded-lg"
							}`}>
							<div className="text-7xl text-white font-extrabold">
								<h1 className={lexend.className}>WELCOME!</h1>
							</div>
							<p className="text-2xl text-white font-sans">
								To my Modern Portfolio!
							</p>
						</div>
					</div>

					<div className="w-full p-7 flex flex-col gap-5">
						<p className="font-mono text-xl">Hi, my name is</p>
						<h1
							className={lexend.className}
							style={{ fontSize: 50, lineHeight: 0.5 }}>
							Sebastian Giraldo.
						</h1>
						<h1
							className={lexend.className}
							style={{ fontSize: 50, lineHeight: 1 }}>
							I build things for the web.. ❤️
						</h1>
						<div className="relative">
							<span className="absolute w-full left-0 right-0 h-0.5 bg-white/5"></span>
							<span className="absolute w-full left-0 right-0 h-0.5 bg-black/5"></span>
						</div>
						<p className="text-xl font-sans">
							I’m a software engineer specializing in building (and occasionally
							designing) exceptional digital experiences. Currently, I’m focused
							on building accessible, human-centered products at Upstatement.
						</p>
						<div className="w-full flex pt-5">
							<div className="w-full flex gap-3">
								<Image
									className="rounded-md"
									src="/pc1.jpg"
									alt="PC1"
									width={200}
									height={200}
								/>
								<Image
									className="rounded-md"
									src="/pc2.jpg"
									alt="PC2"
									width={200}
									height={200}
								/>
							</div>
							<div className="w-full flex flex-col justify-center gap-10">
								<h1
									className={lexend.className}
									style={{ fontSize: 30, lineHeight: 0 }}>
									My work zone!.
								</h1>
								<p className="text-xl font-sans">
									Experienced specialist committed to providing exceptional
									service. <br />
									<br />
									Motivated, team player with strong organizational and
									interpersonal skills.
									<br />
									Always looking for new opportunities to improve my skills, get
									recognized for my knowledge and values and take on additional
									responsibilities and grow professionally.
								</p>
							</div>
						</div>
					</div>
				</div>

				<Footer theme={theme} setTheme={setTheme} />
			</div>
		</>
	);
}
