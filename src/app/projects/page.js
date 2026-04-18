import Link from "next/link";
import ProjectNameLink from "../components/ProjectNameLink";

export default function ProjectsPage() {
  return (
    <main>
      <section>
        <h1>Projects</h1>
        <ul>
          <ProjectNameLink title={"DietDine"} href={"/projects/1"} />
          <ProjectNameLink title={"Tiny Wins"} href={"/projects/2"} />
          <ProjectNameLink title={"Kickabout"} href={"/projects/3"} />
          <ProjectNameLink
            title={"Mobile App (React Native) - Coming Soon"}
            href={"/projects/4"}
          />
        </ul>
      </section>
    </main>
  );
}
