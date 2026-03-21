import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/boutique", label: "Boutique" },
  { to: "/collections", label: "Collections" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") ?? "";
    if (location.pathname === "/recherche") {
      setSearchValue(query);
    }
  }, [location.pathname, location.search]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = searchValue.trim();
    if (!trimmed) return;
    navigate(`/recherche?q=${encodeURIComponent(trimmed)}`);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="relative flex items-center h-16 md:h-20 px-6 lg:px-10">
        {/* Left: Mobile menu button + Logo */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Logo />
        </div>

        {/* Center: Main nav (desktop) */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs tracking-widest uppercase font-sans transition-colors duration-300 hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Search + Secondary nav + Cart (desktop) */}
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <form className="relative" onSubmit={handleSearchSubmit}>
            <Search className="w-4 h-4 text-foreground/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Rechercher..."
              aria-label="Rechercher"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              className="h-9 w-44 lg:w-56 rounded-full border border-border/60 bg-background/60 pl-9 pr-3 text-sm font-sans tracking-wide text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </form>
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs tracking-widest uppercase font-sans transition-colors duration-300 hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/panier" className="relative p-2 hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-sans">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile cart */}
        <Link to="/panier" className="md:hidden ml-auto relative p-2 hover:text-primary transition-colors">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-sans">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <nav className="container flex flex-col py-6 gap-4">
            <form className="relative" onSubmit={handleSearchSubmit}>
              <Search className="w-4 h-4 text-foreground/60 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                placeholder="Rechercher..."
                aria-label="Rechercher"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className="h-10 w-full rounded-full border border-border/60 bg-background/60 pl-9 pr-3 text-sm font-sans tracking-wide text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </form>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-widest uppercase font-sans transition-colors py-2 ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
