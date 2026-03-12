import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        <li>
          <h2>Project 1 Title</h2>
          <Link href={"/projects/1"}>Link to Project 1</Link>
        </li>
        <li>
          <h2>Project 2 Title</h2>
          <Link href={"/projects/2"}>Link to Project 2</Link>
        </li>
        <li>
          <h2>Project 3 Title</h2>
          <Link href={"/projects/3"}>Link to Project 3</Link>
        </li>
        <li>
          <h2>Project 4 Title</h2>
          <Link href={"/projects/4"}>Link to Project 4</Link>
        </li>
      </ul>
    </main>
  );
}
