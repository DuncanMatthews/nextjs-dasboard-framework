"use client"; 


import React from "react";
import { Compass, Icon } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { Home } from "lucide-react";

const questRoutes = [
  {
    icon: Home,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/browse",
  },
];

export const SidebarRoutes = () => {
  const routes = questRoutes;
  return (
    <div className="flex flex-col">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
      
    </div>
  );
}
