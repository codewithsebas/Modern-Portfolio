import { InterfaceThemeLanguage } from "@/interfaces/Interface";
import { IoLanguageOutline } from "react-icons/io5";
import { Tooltip } from "./Tooltip";
// Do NOT use this! It will throw a hydration mismatch error.
// { theme, language, setLanguage }: Interface
const Language = ({
	theme,
	setTheme,
	lang,
	setLang,
}: InterfaceThemeLanguage) => {
	return (
		<button
			aria-label="Idioma"
			onClick={() => setLang(!lang)}
			className={`text-2xl relative w-full flex justify-center items-center group ${
				theme
					? "outline-none text-black/70 cursor-pointer active:bg-black/20 hover:bg-black/5 duration-200 p-2 rounded-md"
					: "outline-none text-white cursor-pointer active:bg-white/20 hover:bg-black/10 p-2 rounded-md"
			}`}>
			{theme ? <IoLanguageOutline /> : <IoLanguageOutline />}
			<Tooltip
				title={
					lang ? (lang ? "Spanish" : "Español") : lang ? "English" : "Ingles"
				}
				theme={theme}
			/>
		</button>
	);
};

export default Language;
