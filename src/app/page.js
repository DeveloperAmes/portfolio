import homepageStyles from "./homepage.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className={homepageStyles.about_section}>
        <div>
          <h1>Amy Tuck</h1>
          <h2>Software Developer</h2>
          <Image
            src="/assets/profilepic2.jpg"
            alt=""
            width={250}
            height={400}
            className={homepageStyles.profile_img}
          />
        </div>
        <div className={homepageStyles.about_text}>
          <h3>A Little Intro...</h3>
          <br />
          <p>
            Hi, I&apos;m Amy and welcome to my personal portfolio page.
            <br />
            <br />
            I&apos;m an entry-level software developer transitioning from a
            career in healthcare who builds websites around her passions; public
            health and wellbeing, equality, and with a focus on accessibility.
          </p>
        </div>
      </section>
      <section className={homepageStyles.stack_section}>
        <h4>My Tech Stack</h4>
        <div className={homepageStyles.stack_grid}></div>
      </section>
      <section className={homepageStyles.projects_section}>
        <h5>Recently Added Projects</h5>
      </section>
    </main>
  );
}
