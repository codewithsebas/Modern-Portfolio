import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { InterfaceLayout } from "@/interfaces/Interface";
import { motion } from "framer-motion";

// ESPECIFICA RUTA PARA ACTIVAR ICONO EN DONDE ESTAS EXACTAMENTE
import { useRouter } from "next/router";

const Layout = ({
  children,
  theme,
  setTheme,
  lang,
  setLang,
}: InterfaceLayout) => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <div
      className={`${
        theme
          ? "h-screen bg-gradient-to-b from-[#ffffff] to-white text-black"
          : "h-screen bg-gradient-to-b from-[#111010] to-black text-white"
      }`}
    >
      {/* <Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} /> */}
      <div className="w-full h-full max-h-screen flex justify-center sm:p-4 lg:py-5 2xl:py-20 py-2 px-3">
        <div className="w-full max-w-4xl 2xl:max-w-6xl flex gap-3 rounded-md relative">
          <div className="lg:block hidden">
            <div
              className={`${
                theme
                  ? "absolute left-96 top-32 w-60 h-60 rounded-full animate-bg bg-red-500/50 blur-3xl"
                  : "absolute left-96 top-32 w-60 h-60 rounded-full animate-bg bg-red-500/30 blur-3xl"
              }`}
            ></div>

            <div
              className={`${
                theme
                  ? "absolute right-14 top-20 w-20 h-20 rounded-full animate-bg2 bg-blue-300 blur-3xl"
                  : "absolute right-14 top-20 w-20 h-20 rounded-full animate-bg2 bg-blue-300 blur-3xl"
              }`}
            ></div>

            <div
              className={`${
                theme
                  ? "absolute left-10 bottom-20 w-60 h-60 rounded-full animate-bg3 bg-fuchsia-500/20 blur-xl"
                  : "absolute left-10 bottom-20 w-72 h-60 rounded-full animate-bg3 bg-fuchsia-500/10 blur-xl"
              }`}
            ></div>
            <div
              className={`${
                theme
                  ? "absolute left-4 bottom-5 w-5 h-5 rounded-full animate-ping bg-black/20 blur-xl"
                  : "absolute left-4 bottom-5 w-5 h-5 rounded-full animate-ping bg-white/20 blur-xl"
              }`}
            ></div>
          </div>
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
                ? "flex gap-2 w-full h-full rounded-md text-black/80 backdrop-blur-3xl"
                : "flex gap-2 w-full h-full rounded-md text-white/80 backdrop-blur-3xl"
            }`}
          >
            <div className="lg:block hidden">
              <Sidebar
                asPath={asPath}
                theme={theme}
                setTheme={setTheme}
                lang={lang}
                setLang={setLang}
              />
            </div>
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
