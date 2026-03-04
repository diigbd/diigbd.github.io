import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Linkedin, Instagram } from "lucide-react";
import { socialLinks } from "../data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Divisions", href: "/divisions" },
  { name: "Clients", href: "/clients" },
  { name: "Students", href: "/students" },
  { name: "Team", href: "/team" },
  { name: "DKU", href: "/dku" },
];

const divisions = [
  { name: "Consulting", href: "/divisions/consulting" },
  { name: "Investment", href: "/divisions/investment" },
  { name: "Data", href: "/divisions/data" },
  { name: "Education", href: "/divisions/education" },
  { name: "Business Development", href: "/divisions/bd" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const divisionsActive = location.pathname.startsWith("/divisions");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}diig-logo.png`}
              alt="DIIG Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name !== "Divisions") {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`nav-link text-foreground hover:text-accent ${
                      location.pathname === link.href
                        ? "active text-accent"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }

              // Divisions dropdown (hover)
              return (
                <div key="Divisions" className="relative group">
                  <Link
                    to="/divisions"
                    className={`nav-link text-foreground hover:text-accent ${
                      divisionsActive ? "active text-accent" : ""
                    }`}
                  >
                    Divisions
                  </Link>

                  {/* dropdown panel */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    <div className="w-64 rounded-xl border border-border bg-background shadow-lg p-2">
                      {divisions.map((d) => (
                        <Link
                          key={d.href}
                          to={d.href}
                          className={`block rounded-lg px-3 py-2 text-sm hover:bg-muted transition ${
                            location.pathname === d.href
                              ? "text-accent"
                              : "text-foreground"
                          }`}
                        >
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => {
              if (link.name !== "Divisions") {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-sm font-medium uppercase tracking-wide ${
                      location.pathname === link.href
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }

              // Mobile divisions: show sub-links
              return (
                <div key="Divisions" className="py-2">
                  <Link
                    to="/divisions"
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-sm font-medium uppercase tracking-wide ${
                      divisionsActive
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    Divisions
                  </Link>

                  <div className="pl-4 -mt-1">
                    {divisions.map((d) => (
                      <Link
                        key={d.href}
                        to={d.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-sm ${
                          location.pathname === d.href
                            ? "text-accent"
                            : "text-foreground/80 hover:text-accent"
                        }`}
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="flex gap-4 pt-4 mt-4 border-t border-border">
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-foreground hover:text-accent"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
