import React from "react";

type Props = {
	theme: boolean;
};

const Footer = ({ theme }: Props) => {
	return (
		<footer
			className={`${
				theme
					? "flex flex-col items-center gap-2 rounded-b-md text-black py-5"
					: "flex flex-col items-center gap-2 rounded-b-md text-white py-5"
			}`}>
			<div className="flex gap-6">
			<p>By Sebatian Giraldo</p>
				<a
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
