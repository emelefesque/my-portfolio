"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        padding: "1.5rem var(--space-md)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Link href="/" style={{ fontWeight: 700, fontSize: 20 }}>
        Megan — Portfolio
      </Link>

      <nav style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <Link href="/projects" className={pathname.includes("/projects") ? "active" : ""}>
          Projects
        </Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
