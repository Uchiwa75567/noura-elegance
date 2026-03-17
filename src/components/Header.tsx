import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
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
  const { totalItems } = useCart();
  const location = useLocation();

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

        {/* Right: Secondary nav + Cart (desktop) */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
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
