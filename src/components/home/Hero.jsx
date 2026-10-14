
import { useEffect, useState } from "react";
import charImg from "../../../public/assets/images/char1.webp";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 1500);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { label: "PROFILE", href: "#profile" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <section
      id="profile"
      className="ff-hero relative isolate min-h-screen overflow-hidden bg-[#080b12] text-white"
    >


      {intro && (
        <div className="ff-intro" aria-hidden="true">
          <div className="ff-intro-line" />
          <span className="ff-intro-label">INITIALIZING PLAYER PROFILE</span>
          <span className="ff-intro-code">FF.MAX // SYSTEM READY</span>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

        .ff-hero {
          font-family: 'Inter', sans-serif;
          background:
            radial-gradient(ellipse at 76% 48%, rgba(0, 91, 255, .15), transparent 38%),
            radial-gradient(ellipse at 15% 90%, rgba(0, 70, 190, .09), transparent 35%),
            #080b12;
        }

        .ff-heading {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          letter-spacing: -.045em;
          line-height: .99;
        }

        .ff-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }

        .ff-character {
          animation: ffFloat 6s ease-in-out infinite;
          transform-origin: center bottom;
          filter: drop-shadow(0 0 36px rgba(0, 99, 255, .16));
        }

        .ff-glow {
          animation: ffPulse 5s ease-in-out infinite;
        }

        .ff-reveal {
          animation: ffReveal .85s cubic-bezier(.2,.7,.2,1) both;
        }

        .ff-delay-1 { animation-delay: .12s; }
        .ff-delay-2 { animation-delay: .24s; }
        .ff-delay-3 { animation-delay: .36s; }

        @keyframes ffFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes ffPulse {
          0%, 100% { opacity: .45; transform: scale(.96); }
          50% { opacity: .8; transform: scale(1.04); }
        }

        @keyframes ffReveal {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ff-character, .ff-glow, .ff-reveal {
            animation: none !important;
          }
        }

        
.ff-intro {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  overflow: hidden;
  background: #080b12;
  animation: introExit 0.5s ease 1s forwards;
}

.ff-intro-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #1683ff;
  box-shadow: 0 0 25px #1683ff, 0 0 70px #0066ff;
  animation: energyScan 1s cubic-bezier(.65, 0, .35, 1) forwards;
}

.ff-intro-label,
.ff-intro-code {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Oswald', sans-serif;
  font-size: 11px;
  letter-spacing: .25em;
  white-space: nowrap;
}

.ff-intro-label {
  top: 48%;
  color: #fff;
  animation: labelReveal .5s ease both;
}

.ff-intro-code {
  top: 53%;
  color: #1683ff;
  font-size: 9px;
  animation: labelReveal .5s ease .2s both;
}

@keyframes energyScan {
  0% { top: 0; opacity: 1; }
  80% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

@keyframes labelReveal {
  from { opacity: 0; letter-spacing: .5em; }
  to { opacity: 1; letter-spacing: .25em; }
}

@keyframes introExit {
  to { opacity: 0; visibility: hidden; }
}

@media (prefers-reduced-motion: reduce) {
  .ff-intro,
  .ff-intro-line,
  .ff-intro-label,
  .ff-intro-code {
    animation-duration: .01ms !important;
    animation-delay: 0ms !important;
  }
}


/* Japanese text stays behind the character */
.ff-hero .jp-atmosphere {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
  contain: layout paint;
}

.ff-hero .jp-text {
  position: absolute;
  display: block;
  color: #1683ff;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 900;
  line-height: 1.2;
  white-space: nowrap;
  user-select: none;
  opacity: 0;
  text-shadow: 0 0 18px rgba(0, 100, 255, .35);
  writing-mode: vertical-rl;
  animation: jpFloat 8s ease-in-out infinite;
}

/* Different positions, sizes and timings */
.ff-hero .jp-one {
  top: 14%;
  left: 12%;
  font-size: clamp(24px, 4vw, 52px);
  opacity: .23;
  animation-delay: -2s;
}

.ff-hero .jp-two {
  top: 25%;
  right: 13%;
  font-size: clamp(18px, 2.7vw, 36px);
  opacity: .17;
  animation-delay: -5s;
}

.ff-hero .jp-three {
  bottom: 22%;
  left: 23%;
  font-size: clamp(28px, 5vw, 64px);
  opacity: .2;
  animation-delay: -4s;
}

.ff-hero .jp-four {
  top: 8%;
  right: 30%;
  font-size: clamp(16px, 2.5vw, 30px);
  opacity: .15;
  animation-delay: -1s;
}

.ff-hero .jp-five {
  bottom: 15%;
  right: 10%;
  font-size: clamp(36px, 6vw, 76px);
  opacity: .25;
  animation-delay: -6s;
}

@keyframes jpFloat {
  0%, 100% {
    transform: translate3d(0, 12px, 0) rotate(-5deg);
  }
  50% {
    transform: translate3d(0, -22px, 0) rotate(5deg);
  }
}

/* Keep the character above the typography */
.ff-hero .ff-character {
  z-index: 2;
}

/* Mobile adjustments */
@media (max-width: 640px) {
  .ff-hero .jp-one { left: 3%; }
  .ff-hero .jp-two { right: 3%; }
  .ff-hero .jp-three { left: 8%; }
  .ff-hero .jp-four { right: 22%; }
  .ff-hero .jp-five { right: 2%; }
}

@media (prefers-reduced-motion: reduce) {
  .ff-hero .jp-text {
    animation: none;
  }
}


      `}</style>

      {/* Background details */}
      <div className="ff-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="ff-glow pointer-events-none absolute right-[4%] top-[17%] -z-10 h-[390px] w-[390px] rounded-full bg-blue-600/10 blur-[110px] sm:h-[550px] sm:w-[550px]" />

      {/* Navbar */}
      <header className="relative z-30 mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-6">
        <a href="#profile" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center border border-blue-500/50 bg-blue-500/10 text-lg font-extrabold text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
            F
          </span>
          <span className="text-sm font-extrabold tracking-[.12em] sm:text-base">
            PLAYER<span className="text-blue-500">.GG</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-bold tracking-[.16em] text-white/55 transition hover:text-blue-400 lg:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-3 border border-white/15 px-5 py-3 text-[10px] font-bold tracking-[.15em] transition hover:border-blue-500 hover:bg-blue-500/10 sm:flex"
        >
          LET'S CONNECT <span className="text-blue-400">↗</span>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-xl md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </header>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="absolute left-0 right-0 top-[76px] z-40 border-y border-white/10 bg-[#0b0f18] px-6 py-5 shadow-2xl md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/5 py-4 text-xs font-bold tracking-[.15em] text-white/75 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block bg-blue-600 px-4 py-3 text-center text-xs font-bold tracking-widest"
          >
            LET'S CONNECT ↗
          </a>
        </nav>
      )}

      {/* Hero content */}
      <div className="relative mx-auto grid min-h-[calc(100svh-80px)] w-full max-w-[1600px] grid-cols-1 items-center px-5 pb-10 pt-4 sm:px-8 sm:pt-6 lg:grid-cols-[1fr_1.05fr] lg:px-12 lg:pb-12 lg:pt-0">
        {/* Left content */}
        <div className="relative z-20 order-1 max-w-[680px] self-center lg:py-10">
          <div className="ff-reveal mb-5 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-blue-500" />
            <span className="text-[9px] font-bold tracking-[.25em] text-blue-400 sm:text-[11px]">
              FREE FIRE MAX · COMPETITIVE ESPORTS
            </span>
          </div>

          <div className="ff-reveal ff-delay-1">
            <p className="mb-2 text-xs font-semibold tracking-[.22em] text-white/40 sm:text-sm">
              PLAYER PROFILE / 001
            </p>

            <h1 className="ff-heading text-[clamp(3.7rem,10.5vw,7.5rem)] uppercase sm:text-[clamp(5rem,8vw,7.5rem)] lg:text-[clamp(5.5rem,7.2vw,7.5rem)]">
              BUILT
              <br />
              TO <span className="text-blue-500">CLUTCH.</span>
              <br />
              <span className="text-white/90">BORN TO</span>
              <br />
              <span className="text-white/90">DOMINATE.</span>
            </h1>
          </div>

          <p className="ff-reveal ff-delay-2 mt-5 max-w-[390px] text-sm leading-6 text-white/55 sm:mt-6 sm:text-base sm:leading-7">
            Precision. Game sense. Teamwork.
            <br className="hidden sm:block" />
            Every round is a chance to prove it.
          </p>

          {/* Player identity */}
          <div className="ff-reveal ff-delay-2 mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-l-2 border-blue-500 pl-4">
            <div>
              <p className="text-[9px] font-bold tracking-[.2em] text-white/35">
                IGN
              </p>
              <p className="mt-1 text-sm font-extrabold tracking-wide">
                DL VENOM
              </p>
            </div>

            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-[9px] font-bold tracking-[.2em] text-white/35">
                TEAM
              </p>
              <p className="mt-1 text-sm font-bold text-blue-400">
                DARK LEGION
              </p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-[9px] font-bold tracking-[.2em] text-white/35">
                ROLE
              </p>
              <p className="mt-1 text-sm font-bold text-blue-400">
                ASSAULTER / IGL
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="ff-reveal ff-delay-3 mt-7 flex flex-wrap gap-3 sm:mt-8">
            <a
              href="#achievements"
              className="group inline-flex min-h-12 items-center justify-center gap-4 bg-blue-600 px-5 py-3 text-[10px] font-extrabold tracking-[.14em] transition hover:bg-blue-500 sm:px-7 sm:text-xs"
            >
              VIEW ACHIEVEMENTS
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-5 py-3 text-[10px] font-bold tracking-[.14em] transition hover:border-blue-400 hover:text-blue-400 sm:px-7 sm:text-xs"
            >
              CONTACT PLAYER <span>→</span>
            </a>
          </div>

          {/* Quick stats */}
          <div className="ff-reveal ff-delay-3 mt-9 grid max-w-[510px] grid-cols-3 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
            {[
              { value: "XX+", label: "TOURNAMENTS" },
              { value: "XX+", label: "TOURNAMENT WINS" },
              { value: "X+", label: "MVP TITLES" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`pr-2 ${index !== 0 ? "border-l border-white/10 pl-3 sm:pl-5" : ""}`}
              >
                <p className="font-['Oswald'] uppercase text-2xl font-bold tracking-wide sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[8px] uppercase font-bold tracking-[.12em] text-white/40 sm:text-[9px] sm:tracking-[.15em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right character composition */}
        <div className="relative order-first mx-auto flex h-[340px] w-full max-w-[420px] items-end justify-center sm:h-[480px] sm:max-w-[560px] lg:absolute lg:inset-y-0 lg:right-0 lg:order-none lg:mt-0 lg:h-full lg:w-[56%] lg:max-w-none">
          {/* Blue matte backdrop */}
          <div className="pointer-events-none absolute bottom-[5%] right-[4%] h-[75%] w-[80%] border border-blue-400/10 bg-gradient-to-br from-blue-500/[.09] via-blue-900/[.08] to-transparent sm:right-[7%] lg:bottom-[8%] lg:right-[8%] lg:h-[76%] lg:w-[76%]" />

          <div className="pointer-events-none absolute bottom-[9%] right-[7%] h-[65%] w-[74%] bg-blue-600/10 blur-[60px] sm:right-[10%] lg:right-[12%]" />

          {/* Decorative frame */}
          <div className="pointer-events-none absolute right-[10%] top-[7%] h-16 w-16 border-r border-t border-blue-400/40 sm:right-[12%] sm:h-24 sm:w-24 lg:right-[15%] lg:top-[14%]" />

          <div className="pointer-events-none absolute bottom-[10%] left-[7%] h-12 w-12 border-b border-l border-blue-400/30 sm:left-[12%] sm:h-20 sm:w-20 lg:bottom-[14%] lg:left-[8%]" />


          {/* Floating Japanese Anime Typography */}
          <div className="jp-atmosphere" aria-hidden="true">
            <span className="jp-text jp-one">蒼き炎</span>
            <span className="jp-text jp-two">無限の力</span>
            <span className="jp-text jp-three">戦士</span>
            <span className="jp-text jp-four">限界突破</span>
            <span className="jp-text jp-five">雷</span>
          </div>


          {/* Character image */}
          <img
            src={charImg}
            alt="Blue-themed esports warrior character"
            className="ff-character relative z-10 h-full max-h-full w-auto max-w-full object-contain object-bottom"
            fetchPriority="high"
          />

          {/* Floating player tag */}
          <div className="absolute bottom-[15%] right-0 z-20 border border-white/10 bg-[#0b101a]/90 px-3 py-2 backdrop-blur-md sm:bottom-[18%] sm:right-[2%] sm:px-5 sm:py-3 lg:right-[3%]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              <span className="text-[8px] font-bold tracking-[.17em] text-white/70 sm:text-[10px]">
                PLAYER STATUS
              </span>
            </div>
            <p className="mt-1 text-xs font-extrabold tracking-wide sm:text-sm">
              READY TO COMPETE
            </p>
          </div>

          {/* Small visual coordinates */}
          <div className="absolute left-2 top-[15%] z-20 hidden sm:block lg:left-[3%] lg:top-[22%]">
            <p className="font-mono text-[9px] tracking-widest text-blue-400/70">
              FF.MAX
            </p>
            <div className="mt-2 h-px w-12 bg-blue-400/40" />
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="pointer-events-none absolute bottom-4 left-5 hidden items-center gap-3 text-[9px] font-semibold tracking-[.18em] text-white/25 sm:left-8 lg:flex lg:left-12">
          <span className="h-px w-6 bg-blue-500/70" />
          PLAYER PORTFOLIO
          <span className="text-white/10">/</span>
          SEASON 01
        </div>
      </div>
    </section>
  );
};

export default Hero;
