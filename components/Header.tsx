import {
	FaLinkedin,
	FaGithub,
	FaTwitter,
	FaDev,
	FaDribbble,
	FaMailchimp,
} from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";
import { AiOutlineFire } from "react-icons/ai";

import { motion } from "framer-motion";
import Copy from "./Copy";
import Link from "next/link";
import { InterfaceThemeLanguage } from "@/interfaces/Interface";
import Cv from "./Cv";
import Image from "next/image";

export default function Header({
	theme,
	setTheme,
	lang,
	setLang,
}: InterfaceThemeLanguage) {
	return (
		<motion.header
			initial={{
				y: -100,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			className="w-full flex justify-center items-center pt-3 px-3 pb-2 fixed ">
			<div
				className={`${
					theme
						? "bg-white w-full max-w-4xl 2xl:max-w-6xl flex justify-between items-center p-3 rounded-md"
						: "bg-neutral-800/20 w-full max-w-4xl 2xl:max-w-6xl flex justify-between items-center p-3 rounded-md" 
				}`}>
				<ul
					className={`${
						theme
							? "flex flex-row items-center gap-5 text-2xl text-black/70"
							: "flex flex-row items-center gap-5 text-2xl text-white"
					}`}>
					<li className="animate-pulse duration-200 hover:animate-none">
						<Link href="/" aria-label="Pagina inicial">
							{theme ? <Image src="/favicon2.svg" alt="Favicon" width={32} height={32} /> : <Image src="/favicon.svg" alt="Favicon" width={32} height={32} />}
						</Link>
					</li>
					<li>
						<a
							aria-label="LinkedIn"
							className={`${
								theme
									? "text-black/70 hover:text-black/80"
									: "text-white/80 hover:text-white"
							}
						`}
							href="https://www.linkedin.com/in/code-sebastian-giraldo/"
							rel="noreferrer"
							target="_blank">
							<FaLinkedin />
						</a>
					</li>
					<li>
						<a
							aria-label="Github"
							className={`${
								theme
									? "text-black/70 hover:text-black/80"
									: "text-white/80 hover:text-white"
							}
						`}
							href="https://github.com/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<FaGithub />
						</a>
					</li>
					<li>
						<a
							aria-label="Twitter"
							className={`${
								theme
									? "text-black/70 hover:text-black/80"
									: "text-white/80 hover:text-white"
							}
						`}
							href="https://twitter.com/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<FaTwitter />
						</a>
					</li>
					<li>
						<a
							aria-label="Dev"
							className={`${
								theme
									? "text-black/70 hover:text-black/80"
									: "text-white/80 hover:text-white"
							}
						`}
							href="https://dev.to/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<FaDev />
						</a>
					</li>
					<li>
						<a
							aria-label="Dribbble"
							className={`${
								theme
									? "text-black/70 hover:text-black/80"
									: "text-white/80 hover:text-white"
							}
						`}
							href="https://dribbble.com/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<FaDribbble />
						</a>
					</li>
					<li>
						<a
							aria-label="Duolingo"
							className={`${
								theme
									? "text-black/70 hover:text-black/80"
									: "text-white/80 hover:text-white"
							}
						`}
							href="https://www.duolingo.com/profile/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<SiDuolingo />
						</a>
					</li>
				</ul>
				<div className="flex gap-3 items-center">
					<div
						className={`${
							theme
								? "flex items-center gap-3 text-black/70"
								: "flex items-center gap-3 text-white"
						}`}>
						<FaMailchimp className="text-2xl" />
						<Copy value="joabgiraldo@gmail.com" />
					</div>
					<p className={`${theme ? "text-black" : "text-white"}`}>|</p>
					<Cv theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
				</div>
			</div>
		</motion.header>
	);
}
