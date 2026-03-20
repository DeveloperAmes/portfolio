import Link from "next/link";
import headerStyles from "@/app/styles/header.module.css";

export default function HeaderNav() {
  return (
    <nav className={headerStyles.navbar}>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/contact"}>Contact</Link>
    </nav>
  );
}
