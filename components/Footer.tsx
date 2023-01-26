import { Lexend } from "@next/font/google";
import React from "react";

type Props = {
	theme: boolean;
};

const lexend = Lexend({ subsets: ["latin"], weight: "800" });

const Footer = ({ theme }: Props) => {
	return (
		<footer
			className={`${
				theme
					? "flex flex-col items-center gap-2 rounded-b-md text-black py-5"
					: "flex flex-col items-center gap-2 rounded-b-md text-white py-5"
			}`}>
			<div
				className={`${
					theme
						? "flex gap-6 text-black/20 duration-200 hover:text-black/40"
						: "flex gap-6 text-white/20 duration-200 hover:text-white/40" 
				}`}>
				<a
					href="https://www.linkedin.com/in/code-sebastian-giraldo/"
					rel="noreferrer"
					target="_blank"
					className={lexend.className}>
					By Sebatian Giraldo
				</a>
				<a
					className={lexend.className}
					href="https://ko-fi.com/codewithsebas"
					rel="noreferrer"
					target="_blank">
					Ko-Fi
				</a>
			</div>
		</footer>
	);
};

export default Footer;
