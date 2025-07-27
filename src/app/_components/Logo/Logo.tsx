import Link from "next/link";

function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`text-2xl text-logo ${className} font-sans font-medium`}
    >
      <span>&lt;</span>
      <span>ALAN TAY</span>
      <span>/&gt;</span>
    </Link>
  );
}

export default Logo;
