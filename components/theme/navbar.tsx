"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import NavItem from "./nav-item";

export default function Navbar() {
  const activeLink = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [activeLink, isMenuOpen]);

  return (
    <nav
      className="navbar is-fixed-top is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <Image
            src="/images/logo-typo.webp"
            alt="Logo which is written { @ } JOAOMARCUSLF"
            height="28"
            width="177"
          />
        </div>

        <button
          type="button"
          className={`navbar-burger burger ${isMenuOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
        <div className="navbar-start">
          <NavItem href="/" text="Home" isActive={activeLink === "/"} />
          <NavItem
            href="/about-me"
            text="About Me"
            isActive={activeLink?.includes("/about-me")}
          />
          <NavItem
            href="/projects"
            text="Projects"
            isActive={activeLink?.includes("/projects")}
          />
          {/* <NavItem
            href="/mentorship"
            text="Mentorship"
            isActive={activeLink?.includes("/mentorship")}
          /> */}
        </div>

        <div className="navbar-end">
          <NavItem
            href="/blog"
            text="Blog"
            isBlog
            isActive={
              activeLink?.includes("/posts") || activeLink?.includes("/blog")
            }
          />
        </div>
      </div>
    </nav>
  );
}
