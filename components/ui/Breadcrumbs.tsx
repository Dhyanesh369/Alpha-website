"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");

  if (pathname === "/") return null;

  return (
    <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8 overflow-x-auto whitespace-nowrap hide-scrollbar py-2">
      <Link 
        href="/" 
        className="flex items-center gap-1.5 hover:text-[#C8A96A] transition-colors group"
      >
        <Home className="w-3 h-3 group-hover:scale-110 transition-transform" />
        <span>Home</span>
      </Link>
      
      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;
        const name = path.replace(/-/g, " ");

        return (
          <div key={path} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 opacity-50" />
            {isLast ? (
              <span className="text-[#C8A96A]">{name}</span>
            ) : (
              <Link 
                href={href} 
                className="hover:text-white transition-colors"
              >
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
