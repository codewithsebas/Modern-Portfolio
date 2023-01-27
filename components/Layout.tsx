import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { InterfaceLayout } from "@/interfaces/Interface";
import { motion } from "framer-motion";

// ESPECIFICA RUTA PARA ACTIVAR ICONO EN DONDE ESTAS EXACTAMENTE
import { useRouter } from "next/router";

const Layout = ({ children, theme, setTheme, lang, setLang }: InterfaceLayout) => {
	const router = useRouter();
	const { asPath } = router;
	return (
		<div
			className={`${
				theme
					? "h-screen bg-gradient-to-b from-[#e3eaf1] to-white"
					: "h-screen bg-gradient-to-b from-black to-[#111213]"
			}`}>
			<Header theme={theme} setTheme={setTheme} />
			<div className="w-full h-full pt-[5.5rem] flex justify-center px-3 pb-3">
				<div className="w-full max-w-6xl flex gap-4 rounded-md">
					<Sidebar asPath={asPath} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
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
								? "-z-0 flex flex-col justify-between w-full rounded-md text-black/80"
								: "-z-0 flex flex-col justify-between w-full rounded-md text-white"
						}`}>
						{children}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
