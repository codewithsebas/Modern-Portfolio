import { motion } from "framer-motion";
import Theme from "./Theme";
import Link from "next/link";
import Language from "./Language";
import { InterfaceThemePath } from "@/interfaces/Interface";
import { SidebarItems } from "../utils/sidebar";
import Cv from "./Cv";
import { Tooltip } from "./Tooltip";

const Sidebar = ({
  theme,
  setTheme,
  asPath,
  lang,
  setLang,
}: InterfaceThemePath) => {
  return (
    <motion.nav
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`${
        theme
          ? "h-full flex flex-col items-center rounded-md duration-200 z-30"
          : "h-full flex flex-col items-center rounded-md duration-200 z-30 "
      }`}
    >
      <div
        className={`${
          theme
            ? "h-full flex flex-col justify-between items-center rounded-md px-2 pt-5 pb-5"
            : "h-full flex flex-col justify-between items-center rounded-md px-2 pt-5 pb-5"
        }`}
      >
        <ul
          className={`${
            theme
              ? "flex flex-col justify-between items-center gap-3 text-black/50"
              : "flex flex-col justify-between items-center gap-3 text-white/50"
          }`}
        >
          {SidebarItems.map(
            ({ id, href, icon, name, description, nameE, descriptionE }) => (
              <li
                key={id}
                className="cursor-pointer text-2xl group max-w-max flex items-center justify-center"
              >
                <Link
                  aria-label={lang ? description : descriptionE}
                  href={href}
                  className={`${
                    !theme && asPath === href
                      ? "bg-white/10 text-white/90 hover:text-white rounded-sm p-2"
                      : "bg-black/5 text-black/70 hover:text-black/70 rounded-sm p-2"
                      ? asPath !== href
                        ? theme
                          ? "hover:bg-black/5 hover:text-black/70 rounded-sm p-2"
                          : "hover:bg-white/10 hover:text-white rounded-sm p-2"
                        : "bg-black/10 text-black/70 hover:text-black/70 rounded-sm p-2"
                      : "bg-white/10 text-white/70 hover:text-white/80 rounded-sm p-2"
                  }
								`}
                >
                  {icon}
                </Link>
                <div className="relative w-full flex justify-center items-center group">
                  <Tooltip title={lang ? name : nameE} theme={theme} />
                </div>
              </li>
            )
          )}
        </ul>
        <div className="flex flex-col gap-4">
          <Cv theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
          <Language
            theme={theme}
            setTheme={setTheme}
            lang={lang}
            setLang={setLang}
          />
          <Theme theme={theme} setTheme={setTheme} lang={lang} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Sidebar;
