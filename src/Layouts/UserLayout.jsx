import React from "react";
import Appbar from "../components/ui/Appbar";
import Sidebar from "../components/ui/Sidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    /* h-screen prevents the whole page from scrolling, allowing internal sections to scroll */
    <div className="flex flex-col h-screen overflow-hidden">
      {/* 1. Appbar stays at the top */}
      <Appbar />

      <div className="flex flex-1 overflow-hidden">
        {/* 2. Sidebar - Should have h-full and overflow-y-auto internally if it's long */}
        <Sidebar />

        {/* 3. Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-base-100 custom-scrollbar">
          {/* Outlet renders the page content (Video Grid, Shorts, etc.) */}
          <div className="max-w-600 mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
