"use client";
import { useRef } from "react";

import useExpandView from "@/hooks/useExpandView";

interface HighlightProps<T> {
  children: React.ReactNode;
  section: string;
  sectionType?: string;
}

export default function Highlight<T>({
  children,
  section,
  sectionType = section,
}: HighlightProps<T>) {
  const highlightsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const expandView = useExpandView();

  return (
    <>
      <div
        className={`${sectionType}s-section-group is-highlight`}
        ref={highlightsRef}
      >
        {children}
      </div>

      <div className="has-text-centered">
        <button
          className="button has-icon is-light is-rounded is-outlined"
          onClick={() => expandView(section, highlightsRef, buttonRef)}
          ref={buttonRef}
          role="button"
          aria-label="Expand Section Button"
        >
          <span className="icon is-large">
            <i className="fas fa-chevron-down"></i>
          </span>
        </button>
      </div>
    </>
  );
}
