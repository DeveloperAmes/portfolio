import homepageStyles from "./homepage.module.css";
import Image from "next/image";
import StackItem from "./components/StackItem";

export default function Home() {
  return (
    <main>
      <section className={homepageStyles.about_section}>
        <div className={homepageStyles.img_div}>
          <Image
            src="/assets/profilepic2.jpg"
            alt=""
            width={250}
            height={400}
            className={homepageStyles.profile_img}
          />
        </div>
        <div className={homepageStyles.about_text}>
          <p>
            Hi, I&apos;m Amy and welcome to my personal portfolio page.
            <br />
            <br />
            I&apos;m a software developer transitioning from a career in
            healthcare who builds websites around her passions; public health
            and wellbeing, equality, and with a focus on accessibility.
          </p>
        </div>
      </section>
      <section className={homepageStyles.stack_section}>
        <h4>My Tech Stack</h4>
        <div className={homepageStyles.stack_grid}>
          <StackItem src={"/assets/HTML5.png"} alt={"HTML5 icon"} />
          <StackItem src={"/assets/CSS3.png"} alt={"CSS3 icon"} />
          <StackItem src={"/assets/JavaScript.png"} alt={"JavaScript icon"} />
          <StackItem src={"/assets/TypeScript.png"} alt={"TypeScript icon"} />
          <StackItem src={"/assets/Next.js.png"} alt={"Next.js icon"} />
          <StackItem src={"/assets/Node.js.png"} alt={"Node.js icon"} />
          <StackItem
            src={"/assets/PostgresSQL.png"}
            alt={"Postgres SQL icon"}
          />
          <StackItem src={"/assets/Python.png"} alt={"Python icon"} />
          <StackItem src={"/assets/React.png"} alt={"React icon"} />
          <StackItem
            src={"/assets/Tailwind CSS.png"}
            alt={"Tailwind CSS icon"}
          />
        </div>
      </section>
      <section className={homepageStyles.projects_section}>
        <h5>Recently Added Projects</h5>
      </section>
    </main>
  );
}
