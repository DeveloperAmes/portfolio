import Link from "next/link";
import headerStyles from "@/app/styles/header.module.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function HeaderNav() {
  return (
    <nav>
      <div className={headerStyles.navbar_phone}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className={headerStyles.dropdown_btn} aria-label="Menu">
              <HamburgerMenuIcon className={headerStyles.hamburger} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className={headerStyles.dropdown_menu}
              sideOffset={2}
            >
              <DropdownMenu.Item className={headerStyles.dropdown_item}>
                <Link href={"/"}>Home</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className={headerStyles.dropdown_item}>
                <Link href={"/about"}>About</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className={headerStyles.dropdown_item}>
                <Link href={"/projects"}>Projects</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className={headerStyles.dropdown_item}>
                <Link href={"/contact"}>Contact</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <nav className={headerStyles.navbar_desktop}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>
    </nav>
  );
}
