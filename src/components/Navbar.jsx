
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ username = "venom" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", to: "/" },
    { label: "PROFILE", to: `/profile` },
    { label: "CLIPS", to: `/clips` },
    { label: "ACHIEVEMENTS", to: `/achievements` },
    { label: "CONTACT", to: "/contact" },
  ];

  const navClass = ({ isActive }) =>
    `text-[10px] font-bold tracking-[.16em] transition lg:text-xs ${isActive ? "text-blue-400" : "text-white/55 hover:text-blue-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-4">
        {/* Logo */}

        <Link to="/" className="group flex items-center gap-3">
          <div className="group relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-sky-400/40 bg-[#09172B] shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/assets/images/char1.webp"
              alt="Player character"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <span className="flex flex-col leading-none">
            <span className="text-base font-black italic tracking-[0.12em] text-white sm:text-lg">
              DL <span className="text-[#2B7FFF]">VENOM</span>
            </span>
            <span className="mt-1.5 text-[8px] font-semibold tracking-[0.28em] text-white/45">
              ESPORTS ATHLETE
            </span>
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
