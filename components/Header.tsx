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

import CopyButton from "./CopyButton";
type Props = {};

export default function Header({}: Props) {
	return (
		<header className="w-full flex justify-center items-center">
			<div className="w-full max-w-6xl flex justify-between items-center p-5">
				<motion.ul
					initial={{
						x: -500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1,
					}}
					className="flex flex-row items-center gap-4 text-2xl">
					<li>
						<a
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
				</motion.ul>
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1,
					}}
					className="flex items-center gap-3">
					<FaMailchimp className="text-2xl" />
					<CopyButton value="joabgiraldo@gmail.com" />
				</motion.div>
			</div>
		</header>
	);
}
