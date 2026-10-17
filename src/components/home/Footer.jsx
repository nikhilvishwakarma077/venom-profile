
import { Link } from "react-router-dom";
import charImg from "../../../public/assets/images/char1.webp";
import { ArrowUp } from "lucide-react";


export default function Footer({
    username = "DL",
    playerName = "DL VEMON",
    logo,
}) {
    return (
        <footer className="border-t border-blue-400/15 bg-[#070D18] px-5 py-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <img
                        src={charImg}
                        alt="Player logo"
                        className="h-9 w-9 rounded-full object-contain"
                    />

                    <Link
                        to={`/${username}`}
                        className="text-sm font-black tracking-[0.2em] text-sky-400 sm:text-base"
                    >
                        {playerName}
                    </Link>
                </div>

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
