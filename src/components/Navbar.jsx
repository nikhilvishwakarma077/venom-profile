
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ username = "venom" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", to: "/" },
    { label: "PROFILE", to: `/${username}` },
    { label: "CLIPS", to: `/clips` },
    { label: "ACHIEVEMENTS", to: `/achievements` },
    { label: "CONTACT", to: "/contact" },
  ];

  const navClass = ({ isActive }) =>
    `text-[10px] font-bold tracking-[.16em] transition lg:text-xs ${isActive ? "text-blue-400" : "text-white/55 hover:text-blue-400"
    }`;

  return (
    <header className="relative z-50 border-b border-white/5 bg-[#080b12] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-6">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center border border-blue-500/50 bg-blue-500/10 text-lg font-extrabold text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
            DL
          </span>
          <span className="text-sm font-extrabold tracking-[.12em] sm:text-base">
            <span className="text-blue-500">VENOM</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>



        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-xl text-white md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="absolute left-0 right-0 top-full border-y border-white/10 bg-[#0B1220] px-6 py-4 shadow-2xl md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block border-b border-white/5 py-4 text-xs font-bold tracking-[.15em] last:border-0 ${isActive ? "text-blue-400" : "text-white/75"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}


        </nav>
      )}
    </header>
  );
}
