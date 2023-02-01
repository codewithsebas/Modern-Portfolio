import { InterfaceThemeLanguage } from "@/interfaces/Interface";
import { IoLanguageOutline } from "react-icons/io5";
// Do NOT use this! It will throw a hydration mismatch error.
// { theme, language, setLanguage }: Interface
const Language = ({
  theme,
  setTheme,
  lang,
  setLang,
}: InterfaceThemeLanguage) => {
  return (
    <div className="absolute bottom-0 gap-2">
      <button
        aria-label="Idioma"
        onClick={() => setLang(!lang)}
        className={`${
          theme
            ? "outline-none text-black/70 cursor-pointer active:bg-black/20 hover:bg-black/5 duration-200 p-2 rounded-md"
            : "outline-none text-white cursor-pointer active:bg-white/20 hover:bg-black/10 p-2 rounded-md"
        }`}
      >
        {theme ? <IoLanguageOutline /> : <IoLanguageOutline />}
      </button>
    </div>
  );
};

export default Language;
