import Link from "next/link";

export default function NavItem({
  href,
  text,
  isActive,
  isBlog,
}: Readonly<{
  href: string;
  text: string;
  isActive: boolean;
  isBlog?: boolean;
}>) {
  return (
    <Link className={`navbar-item ${isActive ? "is-active" : ""} ${isBlog ? "is-blog" : ""}`} href={href}>
      {text}
    </Link>
  );
}
