import Link from "next/link";
import cardStyles from "@/app/styles/projectcard.module.css";

export default function ProjectCard() {
  return (
    <section className={cardStyles.card}>
      <h6>Project Name</h6>
      <Link href={"#"}>Link to Project Page</Link>
      <div>Placeholder img</div>
    </section>
  );
}
