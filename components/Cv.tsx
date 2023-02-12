import { InterfaceThemeLanguage } from "@/interfaces/Interface";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Cv = ({ theme }: InterfaceThemeLanguage) => {
  return (
    <div className="flex gap-1 z-50 mb-7">
      <a
        href="/download/CV_WEB_2023.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="CV_WEB_2023.pdf"
        className="flex items-center gap-2 relative group"
      >
        <BsFileEarmarkPdfFill
          className={`${
            theme
              ? "flex items-center gap-3 text-black/70 text-2xl hover:text-black/80"
              : "flex items-center gap-3 text-white text-2xl"
          }`}
        />
        <div className="group-hover:[transform:perspective(0)] z-30 absolute -bottom-2 right-10 origin-top transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none">
          <div className="flex max-w-xs flex-col items-center pointer-events-none">
            <div
              className={`${
                theme
                  ? "rounded bg-white/90 backdrop-blur-xl text-black/70 p-2 text-sm text-center shadow-lg pointer-events-none"
                  : "rounded bg-white/20 backdrop-blur-xl text-white/70 p-2 text-sm text-center shadow-lg pointer-events-none"
              }`}
            >
              Curriculum
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Cv;
