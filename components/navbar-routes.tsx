"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function NavbarRoutes() {
  const pathName = usePathname();
  const router = useRouter();
  const isTeacherPage = pathName?.startsWith("/teacher");
  const isPlayerPage = pathName?.includes("/chapter");
  return (
    <div className=" flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Button>
          <LogOut className="h-4 w-4 mr-2" />
        </Button>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm">Teacher Mode</Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
}
