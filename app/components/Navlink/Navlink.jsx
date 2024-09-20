"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children, end }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  const liClasses = `hover:text-vivid-pink text-gray-600 duration-300 ease-in-out text-sm cursor-pointer flex items-center min-h-8 px-2 rounded-full gap-1 ${
    isActive ? "bg-gray-100 text-vivid-pink" : ""
  }`;

  return (
    <Link href={href} passHref>
      <div className={liClasses}>{children}</div>
    </Link>
  );
};

export default Navlink;
