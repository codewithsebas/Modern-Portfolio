import {
	HiHome,
	HiColorSwatch,
	HiBriefcase,
	HiFolderOpen,
} from "react-icons/hi";
import { FaBook, FaAddressBook, FaUsers } from "react-icons/fa";

export const Navbar = [
	{
		id: 1,
		href: "/",
		icon: <HiHome />,
        name: "Home",
		description: "Home",
	},
    {
		id: 2,
		href: "/about",
		icon: <FaAddressBook />,
        name: "About",
		description: "About",
	},
    {
		id: 3,
		href: "/experience",
		icon: <HiBriefcase />,
        name: "Experience",
		description: "Experience",
	},
    {
		id: 4,
		href: "/skills",
		icon: <HiColorSwatch />,
        name: "Skills",
		description: "Skills",
	},
    {
		id: 5,
		href: "/projects",
		icon: <HiFolderOpen />,
        name: "Projects",
		description: "Projects",
	},
    {
		id: 6,
		href: "/networking",
		icon: <FaUsers />,
        name: "Networking",
		description: "Networking",
	},
    {
		id: 7,
		href: "/contact",
		icon: <FaBook />,
        name: "Contact",
		description: "Contact",
	},
];
