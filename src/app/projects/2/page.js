import ProjectPage from "@/app/components/ProjectPage";
import BackToProjectsPage from "@/app/components/BackToProjectsPage";

export default function Project2() {
  return (
    <main>
      <BackToProjectsPage />
      <ProjectPage
        h1content="Tiny Wins Social Media Site"
        p1content={
          "A website that helps users to celebrate their small wins to help build habits and/or get things done that they struggle with. The site encourages users to share their wins with others who can celebrate with them to provide that extra feel-good boost."
        }
        p2content={
          "...my own experiences in which I  struggle with executive dysfunction and need some encouragement to help me get things done."
        }
        p3content={
          <ul>
            <li>{"React"}</li>
            <li>{"NextJS"}</li>
            <li>{"Tailwind CSS and CSS Modules"}</li>
            <li>{"PostgresSQL"}</li>
            <li>{"Clerk auth"}</li>
          </ul>
        }
      />
    </main>
  );
}
