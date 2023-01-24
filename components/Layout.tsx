import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "./Footer";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	const [theme, setTheme] = useState(false);
	return (
		<div
			className={`${
				theme
					? "h-screen bg-white dark:text-white/90 duration-200"
					: "h-screen bg-[#18191a] dark:text-white/90 duration-200"
			}`}>
			<Header theme={theme} setTheme={setTheme} />
			<div className="w-full h-full pt-24 flex justify-center px-3 pb-3">
				<div className="w-full max-w-6xl flex gap-4">
					<Sidebar theme={theme} setTheme={setTheme} />
					<motion.div
						initial={{
							y: 100,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 0.5,
						}}
						className={`${
							theme
								? "z-20 flex flex-col justify-between w-full border border-black/10 rounded-md text-black"
								: "z-20 flex flex-col justify-between w-full border border-white/10 rounded-md text-white"
						}`}>
						{children}
						<Footer theme={theme} />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
