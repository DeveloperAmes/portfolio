import Link from "next/link";
import Image from "next/image";
import linkStyles from "@/app/styles/backtoprojects.module.css";

export default function BackToProjectsPage() {
  return (
    <Link href={"/projects"} className={linkStyles.link}>
      <Image
        src={"/assets/backarrow.png"}
        alt=""
        height={20}
        width={20}
        className={linkStyles.arrow}
      />
      Back to Projects
    </Link>
  );
}
