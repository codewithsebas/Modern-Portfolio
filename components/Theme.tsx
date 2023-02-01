import { InterfaceTheme } from "@/interfaces/Interface";
import { MdLightMode, MdNightlight } from "react-icons/md";

// Do NOT use this! It will throw a hydration mismatch error.
const Theme = ({ theme, setTheme }: InterfaceTheme) => {
  return (
    <div className="absolute bottom-0 gap-2">
      <div
        onClick={() => setTheme(!theme)}
        className={`${
          theme ? "text-black/70 cursor-pointer" : "text-white cursor-pointer"
        }`}
      >
        {theme ? <MdNightlight /> : <MdLightMode />}
      </div>
    </div>
  );
};

export default Theme;
