import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";

// ESPECIFICA RUTA PARA ACTIVAR ICONO EN DONDE ESTAS EXACTAMENTE
import { useRouter } from 'next/router'

interface Props {
	children: React.ReactNode;
	theme: boolean
	setTheme: boolean | any
}

const Layout = ({ children, theme,setTheme }: Props) => {
	const router = useRouter()
	const {asPath} = router
	return (
		<div
			className={`${
				theme
					? "h-screen bg-gradient-to-b from-[#d8e2ec] to-white duration-200"
					: "h-screen bg-gradient-to-b from-black to-[#111213] duration-200"
			}`}>
			<Header theme={theme} />
			<div className="w-full h-full pt-24 flex justify-center px-3 pb-3">
				<div className="w-full max-w-6xl flex gap-6">
					<Sidebar asPath={asPath} theme={theme} setTheme={setTheme} />
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
