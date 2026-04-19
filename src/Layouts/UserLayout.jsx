import React from "react";
import Appbar from "../components/ui/Appbar";
import Sidebar from "../components/ui/Sidebar";
import { Outlet } from "react-router-dom";
import { useSidebar } from "../contextAPI/SidebarContext";

const UserLayout = () => {
  const { isOpen, setIsOpen } = useSidebar(); // Ensure your context has a setter

  return (
    <div className="flex flex-col h-screen overflow-hidden relative">
      <Appbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Backdrop: Closes sidebar when clicking outside */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        <Sidebar />

        <main className="flex-1 overflow-y-auto p-4 bg-base-100 custom-scrollbar">
          <div className="max-w-600 mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
