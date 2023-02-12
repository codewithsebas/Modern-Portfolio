import { InterfaceThemeLanguage } from "@/interfaces/Interface";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { Tooltip } from "./Tooltip";

const Cv = ({ theme }: InterfaceThemeLanguage) => {
	return (
		<a
			href="/download/CV_WEB_2023.pdf"
			target="_blank"
			rel="noopener noreferrer"
			download="CV_WEB_2023.pdf"
			className="flex items-center justify-center gap-2 relative group">
			<BsFileEarmarkPdfFill
				className={`${
					theme
						? "flex items-center gap-3 text-black/70 text-2xl hover:text-black/80"
						: "flex items-center gap-3 text-white text-2xl"
				}`}
			/>
			<Tooltip title="Curriculum" theme={theme} />
		</a>
	);
};

export default Cv;
