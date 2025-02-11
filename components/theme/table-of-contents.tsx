"use client";

import { useState, useEffect } from "react";

export default function TOC() {
  const [isVisibile, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [headings, setHeadings] = useState<
    {
      elm: HTMLElement;
      text: string;
    }[]
  >([]);

  useEffect(() => {
    const result = [];
    const headings = Array.from(document.querySelectorAll("h2"));

    const introduction = document.querySelector(".introduction");

    if (introduction) {
      result.push({
        elm: introduction as HTMLElement,
        text: "Introduction",
      });
    }

    if (headings.length) {
      headings.forEach((heading) => {
        result.push({
          elm: heading as HTMLElement,
          text: heading.textContent || "",
        });
      });
    }

    setHeadings(result);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
      setIsExpanded(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClick = (event: React.MouseEvent, elm: HTMLElement) => {
    event.preventDefault();
    elm.scrollIntoView({ behavior: "smooth" });

    setIsExpanded(false);
  };

  let className = "is-invisible";

  if (isVisibile) {
    if (isExpanded) {
      className = "is-maximized";
    } else {
      className = "is-minimized";
    }
  }

  return (
    <nav className={`table-of-contents ${className}`} role="table of contents">
      <h3>
        <button
          className={`button has-icon has-text is-light is-rounded is-outlined no-border ${
            isExpanded ? "" : "is-flipped"
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="icon is-large">
            <i className={`fas fa-chevron-down`}></i>
          </span>
          <span className="ml-1">Table of Contents</span>
        </button>
      </h3>
      <ul className="content">
        {headings.map((heading, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={(event: React.MouseEvent) => onClick(event, heading.elm)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
