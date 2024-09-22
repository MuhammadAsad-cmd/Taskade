"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  const liClasses = `text-sm cursor-pointer flex items-center min-h-8 px-2 shadow-none transition-colors duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-700 rounded-lg gap-1 ${
    isActive ? "bg-gray-100 " : ""
  }`;

  return (
    <Link href={href} passHref>
      <div className={liClasses}>{children}</div>
    </Link>
  );
};

export default SidebarLink;
