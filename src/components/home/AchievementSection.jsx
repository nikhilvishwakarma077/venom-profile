import { Link } from "react-router-dom";
import SectionFade from "../SectionFade";

const achievements = [
  {
    image:
      "https://res.cloudinary.com/dycngnseq/image/upload/v1781731660/gamershub/achievements/zlwovzsb3kxw5gzkxhtu.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dycngnseq/image/upload/v1782673462/gamershub/achievements/yfox43zutu3i58dhr6fd.jpg",
  },
  {
    image:
      "https://dl.dir.freefiremobile.com/common/web_event/hash/0630756532c4ae833a27eb36c707519bjpg",
  },
  {
    image:
      "https://dl.dir.freefiremobile.com/common/web_event/hash/0630756532c4ae833a27eb36c707519bjpg",
  },
];

const AchievementCard = ({ image }) => (
  <div className="group relative flex h-36 w-52 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-400/20 bg-[#09172B]/90 p-2 transition-[border-color,box-shadow] duration-300 hover:border-sky-300/70 hover:shadow-[0_0_25px_rgba(56,189,248,0.18)] sm:h-44 sm:w-64">
    <img
      src={image}
      alt="Player achievement"
      loading="lazy"
      decoding="async"
      draggable="false"
      className="block h-full w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
    />
  </div>
);

function AchievementTrack({
  items,
  rowClass = "",
  reverse = false,
  duration = 32,
}) {
  return (
    <div className="overflow-hidden py-2">
      <div
        className={`achievement-track flex w-max ${reverse ? "achievement-track-reverse" : ""
          } ${rowClass}`}
        style={{ "--scroll-duration": `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-4 pr-4"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {items.map((item, index) => (
              <AchievementCard
                key={`${copy}-${index}`}
                {...item}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}



export default function AchievementSection({ username = "venom" }) {
  return (
    <section
      id="achievements"
      className="achievement-section relative isolate overflow-hidden bg-[#070D18] py-20 text-white sm:py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-[75%] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[90px]" />
      <div className="achievement-grid pointer-events-none absolute inset-0 -z-10" />

      {/* Decorative typography */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="anime-text anime-one">蒼き炎</span>
        <span className="anime-text anime-two">限界突破</span>
        <span className="anime-text anime-three">不屈の魂</span>
        <span className="anime-text anime-four">雷神</span>
      </div>

      <div className="relative z-10 mx-auto mb-12 max-w-5xl px-5 text-center sm:mb-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
          The Track Record
        </p>
        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
          Earned, Never Given<span className="text-sky-400">.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-400 sm:text-base">
          Every achievement reflects the grind, teamwork, and competitive spirit behind the player.
        </p>
      </div>

      <div className="relative z-10 space-y-4">
        <div className="achievement-edge-left pointer-events-none absolute inset-y-0 left-0 z-20 w-8 sm:w-20" />
        <div className="achievement-edge-right pointer-events-none absolute inset-y-0 right-0 z-20 w-8 sm:w-20" />

        <AchievementTrack items={achievements} duration={32} />
        <AchievementTrack items={achievements} reverse duration={38} />
        <AchievementTrack items={achievements} duration={45} />
      </div>

      <div className="relative z-10 mt-10 flex justify-center sm:mt-14">
        <Link
          to={`/achievements`}
          className="group inline-flex items-center gap-3 rounded-lg border border-sky-400/40 bg-blue-500/10 px-6 py-3 text-sm font-semibold transition-[border-color,background-color,box-shadow] duration-300 hover:border-sky-300 hover:bg-blue-500/20 hover:shadow-[0_0_24px_rgba(56,189,248,0.16)]"
        >
          View All Achievements
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
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
          background: linear-gradient(180deg, #e0f2fe 0%, #60a5fa 22%, #0875e1 48%, #102c58 72%, #38bdf8 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-stroke: 1px rgba(96,165,250,.18);
          opacity: .13;
          animation: anime-drift 12s ease-in-out infinite alternate, anime-opacity 6s ease-in-out infinite;
        }
        .anime-one { top: 8%; left: 3%; }
        .anime-two { top: 12%; right: 8%; animation-delay: -3s, -1s; }
        .anime-three { bottom: 8%; left: 18%; animation-delay: -5s, -2s; }
        .anime-four { right: 23%; bottom: 5%; animation-delay: -2s, -4s; }

        @keyframes anime-drift {
          from { transform: translate3d(0, -8px, 0) rotate(-2deg); }
          to { transform: translate3d(5px, 10px, 0) rotate(2deg); }
        }
        @keyframes anime-opacity {
          0%, 100% { opacity: .09; }
          50% { opacity: .17; }
        }

        .achievement-track {
          animation: achievement-scroll var(--scroll-duration, 32s) linear infinite;
          will-change: transform;
        }
        .achievement-track-reverse { animation-name: achievement-scroll-reverse; }
        @keyframes achievement-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes achievement-scroll-reverse {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        .achievement-edge-left { background: linear-gradient(to right, #070D18, transparent); }
        .achievement-edge-right { background: linear-gradient(to left, #070D18, transparent); }

        @media (prefers-reduced-motion: reduce) {
          .anime-text, .achievement-track { animation: none !important; }
          .achievement-track { transform: none !important; will-change: auto; }
        }
        @media (max-width: 640px) {
          .anime-three, .anime-four { display: none; }
        }
      `}</style>

      <SectionFade />
    </section>
  );
}
