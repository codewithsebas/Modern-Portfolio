import { InterfaceTheme } from "@/interfaces/Interface";
import { Lexend } from "@next/font/google";
import { BsPaypal } from "react-icons/bs";
import {SiKofi} from "react-icons/si"

const font = Lexend({ subsets: ["latin"], weight: "800" });

const Footer = ({ theme, setTheme }: InterfaceTheme) => {
	return (
		<footer
			className={`${
				theme
					? "flex justify-center gap-2 rounded-b-md text-black py-1"
					: "flex justify-center gap-2 rounded-b-md text-white py-1"
			}`}>
			<div
				className={`${
					theme
						? "flex items-center gap-3 text-black/20 duration-200"
						: "flex items-center gap-3 text-white/20 duration-200"
				}`}>
				<a
					href="https://www.linkedin.com/in/code-sebastian-giraldo/"
					rel="noreferrer"
					target="_blank"
					className={font.className}>
					By Sebatian Giraldo
				</a>
				<a
					className={font.className}
					href="https://ko-fi.com/codewithsebas"
					rel="noreferrer"
					target="_blank">
					<SiKofi />
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://paypal.me/codewithsebas?country.x=CO&locale.x=es_XC">
					<BsPaypal />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
