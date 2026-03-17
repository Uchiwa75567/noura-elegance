import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="flex flex-col items-center gap-1 group">
    <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
      <span className="text-background font-serif text-xl leading-none">N</span>
    </div>
    <span className="font-serif tracking-[0.2em] text-[10px] font-medium uppercase">Noura</span>
  </Link>
);

export default Logo;
