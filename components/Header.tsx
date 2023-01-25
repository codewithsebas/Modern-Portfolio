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

type Props = {
	theme: boolean;
};

export default function Header({ theme }: Props) {
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
			className="w-full flex justify-center items-center p-3 fixed">
			<div
				className={`${
					theme
						? "bg-white w-full max-w-6xl flex justify-between items-center px-5 py-5 rounded-md"
						: "bg-[#111213] w-full max-w-6xl flex justify-between items-center px-5 py-5 rounded-md"
				}`}>
				<ul
					className={`${
						theme
							? "flex flex-row items-center gap-6 text-2xl text-black/70"
							: "flex flex-row items-center gap-6 text-2xl text-white"
					}`}>
					<li>
						<a
							className="dark:text-white"
							href="https://www.linkedin.com/in/code-sebastian-giraldo/"
							rel="noreferrer"
							target="_blank">
							<FaLinkedin />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<FaGithub />
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<FaTwitter />
						</a>
					</li>
					<li>
						<a
							href="https://dev.to/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<FaDev />
						</a>
					</li>
					<li>
						<a
							href="https://dribbble.com/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<FaDribbble />
						</a>
					</li>
					<li>
						<a
							href="https://www.duolingo.com/profile/codewithsebas"
							rel="noreferrer"
							target="_blank">
							<SiDuolingo />
						</a>
					</li>
				</ul>
				<div className={`${theme ? "flex items-center gap-3 text-black" : "flex items-center gap-3 text-white"}`}>
					<FaMailchimp  className="text-2xl" />
					<Copy value="joabgiraldo@gmail.com" />
				</div>
			</div>
		</motion.header>
	);
}
