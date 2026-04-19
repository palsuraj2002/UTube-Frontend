import React from "react";
import AvatarProfile from "./AvatarProfile";
import { Bell, Plus, Search, Mic, Menu } from "lucide-react";
import { useSidebar } from "../../contextAPI/SidebarContext";

const Appbar = () => {
  const { toggle } = useSidebar();

  return (
    /* Added 'z-50' to keep it above content and 'w-full' to ensure it spans the screen */
    <div className="navbar bg-base-100 shadow-sm flex flex-row justify-between items-center px-3 sticky top-0 z-50 w-full">
      {/* Left Section */}
      <div className="flex items-center">
        <button className="btn btn-ghost btn-circle" onClick={toggle}>
          <Menu />
        </button>
        <a className="btn btn-ghost text-xl normal-case font-bold tracking-tighter">
          UTube
        </a>
      </div>

      {/* Center Section: Search */}
      <div className="hidden md:flex flex-row items-center gap-3.5 flex-1 justify-center max-w-180">
        <div className="flex w-full group">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full rounded-l-full focus:outline-primary focus:border-primary pl-5"
          />
          <button
            className="flex items-center justify-center px-5 bg-base-200 border border-l-0 border-base-300 rounded-r-full hover:bg-base-300 transition-colors"
            title="Search"
          >
            <Search size={20} />
          </button>
        </div>
        <button
          className="btn btn-circle btn-ghost bg-base-200"
          title="Search with your voice"
        >
          <Mic size={20} />
        </button>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="btn btn-ghost rounded-full hidden sm:flex">
          <Plus size={20} />
          <span>Create</span>
        </button>

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Bell size={24} />
            <span className="badge badge-error badge-xs indicator-item">
              9+
            </span>
          </div>
        </button>

        <AvatarProfile />
      </div>
    </div>
  );
};

export default Appbar;
