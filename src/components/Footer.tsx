import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background">
      {/* Logo */}
      <div className="container pt-16 pb-12">
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-2">
            <span className="text-foreground font-serif text-2xl leading-none">N</span>
          </div>
          <span className="font-serif tracking-[0.2em] text-xs font-medium uppercase text-background/80">Noura</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/50 font-sans font-medium">Navigation</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/boutique", label: "Boutique" },
                { to: "/collections", label: "Collections" },
                { to: "/a-propos", label: "À Propos" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-background/70 hover:text-primary transition-colors font-sans">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/50 font-sans font-medium">Collections</h4>
            <ul className="space-y-3">
              {["Femmes Voilées", "Femmes Modernes", "Hommes"].map((c) => (
                <li key={c}>
                  <Link to="/collections" className="text-sm text-background/70 hover:text-primary transition-colors font-sans">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/50 font-sans font-medium">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70 font-sans">
              <li>contact@noura.com</li>
              <li>+33 1 23 45 67 89</li>
              <li>Paris, France</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/50 font-sans font-medium">Newsletter</h4>
            <p className="text-sm text-background/70 mb-4 font-sans">Recevez nos dernières nouveautés et offres exclusives.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="flex-1 bg-background/10 border border-background/20 px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-primary font-sans"
              />
              <button type="submit" className="bg-primary text-primary-foreground px-6 py-2.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-primary/90 transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Social + copyright */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40 font-sans">© 2026 NOURA. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/40 hover:text-primary transition-colors"><Instagram className="w-4 h-4" strokeWidth={1.5} /></a>
            <a href="#" className="text-background/40 hover:text-primary transition-colors"><Facebook className="w-4 h-4" strokeWidth={1.5} /></a>
          </div>
          <div className="flex items-center gap-4 text-xs text-background/40 font-sans">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">CGV</a>
            <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
