import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { InterfaceLayout } from "@/interfaces/Interface";
import { motion } from "framer-motion";

// ESPECIFICA RUTA PARA ACTIVAR ICONO EN DONDE ESTAS EXACTAMENTE
import { useRouter } from "next/router";

const Layout = ({
	children,
	theme,
	setTheme,
	lang,
	setLang,
}: InterfaceLayout) => {
	const router = useRouter();
	const { asPath } = router;
	return (
		<div
			className={`${
				theme
					? "h-screen bg-gradient-to-b from-[#e3eaf1] to-white"
					: "h-screen bg-gradient-to-b from-neutral-900 to-black"
			}`}>
			<Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
			<div className="w-full h-full max-h-screen flex justify-center px-3 pb-3 pt-[4.9rem]">
				<div className="w-full max-w-4xl 2xl:max-w-6xl flex gap-3 rounded-md relative">
					<div
						className={`${
							theme
								? "absolute left-96 top-32 w-60 h-60 rounded-full animate-bg bg-red-500 blur-3xl"
								: "absolute left-96 top-32 w-60 h-60 rounded-full animate-bg bg-red-500/50 blur-3xl"
						}`}></div>

					<div
						className={`${
							theme
								? "absolute right-0 top-20 w-20 h-20 rounded-full animate-bg2 bg-blue-500 blur-3xl"
								: "absolute right-0 top-20 w-20 h-20 rounded-full animate-bg2 bg-blue-500 blur-3xl"
						}`}></div>

					<div
						className={`${
							theme
								? "absolute left-10 bottom-20 w-60 h-60 rounded-full animate-bg3 bg-fuchsia-500/30 blur-xl"
								: "absolute left-10 bottom-20 w-72 h-60 rounded-full animate-bg3 bg-fuchsia-500/10 blur-xl"
						}`}></div>
					<div
						className={`${
							theme
								? "absolute left-4 bottom-5 w-5 h-5 rounded-full animate-ping bg-black/20 blur-xl"
								: "absolute left-4 bottom-5 w-5 h-5 rounded-full animate-ping bg-white/20 blur-xl"
						}`}></div>
					<Sidebar
						asPath={asPath}
						theme={theme}
						setTheme={setTheme}
						lang={lang}
						setLang={setLang}
					/>
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
								? "flex flex-col justify-between w-full h-full rounded-md text-black/80 backdrop-blur-3xl"
								: "flex flex-col justify-between w-full h-full rounded-md text-white/80 backdrop-blur-3xl"
						}`}>
						{children}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
