import HeaderNav from "./HeaderNav";
import headerStyles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <HeaderNav />
      <h1>Amy Tuck</h1>
      <h2>Software Developer</h2>
    </header>
  );
}
