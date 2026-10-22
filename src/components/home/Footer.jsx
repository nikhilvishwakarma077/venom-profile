import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <footer className="border-t border-blue-400/15 bg-[#070D18] px-5 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-sky-400/40 bg-[#09172B] shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/assets/images/char1.webp"
              alt="DL VENOM player character"
              width="40"
              height="40"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-base font-black italic tracking-[0.12em] text-white sm:text-lg">
              DL <span className="text-[#2B7FFF]">VENOM</span>
            </span>
            <span className="mt-1.5 text-[8px] font-semibold tracking-[0.28em] text-white/45">
              ESPORTS ATHLETE
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/30 text-sky-400 transition-colors duration-300 hover:border-sky-400 hover:bg-sky-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070D18]"
        >
          <ArrowUp
            size={20}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none"
          />
        </button>
      </div>
    </footer>
  );
}
