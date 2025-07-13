import Logo from "../Logo";
import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex items-end ">
      <Logo className="mr-18" />
      <ul className="flex space-x-4 gap-4">
        <li>
          <Link href="/" className="text-muted hover:text-accent">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-muted hover:text-accent">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-muted hover:text-accent">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
