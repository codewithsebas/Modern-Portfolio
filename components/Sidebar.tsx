import { motion } from "framer-motion";
import Theme from "./Theme";
import Link from "next/link";
import Language from "./Language";
import { InterfaceThemePath } from "@/interfaces/Interface";
import { SidebarItems } from "../utils/sidebar";
import Cv from "./Cv";

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
              ? "flex flex-col items-center gap-3 text-black/50"
              : "flex flex-col items-center gap-3 text-white/50"
          }`}
        >
          {SidebarItems.map(
            ({ id, href, icon, name, description, nameE, descriptionE }) => (
              <li
                key={id}
                className="cursor-pointer text-2xl group max-w-max relative flex items-center justify-center"
              >
                <Link
                  aria-label={lang ? description : descriptionE}
                  href={href}
                  className={`${
                    !theme && asPath === href
                      ? "bg-white/10 text-white/90 hover:text-white rounded-md p-2"
                      : "bg-black/5 text-black/70 hover:text-black/70 rounded-md p-2"
                      ? asPath !== href
                        ? theme
                          ? "hover:bg-black/5 hover:text-black/70 rounded-md p-2"
                          : "hover:bg-white/10 hover:text-white rounded-md p-2"
                        : "bg-black/10 text-black/70 hover:text-black/70 rounded-md p-2"
                      : "bg-white/10 text-white/70 hover:text-white/80 rounded-md p-2"
                  }
								`}
                >
                  {icon}
                </Link>
                <div className="group-hover:[transform:perspective(10px)] z-30 absolute top-[1.5px] right-[3.2rem] origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
                  <div className="flex max-w-xs flex-col items-center pointer-events-none">
                    <div
                      className={`${
                        theme
                          ? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
                          : "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
                      }`}
                    >
                      {lang ? name : nameE}
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
        <div className="w-full flex flex-col items-center gap-12">
          <Cv theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
          <div className="w-full cursor-pointer text-2xl group max-w-max relative flex items-center justify-center">
            <Language
              theme={theme}
              setTheme={setTheme}
              lang={lang}
              setLang={setLang}
            />
            <div className="group-hover:[transform:perspective(10px)] z-30 absolute bottom-1 right-7 origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
              <div className="flex max-w-xs flex-col items-center pointer-events-none">
                <div
                  className={`${
                    theme
                      ? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
                      : "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
                  }`}
                >
                  {lang
                    ? lang
                      ? "Spanish"
                      : "Español"
                    : lang
                    ? "English"
                    : "Ingles"}
                </div>
              </div>
            </div>
            <div
              className={`${
                theme
                  ? "rounded-sm absolute bottom-8 text-[10px] text-black/70"
                  : "rounded-sm absolute bottom-8 text-[10px] text-white"
              }`}
            >
              {lang ? "EN" : "ES"}
            </div>
          </div>
          <div className="w-full cursor-pointer text-3xl group max-w-max relative flex items-center justify-center">
            <Theme theme={theme} setTheme={setTheme} />
            <div className="group-hover:[transform:perspective(10px)] z-30 absolute -bottom-1 right-7 origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
              <div className="flex max-w-xs flex-col items-center pointer-events-none">
                <div
                  className={`${
                    theme
                      ? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
                      : "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
                  }`}
                >
                  {lang
                    ? theme
                      ? "Dark"
                      : "Ligth"
                    : theme
                    ? "Oscuro"
                    : "Claro"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Sidebar;
