
import { Link } from "react-router-dom";
import SectionFade from "../SectionFade";

const achievements = [
    { value: "12", label: "Tournament Wins" },
    { value: "08", label: "MVP Titles" },
    { value: "25+", label: "Top Finishes" },
    { value: "15", label: "Tournaments Played" },
    { value: "03", label: "Team Titles" },
];

const AchievementCard = ({ value, label }) => (
    <div className="group flex h-28 min-w-[230px] items-center gap-4 rounded-xl border border-blue-400/20 bg-[#09172B]/90 px-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-300/70 hover:bg-[#102747] sm:min-w-[260px]">
        <span className="text-4xl font-black tracking-tight text-white drop-shadow-[0_0_12px_rgba(56,189,248,0.25)] sm:text-5xl">
            {value}
        </span>
        <span className="max-w-[110px] text-sm leading-snug text-blue-100/60 transition-colors group-hover:text-white">
            {label}
        </span>
    </div>
);

export default function AchievementSection({
    username = "venom",
}) {
    return (
        <section
            id="achievements"
            className="relative isolate overflow-hidden bg-[#070D18] py-20 sm:py-28"
        >
            {/* Blue ambient glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-[75%] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

            {/* Subtle grid texture */}
            <div className="achievement-grid pointer-events-none absolute inset-0 -z-10" />

            {/* Glossy Japanese typography */}
            <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
                <span className="anime-text anime-one">蒼き炎</span>
                <span className="anime-text anime-two">限界突破</span>
                <span className="anime-text anime-three">不屈の魂</span>
                <span className="anime-text anime-four">雷神</span>
            </div>

            {/* Heading */}
            <div className="relative z-10 mx-auto mb-12 max-w-5xl px-5 text-center sm:mb-16">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
                    The Track Record
                </p>

                <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
                    Earned, Never Given
                    <span className="text-sky-400">.</span>
                </h2>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-400 sm:text-base">
                    Every achievement reflects the grind, teamwork, and
                    competitive spirit behind the player.
                </p>
            </div>

            {/* Three Moving Achievement Layers */}
            <div className="relative z-10 space-y-4">
                <div className="achievement-edge-left pointer-events-none absolute inset-y-0 left-0 z-20 w-8 sm:w-20" />
                <div className="achievement-edge-right pointer-events-none absolute inset-y-0 right-0 z-20 w-8 sm:w-20" />

                {/* Layer 1 — Left */}
                <div className="overflow-hidden py-2">
                    <div className="achievement-track flex w-max gap-4 px-4">
                        {achievements.map((item) => (
                            <AchievementCard key={`row1-${item.label}`} {...item} />
                        ))}
                    </div>
                </div>

                {/* Layer 2 — Right */}
                <div className="overflow-hidden py-2">
                    <div className="achievement-track achievement-track-reverse flex w-max gap-4 px-4">
                        {achievements.map((item) => (
                            <AchievementCard key={`row2-${item.label}`} {...item} />
                        ))}
                    </div>
                </div>

                {/* Layer 3 — Left, slower */}
                <div className="overflow-hidden py-2">
                    <div className="achievement-track achievement-track-slow flex w-max gap-4 px-4">
                        {achievements.map((item) => (
                            <AchievementCard key={`row3-${item.label}`} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* View more */}
            <div className="relative z-10 mt-10 flex justify-center sm:mt-14">
                <Link
                    to={`/${username}/achievements`}
                    className="group inline-flex items-center gap-3 rounded-lg border border-sky-400/40 bg-blue-500/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-sky-300 hover:bg-blue-500/20 hover:shadow-[0_0_28px_rgba(56,189,248,0.2)]"
                >
                    View All Achievements
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Link>
            </div>

            <style>{`
        .achievement-grid {
          background-image:
            linear-gradient(rgba(96,165,250,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,.035) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }

        .anime-text {
          position: absolute;
          white-space: nowrap;
          writing-mode: vertical-rl;
          font-size: clamp(3rem, 7vw, 6.5rem);
          font-weight: 900;
          letter-spacing: .12em;
          color: transparent;
          background: linear-gradient(
            180deg,
            #e0f2fe 0%,
            #60a5fa 22%,
            #0875e1 48%,
            #102c58 72%,
            #38bdf8 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-stroke: 1px rgba(96,165,250,.18);
          filter: drop-shadow(0 0 14px rgba(37,99,235,.25));
          opacity: .14;
          animation: anime-drift 10s ease-in-out infinite alternate,
                     anime-gloss 6s ease-in-out infinite;
        }

        .anime-one {
          top: 8%;
          left: 3%;
        }

        .anime-two {
          top: 12%;
          right: 8%;
          animation-delay: -3s, -1s;
        }

        .anime-three {
          bottom: 8%;
          left: 18%;
          animation-delay: -5s, -2s;
        }

        .anime-four {
          right: 23%;
          bottom: 5%;
          animation-delay: -2s, -4s;
        }

        @keyframes anime-drift {
          from { transform: translate3d(0, -10px, 0) rotate(-3deg); }
          to { transform: translate3d(8px, 14px, 0) rotate(3deg); }
        }

        @keyframes anime-gloss {
          0%, 100% {
            opacity: .10;
            filter: drop-shadow(0 0 8px rgba(37,99,235,.2));
          }
          50% {
            opacity: .22;
            filter: drop-shadow(0 0 22px rgba(56,189,248,.45));
          }
        }

        .achievement-track {
          animation: achievement-scroll 32s linear infinite;
          will-change: transform;
        }

        .achievement-track:hover {
          animation-play-state: paused;
        }

        @keyframes achievement-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }

        .achievement-edge-left {
          background: linear-gradient(to right, #070D18, transparent);
        }

        .achievement-edge-right {
          background: linear-gradient(to left, #070D18, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .anime-text,
          .achievement-track {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .anime-three,
          .anime-four {
            display: none;
          }
        }

        .achievement-track {
  animation: achievement-scroll 22s linear infinite;
}

.achievement-track-reverse {
  animation-name: achievement-scroll-reverse;
  animation-duration: 28s;
}

.achievement-track-slow {
  animation-duration: 35s;
}

.achievement-track:hover {
  animation-play-state: paused;
}

@keyframes achievement-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-30%);
  }
}

@keyframes achievement-scroll-reverse {
  from {
    transform: translateX(-30%);
  }
  to {
    transform: translateX(0);
  }
}
      `}</style>

      <SectionFade />
        </section>
    );
}
