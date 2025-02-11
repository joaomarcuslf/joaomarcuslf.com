"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import NavItem from "./nav-item";

export default function Navbar() {
  const activeLink = usePathname();

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
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenuTarget"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarMenuTarget" className="navbar-menu">
        <div className="navbar-start">
          <NavItem href="/" text="Home" isActive={activeLink === "/"} />
          <NavItem
            href="/posts"
            text="Posts"
            isActive={activeLink?.includes("/posts")}
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
          <NavItem
            href="/about-me"
            text="About Me"
            isActive={activeLink?.includes("/about-me")}
          />
        </div>

        {/* <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable lang-dropdown">
            <a className="navbar-link is-arrowless is-hidden-mobile">
              {% if  page.lang == "pt" or site.lang == "pt" %}
              <img
                src="https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/brazil-512.png"
                alt=""
              />
              {% else %}
              <img
                src="https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/usa-512.png"
                alt=""
              />
              {% endif %}
            </a> */}

        {/* <div className="navbar-dropdown is-boxed is-right">
          <a className="navbar-item" href="{{ page.url | prepend: "" }}">
            <img
              src="https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/usa-512.png"
              alt="">
            // <span>{% t global.languages.english %}</span>
          </a>
          <a className="navbar-item" href="{{ page.url | prepend: "/pt" }}">
            <img
              src="https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/brazil-512.png"
              alt="">
            // <span>{% t global.languages.portuguese %}</span>
          </a>
        </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </nav>
  );
}
