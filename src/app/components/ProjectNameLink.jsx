import Link from "next/link";

export default function ProjectNameLink({ href, title }) {
  {
  }
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
}
