import { TooltipInterface } from "@/interfaces/Interface";
import type { FC } from "react";

export const Tooltip: FC<TooltipInterface> = ({
	title,
	theme,
}: TooltipInterface) => {
	return (
		<div className="absolute right-0 left-14 items-center flex group-hover:opacity-100 pointer-events-none opacity-0 transition-all duration-300">
			<div
				className={`${
					theme
						? "relative whitespace-nowrap rounded bg-gray-100 border border-gray-300 px-3 py-1 text-sm font-light text-gray-900 drop-shadow-xl z-20 duration-150"
						: "relative whitespace-nowrap rounded bg-gray-800 border border-gray-700 px-3 py-1 text-sm font-light text-gray-300 drop-shadow-xl z-20 duration-150"
				}`}>
				<div className="absolute inset-y-0 -left-[5px] flex items-center -z-10">
					<div
						className={`w-2 h-2 rotate-45 duration-150 ${
							theme
								? "bg-gray-100 border-l border-b border-gray-300"
								: "bg-gray-800 border-l border-b border-gray-700"
						}`}></div>
				</div>
				{title}
			</div>
		</div>
	);
};
