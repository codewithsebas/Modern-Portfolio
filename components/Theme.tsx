import { MdLightMode, MdNightlight } from "react-icons/md";

type Props = {
	theme: boolean;
	setTheme: boolean | any;
};
// Do NOT use this! It will throw a hydration mismatch error.
const Theme = ({ theme, setTheme }: Props) => {
	return (
		<div className="absolute left-0 right-0 bottom-0 gap-2">
			<div
				onClick={() => setTheme(!theme)}
				className={`${
					theme
						? "text-black/70 cursor-pointer"
						: "text-white/70 cursor-pointer"
				}`}>
				{theme ? <MdNightlight /> : <MdLightMode />}
			</div>
		</div>
	);
};

export default Theme;
