"use client";

import hljs from "highlight.js";
import { useEffect } from "react";

export default function Hljs() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <></>;
}
