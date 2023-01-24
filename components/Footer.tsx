import React from "react";

type Props = {
	theme: boolean;
};

const Footer = ({ theme }: Props) => {
	return (
		<footer
			className={`${
				theme
					? "flex flex-col items-center gap-2 text-black border-t border-black/20 py-5"
					: "flex flex-col items-center gap-2 text-white border-t border-white/20 py-5"
			}`}>
			<div className="flex gap-6">
			<div>By Sebatian Giraldo</div>
				<a
					href="https://ko-fi.com/codewithsebas"
					rel="noreferrer"
					target="_blank">
					Ko-Fi
				</a>
				<div>Nextjs</div>
				<div>Github</div>
				<div>Vercel</div>
			</div>
		</footer>
	);
};

export default Footer;
