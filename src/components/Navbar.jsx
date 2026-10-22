
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "HOME", to: "/" },
  { label: "PROFILE", to: "/profile" },
  { label: "CLIPS", to: "/clips" },
  { label: "ACHIEVEMENTS", to: "/achievements" },
  { label: "CONTACT", to: "/contact" },
];

const navClass = ({ isActive }) =>
  `text-[10px] font-bold tracking-[.16em] transition-colors lg:text-xs ${
    isActive
      ? "text-blue-400"
      : "text-white/55 hover:text-blue-400"
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-4">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
          aria-label="DL Venom home"
        >
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-sky-400/40 bg-[#09172B] transition-transform duration-300 group-hover:scale-105">
            <img
              src="/assets/images/char1.webp"
              alt=""
              width="40"
              height="40"
              loading="eager"
              decoding="async"
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

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex lg:gap-8"
        >
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={navClass}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-xl text-white transition-colors hover:border-sky-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-y border-white/10 bg-[#0B1220] px-6 py-4 shadow-2xl md:hidden"
        >
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block border-b border-white/5 py-4 text-xs font-bold tracking-[.15em] last:border-0 ${
                  isActive ? "text-blue-400" : "text-white/75"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
