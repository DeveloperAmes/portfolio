import HeaderNav from "./HeaderNav";
import headerStyles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <HeaderNav />
    </header>
  );
}
