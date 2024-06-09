"use client";

import { LucideProps } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { ForwardRefExoticComponent, SVGProps } from "react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
}

export default function SidebarItem({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) {
  const pathName = usePathname();
  const router = useRouter();
  const isActive =
    (pathName === "/" && href === "/") ||
    pathName === href ||
    pathName?.startsWith(`${href}/`);

  console.log(isActive);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          fontSize={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        <div>{label}</div>
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all", isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
}
