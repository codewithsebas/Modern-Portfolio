import {
	HiHome,
	HiColorSwatch,
	HiBriefcase,
	HiFolderOpen,
} from "react-icons/hi";
import { FaBook, FaAddressBook, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Theme from "./Theme";
import Link from "next/link";
import Language from "./Language";
import { InterfaceThemePath } from "@/interfaces/Interface";

const Sidebar = ({ theme, setTheme, asPath }: InterfaceThemePath) => {
	return (
		<motion.div
			initial={{
				x: -100,
				opacity: 0,
			}}
			animate={{
				x: 0,
				opacity: 1,
			}}
			transition={{
				duration: 0.5,
			}}
			className={`${
				theme
					? "flex flex-col items-center bg-gradient-to-b from-white to-transparent rounded-md duration-200 z-30"
					: "flex flex-col items-center bg-gradient-to-b from-[#111213] to-transparent rounded-md duration-200 z-30"
			}`}>
			<div
				className={`${
					theme
						? "h-full flex flex-col justify-between items-center rounded-md px-2 pt-2 pb-5"
						: "h-full flex flex-col justify-between items-center rounded-md px-2 pt-2 pb-5"
				}`}>
				<ul
					className={`${
						theme
							? "flex flex-col items-center gap-5 text-black/50"
							: "flex flex-col items-center gap-5 text-white/50"
					}`}>
					<li className="cursor-pointer text-2xl group max-w-max relative flex items-center justify-center">
						<Link
							href="/"
							className={`${
								!theme && asPath === "/"
									? "bg-white/10 text-white/90 hover:text-white rounded-md p-2"
									: "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
									? asPath !== "/"
										? theme
											? "hover:bg-black/10 hover:text-black/70 rounded-md p-2"
											: "hover:bg-white/10 hover:text-white rounded-md p-2"
										: "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
									: "bg-white/10 text-white/70 hover:text-white/80 rounded-md p-2"
							}
							`}>
							<HiHome />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] z-30 absolute top-[1.5px] right-[3.2rem] origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
							<div className="flex max-w-xs flex-col items-center pointer-events-none">
								<div
									className={`${
										theme
											? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
											: "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
									}`}>
									Home
								</div>
							</div>
						</div>
					</li>
					<li className="cursor-pointer text-2xl group max-w-max relative flex items-center justify-center">
						<Link
							href="/about"
							className={`${
								!theme && asPath === "/about"
									? "bg-white/10 text-white/90 hover:text-white rounded-md p-2"
									: "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
									? asPath !== "/about"
										? theme
											? "hover:bg-black/10 hover:text-black/70 rounded-md p-2"
											: "hover:bg-white/10 hover:text-white rounded-md p-2"
										: "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
									: "bg-white/10 text-white/70 hover:text-white/80 rounded-md p-2"
							}
							`}>
							<FaAddressBook />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] z-30 absolute top-[1.5px] right-[3.2rem] origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
							<div className="flex max-w-xs flex-col items-center pointer-events-none">
								<div
									className={`${
										theme
											? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
											: "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
									}`}>
									About
								</div>
							</div>
						</div>
					</li>

					<li className="cursor-pointer text-2xl group max-w-max relative flex items-center justify-center">
						<Link
							href="/experience"
							className={`${
								!theme && asPath === "/experience"
									? "bg-white/10 text-white/90 hover:text-white rounded-md p-2"
									: "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
									? asPath !== "/experience"
										? theme
											? "hover:bg-black/10 hover:text-black/70 rounded-md p-2"
											: "hover:bg-white/10 hover:text-white rounded-md p-2"
										: "bg-black/10 text-black/70 hover:text-black/80 rounded-md p-2"
									: "bg-white/10 text-white/70 hover:text-white/80 rounded-md p-2"
							}
							`}>
							<HiBriefcase />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] z-30 absolute top-[1.5px] right-[3.2rem] origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
							<div className="flex max-w-xs flex-col items-center pointer-events-none">
								<div
									className={`${
										theme
											? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
											: "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
									}`}>
									Experience
								</div>
							</div>
						</div>
					</li>

					<li className="cursor-pointer text-2xl group max-w-max relative flex items-center justify-center">
						<Link
							href="/skills"
							className={`${
								!theme && asPath === "/skills"
									? "bg-white/10 text-white/90 hover:text-white rounded-md p-2"
									: "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
									? asPath !== "/skills"
										? theme
											? "hover:bg-black/10 hover:text-black/70 rounded-md p-2"
											: "hover:bg-white/10 hover:text-white rounded-md p-2"
										: "bg-black/10 text-black/70 hover:text-black/80 rounded-md p-2"
									: "bg-white/10 text-white/70 hover:text-white/80 rounded-md p-2"
							}
							`}>
							<HiColorSwatch />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] z-30 absolute top-[1.5px] right-[3.2rem] origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
							<div className="flex max-w-xs flex-col items-center pointer-events-none">
								<div
									className={`${
										theme
											? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
											: "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
									}`}>
									Skills
								</div>
							</div>
						</div>
					</li>

					<li className="cursor-pointer text-2xl group max-w-max relative flex items-center justify-center">
						<Link
							href="/projects"
							className={`${
								!theme && asPath === "/projects"
									? "bg-white/10 text-white/90 hover:text-white rounded-md p-2"
									: "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
									? asPath !== "/projects"
										? theme
											? "hover:bg-black/10 hover:text-black/70 rounded-md p-2"
											: "hover:bg-white/10 hover:text-white rounded-md p-2"
										: "bg-black/10 text-black/70 hover:text-black/80 rounded-md p-2"
									: "bg-white/10 text-white/70 hover:text-white/80 rounded-md p-2"
							}
							`}>
							<HiFolderOpen />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] z-30 absolute top-[1.5px] right-[3.2rem] origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
							<div className="flex max-w-xs flex-col items-center pointer-events-none">
								<div
									className={`${
										theme
											? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
											: "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
									}`}>
									Projects
								</div>
							</div>
						</div>
					</li>

					<li className="cursor-pointer text-2xl group max-w-max relative flex items-center justify-center">
						<Link
							href="/networking"
							className={`${
								!theme && asPath === "/networking"
									? "bg-white/10 text-white/90 hover:text-white rounded-md p-2"
									: "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
									? asPath !== "/devs"
										? theme
											? "hover:bg-black/10 hover:text-black/70 rounded-md p-2"
											: "hover:bg-white/10 hover:text-white rounded-md p-2"
										: "bg-red-500/20 text-red-500/70 hover:text-red-500/80 rounded-md p-2"
									: "bg-red-500/20 text-red-500/70 hover:text-red-500/80 rounded-md p-2"
							}
							`}>
							<FaUsers />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] z-30 absolute top-[1.5px] right-[3.2rem] origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
							<div className="flex max-w-xs flex-col items-center pointer-events-none">
								<div
									className={`${
										theme
											? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
											: "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
									}`}>
									Networking
								</div>
							</div>
						</div>
					</li>

					<li className="cursor-pointer text-2xl group max-w-max relative flex items-center justify-center">
						<Link
							href="/contact"
							className={`${
								!theme && asPath === "/contact"
									? "bg-white/10 text-white/90 hover:text-white rounded-md p-2"
									: "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
									? asPath !== "/contact"
										? theme
											? "hover:bg-black/10 hover:text-black/70 rounded-md p-2"
											: "hover:bg-white/10 hover:text-white rounded-md p-2"
										: "bg-black/10 text-black/70 hover:text-black/80 rounded-md p-2"
									: "bg-white/10 text-white/70 hover:text-white/80 rounded-md p-2"
							}
							`}>
							<FaBook />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] z-30 absolute top-[1.5px] right-[3.2rem] origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
							<div className="flex max-w-xs flex-col items-center pointer-events-none">
								<div
									className={`${
										theme
											? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
											: "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
									}`}>
									Contact
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div className="w-full flex flex-col items-center gap-12">
					<div className="w-full cursor-pointer text-2xl group max-w-max relative flex items-center justify-center">
						<Language theme={theme} setTheme={setTheme} />
						<div className="group-hover:[transform:perspective(10px)] z-30 absolute -bottom-1 right-11 origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
							<div className="flex max-w-xs flex-col items-center pointer-events-none">
								<div
									className={`${
										theme
											? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
											: "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
									}`}>
									Hola
								</div>
							</div>
						</div>
					</div>
					<div className="w-full cursor-pointer text-3xl group max-w-max relative flex items-center justify-center">
						<Theme theme={theme} setTheme={setTheme} />
						<div className="group-hover:[transform:perspective(10px)] z-30 absolute -bottom-1 right-7 origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
							<div className="flex max-w-xs flex-col items-center pointer-events-none">
								<div
									className={`${
										theme
											? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
											: "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
									}`}>
									{theme ? "Dark" : "Ligth"}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Sidebar;
