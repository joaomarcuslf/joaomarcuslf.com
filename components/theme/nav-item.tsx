import Link from "next/link";

export default function NavItem({
  href,
  text,
  isActive,
}: Readonly<{
  href: string;
  text: string;
  isActive: boolean;
}>) {
  return (
    <Link className={`navbar-item ${isActive ? "is-active" : ""}`} href={href}>
      {text}
    </Link>
  );
}
