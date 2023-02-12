import { InterfaceTheme } from "@/interfaces/Interface";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { Tooltip } from "./Tooltip";

// Do NOT use this! It will throw a hydration mismatch error.
const Theme = ({ theme, setTheme, lang }: InterfaceTheme) => {
  return (
    <div
      onClick={() => setTheme(!theme)}
      className={`relative w-full flex justify-center items-center group text-[1.7rem] ${
        theme ? "text-black/70 cursor-pointer" : "text-white cursor-pointer"
      }`}
    >
      {theme ? <MdNightlight /> : <MdLightMode />}
      <Tooltip
        title={lang ? (theme ? "Dark" : "Ligth") : theme ? "Oscuro" : "Claro"}
        theme={theme}
      />
    </div>
  );
};

export default Theme;
