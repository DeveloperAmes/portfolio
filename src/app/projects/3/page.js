import BackToProjectsPage from "@/app/components/BackToProjectsPage";
import ProjectPage from "@/app/components/ProjectPage";

export default function Project3() {
  return (
    <main>
      <BackToProjectsPage />
      <ProjectPage
        h1content="Kickabout Site"
        p1content={
          "A website that helps to connect users who want to meet up and play sport casually, making exercise less restrictive and more fun."
        }
        p2content={
          "...the large proportion of people who don't have the time or energy to regularly attend local clubs or learn all the rules of a sport and just want to move their bodies for fun."
        }
        p3content={
          <ul>
            <li>{"React"}</li>
            <li>{"NextJS"}</li>
            <li>{"CSS Modules"}</li>
            <li>{"PostgresSQL"}</li>
            <li>{"Clerk auth"}</li>
            <li>{"React Icons"}</li>
            <li>{"UK Towns API"}</li>
            <li>{"Flaticons"}</li>
            <li>{"Lottiefiles"}</li>
          </ul>
        }
      />
    </main>
  );
}
