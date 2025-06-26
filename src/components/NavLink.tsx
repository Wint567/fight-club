"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import clsx from "classnames";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2 rounded-full transition",
        "font-bold italic text-base leading-[0.61]",
        isActive ? "bg-white text-black" : "text-white hover:bg-white/10"
      )}
    >
      {children}
    </Link>
  );
}
