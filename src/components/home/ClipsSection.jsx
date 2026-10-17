
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionFade from "../SectionFade";

const clips = [
    { id: "dQw4w9WgXcQ", title: "Insane Clutch Gameplay", duration: "0:42" },
    { id: "M7lc1UVf-VE", title: "One Tap Highlights", duration: "0:36" },
    { id: "ysz5S6PUM-U", title: "Tournament Best Moments", duration: "1:12" },
    { id: "ScMzIvxBSi4", title: "Squad Wipe Highlights", duration: "0:58" },
    { id: "aqz-KE-bpKQ", title: "Final Zone Clutch", duration: "0:49" },
];

const japaneseTexts = [
    { text: "蒼き炎", className: "jp-one" },
    { text: "限界突破", className: "jp-two" },
    { text: "不屈の魂", className: "jp-three" },
    { text: "雷神", className: "jp-four" },
    { text: "無限の力", className: "jp-five" },
    { text: "最強", className: "jp-six" },
    { text: "戦士", className: "jp-seven" },
];

export default function ClipsSection({ username = "shadow" }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((current) => (current + 1) % clips.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const getOffset = (index) => {
        let offset = index - active;
        const half = Math.floor(clips.length / 2);

        if (offset > half) offset -= clips.length;
        if (offset < -half) offset += clips.length;

        return offset;
    };

    return (
        <section
            id="clips"
            className="clips-section relative isolate overflow-hidden bg-[#070D18] py-10 sm:py-16 lg:py-20"
        >
            {/* Background glow and grid */}
            <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_45%,rgba(29,78,216,0.2),transparent_70%)]" />
            <div className="clips-grid pointer-events-none absolute inset-0 -z-20" />

            {/* Animated Japanese typography behind cards */}
            <div
                className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
                aria-hidden="true"
            >
                {japaneseTexts.map((item) => (
                    <span
                        key={item.className}
                        className={`japanese-text ${item.className}`}
                    >
                        {item.text}
                    </span>
                ))}
            </div>

            {/* Heading */}
            <div className="relative z-10 mx-auto mb-5 max-w-5xl px-4 text-center sm:mb-8">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-sky-400 sm:text-xs sm:tracking-[0.4em]">
                    Gameplay / Highlights / Competition
                </p>

                <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
                    Featured <span className="text-sky-400">Clips.</span>
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-400 sm:text-base">
                    The plays, clutches, and moments worth watching again.
                </p>
            </div>

            {/* Larger 3D carousel */}
            <div className="relative z-10 mx-auto flex h-[310px] w-full max-w-[1500px] items-center justify-center overflow-hidden sm:h-[420px] md:h-[490px] lg:h-[540px]">
                {clips.map((clip, index) => {
                    const offset = getOffset(index);
                    const distance = Math.abs(offset);
                    const isActive = offset === 0;

                    return (
                        <button
                            key={clip.id}
                            type="button"
                            aria-label={`Select ${clip.title}`}
                            onClick={() => setActive(index)}
                            className="clip-card absolute w-[min(76vw,300px)] overflow-hidden rounded-xl border border-sky-300/25 bg-[#09172B]/95 text-left shadow-[0_20px_65px_rgba(0,0,0,0.65)] transition-all duration-700 ease-in-out sm:w-[min(62vw,410px)] md:w-[min(52vw,480px)] lg:w-[min(44vw,520px)]"
                            style={{
                                transform: `
                  translateX(${offset * (typeof window !== "undefined" && window.innerWidth < 640 ? 56 : window.innerWidth < 1024 ? 190 : 250)}px)
                  rotateY(${offset * -12}deg)
                  scale(${isActive ? 1 : Math.max(0.68, 1 - distance * 0.13)})
                `,
                                opacity: distance > 2 ? 0 : 1 - distance * 0.2,
                                zIndex: 20 - distance,
                                filter: isActive ? "brightness(1)" : "brightness(0.58)",
                            }}
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={`https://img.youtube.com/vi/${clip.id}/hqdefault.jpg`}
                                    alt={clip.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#050A13]/90 via-transparent to-blue-950/10" />



                                {/* Duration */}
                                <span className="absolute bottom-3 right-3  bg-transparent px-2 py-1 text-[10px] font-bold text-white sm:text-xs">
                                    {clip.duration}
                                </span>
                            </div>

                            {/* Title at bottom */}
                            <div className="border-t border-sky-400/20 px-3 py-3 sm:px-5 sm:py-4">
                                <p className="truncate text-sm font-bold text-white sm:text-base md:text-lg">
                                    {clip.title}
                                </p>
                                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-sky-400 sm:text-[10px]">
                                    Player Highlights
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Carousel indicators */}
            <div className="relative z-10 mt-2 flex justify-center gap-2 sm:mt-4">
                {clips.map((clip, index) => (
                    <button
                        key={clip.id}
                        onClick={() => setActive(index)}
                        aria-label={`Show clip ${index + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${active === index
                            ? "w-8 bg-sky-400"
                            : "w-2 bg-slate-600 hover:bg-slate-400"
                            }`}
                    />
                ))}
            </div>

            {/* View more */}
            <div className="relative z-10 mt-7 flex justify-center sm:mt-10">
                <Link
                    to={`/${username}/clips`}
                    className="group inline-flex items-center gap-3 rounded-lg border border-sky-400/40 bg-blue-500/10 px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:border-sky-300 hover:bg-blue-500/20 hover:shadow-[0_0_28px_rgba(56,189,248,0.2)] sm:px-6 sm:text-sm"
                >
                    View All Clips
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Link>
            </div>

            <style>{`
        .clips-grid {
          background-image:
            linear-gradient(rgba(96,165,250,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,.04) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
        }

        .japanese-text {
          position: absolute;
          white-space: nowrap;
          font-size: clamp(2.8rem, 7vw, 6.8rem);
          font-weight: 900;
          letter-spacing: .12em;
          writing-mode: vertical-rl;
          color: transparent;
          background: linear-gradient(
            180deg,
            #e0f2fe 0%,
            #60a5fa 25%,
            #0875e1 50%,
            #102c58 76%,
            #38bdf8 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-stroke: 1px rgba(96,165,250,.18);
          filter: drop-shadow(0 0 14px rgba(37,99,235,.3));
          opacity: .17;
          animation: jp-float 9s ease-in-out infinite alternate,
                     jp-shine 5s ease-in-out infinite;
        }

        .jp-one { top: 4%; left: 3%; }
        .jp-two { top: 8%; right: 5%; animation-delay: -2s, -1s; }
        .jp-three { bottom: 5%; left: 15%; animation-delay: -4s, -2s; }
        .jp-four { top: 30%; right: 20%; animation-delay: -1s, -3s; }
        .jp-five { bottom: 4%; right: 7%; animation-delay: -3s, -2s; }
        .jp-six { top: 22%; left: 25%; animation-delay: -5s, -1s; }
        .jp-seven { bottom: 12%; left: 42%; animation-delay: -2s, -4s; }

        @keyframes jp-float {
          from { transform: translate3d(-8px, -10px, 0) rotate(-3deg); }
          to { transform: translate3d(12px, 14px, 0) rotate(3deg); }
        }

        @keyframes jp-shine {
          0%, 100% { opacity: .10; }
          50% {
            opacity: .24;
            filter: drop-shadow(0 0 24px rgba(56,189,248,.5));
          }
        }

        @media (max-width: 640px) {
          .japanese-text {
            font-size: 2.8rem;
            opacity: .12;
          }
          .jp-three, .jp-five, .jp-six, .jp-seven {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .japanese-text { animation: none; }
        }
      `}</style>

            <SectionFade />
        </section>
    );
}
