import Image from "next/image";
import stackItemStyles from "@/app/styles/stackitem.module.css"

export default function StackItem({ src, alt, height, width }) {
  return <Image src={src} alt={alt} height={75} width={75} className={stackItemStyles.img}/>;
}
