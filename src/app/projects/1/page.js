import ProjectPage from "@/app/components/ProjectPage";
import BackToProjectsPage from "@/app/components/BackToProjectsPage";

export default function Project1() {
  return (
    <main>
      <BackToProjectsPage />
      <ProjectPage
        h1content="DietDine"
        p1content={
          "An app that helps users to quickly and easily locate eateries in their local area that tailor to their specific dietary and accessibility needs."
        }
        p2content={
          "...my work in the NHS as a dietetic assistant practitioner.One of the most difficult diets to do is the low FODMAP diet - a 6-8 week diet that restricts high FODMAP foods and gradually reintroduces them. One of the biggest barriers that stopped patients from wanting to do the diet, and feedback from those who had completed the diet found that it was so difficult to go out to eat. I suggested to my team maybe making some sort of locally available online site where patients could anonymously post restaurants that they had found in the local area, but it didn't seem feasible at the time."
        }
      />
    </main>
  );
}
