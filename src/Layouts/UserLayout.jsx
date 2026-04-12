import React from "react";
import Appbar from "../components/ui/Appbar";
import Sidebar from "../components/ui/Sidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Appbar />
      <div className="flex ">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 bg-base-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
