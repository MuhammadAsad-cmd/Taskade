"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children, end }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  const liClasses = `duration-300 ease-in-out text-sm cursor-pointer flex items-center min-h-8 px-2 rounded-full gap-1 ${
    isActive ? "" : ""
  }`;

  return (
    <Link href={href} passHref>
      <div className={liClasses}>{children}</div>
    </Link>
  );
};

export default Navlink;
