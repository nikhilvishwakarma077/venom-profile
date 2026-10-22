
import { Link } from "react-router-dom";
import charImg from "../../../public/assets/images/char1.webp";
import { ArrowUp } from "lucide-react";


export default function Footer() {
    return (
        <footer className="border-t border-blue-400/15 bg-[#070D18] px-5 py-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
                <Link to="/" className="group flex items-center gap-3">
          <div className="group relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-sky-400/40 bg-[#09172B] shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            <img
              src={charImg}
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

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Scroll to top"
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/30 text-sky-400 transition-all duration-300 hover:border-sky-400 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                >
                    <ArrowUp
                        size={20}
                        className="transition-transform duration-300 group-hover:-translate-y-1"
                    />
                </button>
            </div>
        </footer>
    );
}
