import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav>
      <Link href={"/about"}>About</Link>
      <Link href={"/projects"}>Projects</Link>
    </nav>
  );
}
