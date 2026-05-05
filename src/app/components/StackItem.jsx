import Image from "next/image";
import stackItemStyles from "@/app/styles/stackitem.module.css";

export default function StackItem({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      height={50}
      width={50}
      className={stackItemStyles.img}
    />
  );
}
