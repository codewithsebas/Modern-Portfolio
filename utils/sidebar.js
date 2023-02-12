import { HiHome, HiBriefcase, HiFolderOpen } from "react-icons/hi";
import { FaAddressBook, FaPalette } from "react-icons/fa";

export const SidebarItems = [
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
    nameE: "Sobre mí",
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
    href: "/design",
    icon: <FaPalette />,
    name: "UI/UX Designer",
    description: "Design",
    nameE: "Diseños UI/UX",
    descriptionE: "Diseños",
  },
];
