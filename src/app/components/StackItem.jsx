import Image from "next/image";

export default function StackItem({ src, alt, height, width }) {
  return <Image src={src} alt={alt} height={50} width={50} />;
}
