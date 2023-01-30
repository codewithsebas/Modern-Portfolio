import {
	HiHome,
	HiBriefcase,
	HiFolderOpen,
} from "react-icons/hi";
import { FaTelegram, FaAddressBook, FaUsers } from "react-icons/fa";

export const Navbar = [
	{
		id: 1,
		href: "/",
		icon: <HiHome />,
        name: "Home",
		description: "Home",
		nameE: "Inicio",
		descriptionE: "Inicio",
	},
    {
		id: 2,
		href: "/about",
		icon: <FaAddressBook />,
        name: "About",
		description: "About",
		nameE: "Conoceme",
		descriptionE: "Sobre mi",
	},
    {
		id: 3,
		href: "/experience",
		icon: <HiBriefcase />,
        name: "Experience",
		description: "Experience",
		nameE: "Experiencia",
		descriptionE: "Experiencia",
	},
    {
		id: 4,
		href: "/projects",
		icon: <HiFolderOpen />,
        name: "Projects",
		description: "Projects",
		nameE: "Proyectos",
		descriptionE: "Proyectos",
	},
    {
		id: 5,
		href: "/networking",
		icon: <FaUsers />,
        name: "Networking",
		description: "Networking",
		nameE: "Red",
		descriptionE: "Red",
	},
    {
		id: 6,
		href: "/contact",
		icon: <FaTelegram />,
        name: "Contact",
		description: "Contact",
		nameE: "Contacto",
		descriptionE: "Contacto",
	},
];
