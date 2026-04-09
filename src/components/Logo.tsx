import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="flex-shrink-0 group">
    <img
      src="/logo-noura.png"
      alt="NOURA"
      className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
    />
  </Link>
);

export default Logo;
