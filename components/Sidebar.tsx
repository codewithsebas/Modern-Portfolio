import { HiHome, HiColorSwatch, HiBriefcase, HiFolderOpen } from "react-icons/hi";
import { FaBook, FaAddressBook, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Theme from "./Theme";
import Link from "next/link";

type Props = {
	theme: boolean;
	setTheme: boolean | any;
};

const Sidebar = ({ theme, setTheme }: Props) => {
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
				duration: 1,
			}}
			className="flex flex-col items-center space-y-10">
			<div
				className={`${
					theme
						? "border border-black/10 h-full flex flex-col justify-between space-y-20 rounded-md p-5"
						: "border border-white/10 h-full flex flex-col justify-between space-y-20 rounded-md p-5"
				}`}>
				<ul
					className={`${
						theme
							? "flex flex-col gap-12 text-black/70"
							: "flex flex-col gap-12 text-white/70"
					}`}>
						<li className="duration-200 cursor-pointer text-2xl group max-w-max relative rounded-full flex items-center justify-center">
						<Link href="/">
							<HiHome />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] absolute bottom-0 mb-7 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
							<div className="flex max-w-xs flex-col items-center">
								<div className="rounded bg-white/80 border backdrop-blur-xl text-black p-2 text-xs text-center shadow-lg">
									Home
								</div>
							</div>
						</div>
					</li>
					<li className="duration-200 cursor-pointer text-2xl group max-w-max relative rounded-full flex items-center justify-center">
						<Link href="/about">
							<FaAddressBook />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] absolute bottom-0 mb-7 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
							<div className="flex max-w-xs flex-col items-center">
								<div className="rounded bg-white/80 border backdrop-blur-xl text-black p-2 text-xs text-center shadow-lg">
									About
								</div>
							</div>
						</div>
					</li>
					<li className="duration-200 cursor-pointer text-2xl group max-w-max relative rounded-full flex items-center justify-center">
						<Link href="/about">
							<HiBriefcase />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] absolute bottom-0 mb-7 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
							<div className="flex max-w-xs flex-col items-center">
								<div className="rounded bg-white/80 border backdrop-blur-xl text-black p-2 text-xs text-center shadow-lg">
									Experience
								</div>
							</div>
						</div>
					</li>
					<li className="duration-200 cursor-pointer text-2xl group max-w-max relative rounded-full flex items-center justify-center">
						<Link href="/about">
							<HiColorSwatch />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] absolute bottom-0 mb-7 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
							<div className="flex max-w-xs flex-col items-center">
								<div className="rounded bg-white/80 border backdrop-blur-xl text-black p-2 text-xs text-center shadow-lg">
									Skills
								</div>
							</div>
						</div>
					</li>
					<li className="duration-200 cursor-pointer text-2xl group max-w-max relative rounded-full flex items-center justify-center">
						<Link href="/about">
							<HiFolderOpen />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] absolute bottom-0 mb-7 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
							<div className="flex max-w-xs flex-col items-center">
								<div className="rounded bg-white/80 border backdrop-blur-xl text-black p-2 text-xs text-center shadow-lg">
									Projects
								</div>
							</div>
						</div>
					</li>
					<li className="duration-200 cursor-pointer text-2xl group max-w-max relative rounded-full flex items-center justify-center">
						<Link href="/friends">
							<FaUsers />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] absolute bottom-0 mb-7 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
							<div className="flex max-w-xs flex-col items-center">
								<div className="rounded bg-white/80 border backdrop-blur-xl text-black p-2 text-xs text-center shadow-lg">
									Devs
								</div>
							</div>
						</div>
					</li>
					<li className="duration-200 cursor-pointer text-2xl group max-w-max relative rounded-full flex items-center justify-center">
						<Link href="/about">
							<FaBook />
						</Link>
						<div className="group-hover:[transform:perspective(10px)] absolute bottom-0 mb-7 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
							<div className="flex max-w-xs flex-col items-center">
								<div className="rounded bg-white/80 border backdrop-blur-xl text-black p-2 text-xs text-center shadow-lg">
									Contact
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div className=" relative flex items-center justify-center duration-200 cursor-pointer text-2xl group max-w-max">
					<Theme theme={theme} setTheme={setTheme} />
					<div className="group-hover:[transform:perspective(10px)] absolute bottom-0 -left-2.5 mb-7 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
						<div className="flex max-w-xs flex-col items-center">
							<div className="rounded bg-white/80 border backdrop-blur-xl text-black p-2 text-xs text-center shadow-lg">
								{theme ? "Dark" : "Light"}
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Sidebar;
