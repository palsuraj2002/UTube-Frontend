import React from "react";
import AvatarProfile from "./AvatarProfile";
import { Bell, Plus, Search, Mic, Menu } from "lucide-react";
import { useSidebar } from "../../contextAPI/SidebarContext";

const Appbar = () => {
  const { toggle } = useSidebar();
  return (
    <div className="navbar bg-base-100 shadow-sm flex flex-row justify-between items-center align-middle px-3 sticky top-0">
      <div className="flex">
        <button
          className="flex items-center justify-center align-middle px-2.5 py-2 hover:bg-gray-800 rounded-full"
          onClick={toggle}
        >
          <Menu />
        </button>
        <a className="btn btn-ghost text-xl">UTube</a>
      </div>
      <div className="flex gap-3.5">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-md w-xl rounded-l-full "
          />
          <button className="flex items-center justify-center align-middle px-5 bg-gray-800 border-b border-r border-t rounded-r-full border-gray-700">
            <Search size={20} />
          </button>
        </div>
        <button className="flex items-center justify-center align-middle px-2.5 py-2 bg-gray-800 rounded-full">
          <Mic size={20} />
        </button>
      </div>
      <div className="flex justify-center items-center align-middle gap-7">
        <button className="btn btn-ghost rounded-full">
          <Plus />
          Create
        </button>
        <div className="indicator">
          <Bell size={25} />
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
        <AvatarProfile />
      </div>
    </div>
  );
};

export default Appbar;
