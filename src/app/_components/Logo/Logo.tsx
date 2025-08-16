import Link from "next/link";

function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`text-logo font-mono text-2xl font-medium ${className}`}
    >
      <span>&lt;</span>
      <span className="ml-1">ALAN-TAY</span>
      <span>/&gt;</span>
    </Link>
  );
}

export default Logo;
