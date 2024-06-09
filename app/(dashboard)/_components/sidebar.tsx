import React from "react";
import Logo from "./logo";
import { Siemreap } from "next/font/google";
import { SidebarRoutes } from "./sidebar-routes";

export default function SideBar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}
