import Link from "next/link";
import Image from "next/image";

export default function BackToProjectsPage() {
  return (
    <Link href={"/projects"}>
      <Image src={"/assets/backarrow.png"} alt="" height={20} width={20} />
      Back to Projects
    </Link>
  );
}
