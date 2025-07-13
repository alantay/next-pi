import { satoshi } from "../../fonts";

function Logo({ className = "" }) {
  return (
    <h1
      className={`text-xl text-brand font-extrabold ${className} ${satoshi.className}`}
    >
      Alan Tay
    </h1>
  );
}

export default Logo;
