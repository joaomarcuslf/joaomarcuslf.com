import Link from "next/link";

export default function NavItem({
  href,
  text,
  isActive,
  isBlog,
  isResume,
}: Readonly<{
  href: string;
  text: string;
  isActive: boolean;
  isBlog?: boolean;
  isResume?: boolean;
}>) {
  return (
    <Link className={`navbar-item ${isActive ? "is-active" : ""} ${isBlog ? "is-blog" : ""} ${isResume ? "is-resume" : ""}`} href={href} target={isResume ? "blank" : "self"}>
      {text}
    </Link>
  );
}
