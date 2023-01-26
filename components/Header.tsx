import {
	FaLinkedin,
	FaGithub,
	FaTwitter,
	FaDev,
	FaDribbble,
	FaMailchimp,
} from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";

import { motion } from "framer-motion";
import Copy from "./Copy";
import Image from "next/image";
import Link from "next/link";
import { Interface } from "@/interfaces/Interface";

export default function Header({ asPath, theme }: Interface) {
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
			className="w-full flex justify-center items-center pt-3 px-3 pb-2 fixed">
			<div
				className={`${
					theme
						? "bg-white w-full max-w-6xl flex justify-between items-center px-4 py-4 rounded-md"
						: "bg-[#111213] w-full max-w-6xl flex justify-between items-center px-4 py-4 rounded-md"
				}`}>
				<ul
					className={`${
						theme
							? "flex flex-row items-center gap-6 text-2xl text-black/70"
							: "flex flex-row items-center gap-6 text-2xl text-white"
					}`}>
					<li className="animate-pulse duration-200 hover:animate-none">
						<Link href="/">
							<Image src="/favicon.svg" alt="Logo" width={27} height={27} />
						</Link>
					</li>
					<li>
						<a
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
				<div
					className={`${
						theme
							? "flex items-center gap-3 text-black"
							: "flex items-center gap-3 text-white"
					}`}>
					<FaMailchimp className="text-2xl" />
					<Copy value="joabgiraldo@gmail.com" />
				</div>
			</div>
		</motion.header>
	);
}
