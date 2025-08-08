import Link from "next/link";

function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`text-logo font-sans text-2xl font-medium ${className}`}
    >
      <span>&lt;</span>
      <span>ALAN TAY</span>
      <span>/&gt;</span>
    </Link>
  );
}

export default Logo;
