// Navbar.jsx

import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-blue-300/15 bg-[#071a36]/80 px-6 py-5 backdrop-blur-xl md:px-8">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-black tracking-tight text-white transition-colors duration-300 hover:text-blue-300 md:text-2xl"
        >
          COLLIDER<span className="text-blue-400">.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-blue-100/75 transition-colors duration-300 hover:text-white"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="group flex items-center gap-4 border border-blue-300/30 bg-blue-500/10 px-4 py-3 text-xs font-semibold tracking-wider text-white transition-all duration-300 hover:border-blue-300/70 hover:bg-blue-500/20"
        >
          <span>LET'S TALK</span>
          <ArrowUpRight
            size={16}
            className="text-blue-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
