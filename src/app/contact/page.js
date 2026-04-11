import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <section>
        <h1>Contact Me:</h1>
        <ul>
          <li>Email</li>
          <li>
            <Link href="https://www.linkedin.com/in/amyltuck/">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://github.com/DeveloperAmes">GitHub</Link>
          </li>
          <li>
            <Link href="https://discordapp.com/users/1355101368792383559">
              Discord
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/things_that_amy_made/">
              Instagram
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
