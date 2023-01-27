import { InterfaceTheme } from "@/interfaces/Interface";
import {IoLanguageOutline} from "react-icons/io5"
// Do NOT use this! It will throw a hydration mismatch error.
// { theme, language, setLanguage }: Interface
const Language = ({theme}: InterfaceTheme) => {    
  return (
    <div className="absolute bottom-0 gap-2">
      <button
        className={`${
          theme
            ? "text-black/70 cursor-pointer"
            : "text-white cursor-pointer"
        }`}
      >
        {theme ? <IoLanguageOutline /> : <IoLanguageOutline />}
      </button>
    </div>
  );
};

export default Language;