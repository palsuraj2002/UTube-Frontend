import { House, TvMinimalPlay } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../contextAPI/SidebarContext";

// 1. Static data stays outside to prevent re-creation
const NAV_ITEMS = [
  { id: 1, label: "Home", icon: House, path: "/" },
  { id: 2, label: "Shorts", icon: TvMinimalPlay, path: "/shorts" },
];

const Sidebar = () => {
  const { isOpen } = useSidebar();

  // 2. Helper for cleaner JSX
  const getNavLinkClass = (isActive) => {
    const base = "flex items-center transition-all duration-200 rounded-lg";
    const layout = isOpen
      ? "flex-row px-3 py-2 gap-4"
      : "flex-col px-0 py-2 gap-1 justify-center";

    const colors = isActive
      ? "bg-gray-700 text-white font-medium"
      : "bg-transparent hover:bg-gray-800";

    return `${base} ${layout} ${colors}`;
  };

  return (
    <aside
      className={`flex flex-col h-screen transition-all duration-300 ${
        isOpen ? "w-60" : "w-17"
      } ${isOpen ? "px-3" : "px-0"}` }
    >
      <nav className="flex flex-col gap-1 mt-2">
        {NAV_ITEMS.map(({ id, label, icon: Icon, path }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            <Icon size={23} className="shrink-0" />

            <span
              className={`whitespace-nowrap ${isOpen ? "text-sm" : "text-[10px]"}`}
            >
              {label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
