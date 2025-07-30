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
        "font-montserrat w-[120px] text-center py-3 rounded-full transition",
        "font-bold italic text-[14px] leading-[0.61]",
        isActive ? "bg-white text-black" : "text-white hover:bg-white/10"
      )}
    >
      {children}
    </Link>
  );
}
