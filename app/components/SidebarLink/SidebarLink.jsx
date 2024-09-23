"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  const liClasses = `sidebarItem flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-[#1b1b23b3] hover:bg-customBlackTransparent ${
    isActive ? "bg-customBlackTransparent" : ""
  }`;

  return (
    <Link href={href} passHref>
      <div className={liClasses}>{children}</div>
    </Link>
  );
};

export default SidebarLink;
