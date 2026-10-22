
import { useEffect, useState } from "react";
import { ArrowLeft, X, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const clips = [
  {
    id: 1,
    title: "FFMAI GRIND BEGINS || TOURNAMENT HIGHLIGHTS",
    clipUrl: "https://www.youtube.com/watch?v=9DQE2Y2wT1s",
  },
  {
    id: 2,
    title:
      "QUALIFIED FOR THE KNOCKOUT STAGE TOURNAMENT HIGHLIGHTS 💥 BY iQOO TGDELETE🖤🔥",
    clipUrl: "https://www.youtube.com/watch?v=3pOu1d9TVIE",
  },
  {
    id: 3,
    title: "MVP Of Knockout Stage Day 1 🐅 || Qualified For FFMIC LAN 🦧 💙",
    clipUrl: "https://www.youtube.com/watch?v=NG4-8Fey0Hc",
  },
  {
    id: 4,
    title: "FFMAI GRIND BEGINS || TOURNAMENT HIGHLIGHTS",
    clipUrl: "https://www.youtube.com/watch?v=9DQE2Y2wT1s",
  },
  {
    id: 5,
    title: "FFMIC Week 1 Highlights by TAG SHOTO | Team Apex Gaming",
    clipUrl: "https://www.youtube.com/watch?v=Ku_CXca8IqA",
  },
  {
    id: 6,
    title: "FFMAI GRIND BEGINS || TOURNAMENT HIGHLIGHTS",
    clipUrl: "https://www.youtube.com/watch?v=9DQE2Y2wT1s",
  },
  {
    id: 7,
    title: "FFMIC Week 1 Highlights by TAG SHOTO | Team Apex Gaming",
    clipUrl: "https://www.youtube.com/watch?v=Ku_CXca8IqA",
  },
  {
    id: 8,
    title: "FFMIC RAW TOURNAMENT POV",
    clipUrl: "https://www.youtube.com/watch?v=zERCe0gUqGw",
  },
  {
    id: 9,
    title:
      "QUALIFIED FOR THE KNOCKOUT STAGE TOURNAMENT HIGHLIGHTS 💥 BY iQOO TGDELETE🖤🔥",
    clipUrl: "https://www.youtube.com/watch?v=3pOu1d9TVIE",
  },
];

const getYoutubeId = (url) => {
  try {
    const parsed = new URL(url);

    if (
      parsed.hostname === "youtu.be" ||
      parsed.hostname === "www.youtu.be"
    ) {
      return parsed.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (
      parsed.hostname === "youtube.com" ||
      parsed.hostname.endsWith(".youtube.com")
    ) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }

      const match = parsed.pathname.match(
        /^\/(?:embed|shorts|live)\/([^/]+)/
      );

      return match?.[1] || null;
    }

    return null;
  } catch {
    return null;
  }
};

const getYoutubeEmbedUrl = (url) => {
  const id = getYoutubeId(url);

  return id
    ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`
    : null;
};

const getClipThumbnail = (url) => {
  const id = getYoutubeId(url);

  return id
    ? `https://img.youtube.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`
    : "/thumbnails/thumbnail1.webp";
};

export default function Clips() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const closeModal = () => setSelectedVideo(null);

  useEffect(() => {
    if (!selectedVideo) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVideo]);

  const openClip = (url) => {
    const embedUrl = getYoutubeEmbedUrl(url);

    if (embedUrl) {
      setSelectedVideo(embedUrl);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="min-h-screen bg-[#070D18] px-4 pb-16 pt-8 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <header className="mb-6 overflow-hidden border border-sky-400/20 bg-[#0B1424]">
          <div className="h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

          <div className="flex items-center gap-3 p-3 sm:gap-4 sm:p-5">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-zinc-700 text-zinc-400 transition-colors hover:border-sky-400 hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 sm:h-10 sm:w-10"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[9px] font-semibold tracking-[0.18em] text-sky-400 sm:text-[10px] sm:tracking-[0.25em]">
                DL VENOM
              </p>

              <h1 className="text-lg font-bold uppercase leading-tight tracking-wide sm:text-2xl">
                Clips Gallery
              </h1>
            </div>
          </div>
        </header>

        {/* CLIPS GRID */}
        <section
          aria-label="Player clips"
          className="border border-zinc-800 bg-[#0B1424]"
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

          <div className="p-3 sm:p-5">
            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
              {clips.map((clip) => (
                <article
                  key={clip.id}
                  className="min-w-0 overflow-hidden border border-zinc-800 bg-[#080F1C] transition-colors duration-300 hover:border-sky-500/40"
                >
                  <button
                    type="button"
                    onClick={() => openClip(clip.clipUrl)}
                    aria-label={`Play ${clip.title}`}
                    className="group block w-full overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-sky-400"
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <img
                        src={getClipThumbnail(clip.clipUrl)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(event) => {
                          const img = event.currentTarget;
                          img.onerror = null;
                          img.src = "/thumbnails/thumbnail1.webp";
                        }}
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/60 text-white transition-transform group-hover:scale-110">
                          <Play size={20} fill="currentColor" />
                        </span>
                      </div>
                    </div>
                  </button>

                  <div className="border-t border-zinc-800 p-3">
                    <h2 className="line-clamp-2 break-words text-sm font-medium leading-5 text-white">
                      {clip.title}
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label="Clip video player"
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close video"
              className="absolute -top-11 right-0 flex items-center gap-2 text-sm text-white transition-colors hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
            >
              <X size={20} />
              Close
            </button>

            <div className="aspect-video w-full border border-sky-500/30 bg-black">
              <iframe
                key={selectedVideo}
                src={selectedVideo}
                title="DL Venom player clip"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
