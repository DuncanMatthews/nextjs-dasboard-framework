import React from "react";
import SideBar from "./_components/sidebar";
import Navbar from "./_components/navbar";

export default function LayoutDasboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0">
        <SideBar />
      </div>
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
}
