import { TooltipInterface } from "@/interfaces/Interface";
import type { FC } from "react";

export const Tooltip: FC<TooltipInterface> = ({
	title,
	theme,
}: TooltipInterface) => {
	return (
		<div className="absolute right-12 items-center flex group-hover:opacity-100 pointer-events-none opacity-0 transition-all duration-300">
			<div
				className={`${
					theme
						? "relative whitespace-nowrap rounded-sm bg-white border border-gray-300 px-3 py-1 text-sm font-light text-gray-900 drop-shadow-xl z-20 duration-0"
						: "relative whitespace-nowrap rounded-sm bg-neutral-800 border border-white/20 px-3 py-1 text-sm font-light text-gray-300 drop-shadow-xl z-20 duration-0"
				}`}>
				<div className="absolute inset-y-0 -right-[5px] flex items-center -z-10">
					<div
						className={`w-2 h-2 rotate-45 duration-0 ${
							theme
								? "bg-white border-r border-t border-gray-300"
								: "bg-neutral-800 border-r border-t border-white/30"
						}`}></div>
				</div>
				{title}
			</div>
		</div>
	);
};
