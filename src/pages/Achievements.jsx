
import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const achievements = [
  {
    id: 1,
    title: "Tournament Champion",
    image:
      "https://res.cloudinary.com/dycngnseq/image/upload/v1781731660/gamershub/achievements/zlwovzsb3kxw5gzkxhtu.jpg",
  },
  {
    id: 2,
    title: "MVP Award",
    image:
      "https://res.cloudinary.com/dycngnseq/image/upload/v1782673462/gamershub/achievements/yfox43zutu3i58dhr6fd.jpg",
  },
  {
    id: 3,
    title: "FFWS Champions",
    image:
      "https://dl.dir.freefiremobile.com/common/web_event/hash/0630756532c4ae833a27eb36c707519bjpg",
  },
  {
    id: 4,
    title: "Team Championship",
    image:
      "https://res.cloudinary.com/dycngnseq/image/upload/v1781731660/gamershub/achievements/zlwovzsb3kxw5gzkxhtu.jpg",
  },
  {
    id: 5,
    title: "Outstanding Performance",
    image:
      "https://res.cloudinary.com/dycngnseq/image/upload/v1782673462/gamershub/achievements/yfox43zutu3i58dhr6fd.jpg",
  },
  {
    id: 6,
    title: "FFWS Champions",
    image:
      "https://dl.dir.freefiremobile.com/common/web_event/hash/0630756532c4ae833a27eb36c707519bjpg",
  },
];

export default function Achievements() {
  const navigate = useNavigate();
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const closeModal = () => setSelectedAchievement(null);

  useEffect(() => {
    if (!selectedAchievement) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedAchievement]);

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
                Achievements
              </h1>
            </div>
          </div>
        </header>

        {/* ACHIEVEMENT GRID */}
        <section
          aria-label="Player achievements"
          className="border border-zinc-800 bg-[#0B1424]"
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

          <div className="p-3 sm:p-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement) => (
                <article
                  key={achievement.id}
                  className="group overflow-hidden border border-zinc-800 bg-[#0B1424] transition-colors duration-300 hover:border-sky-400/50"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedAchievement(achievement)}
                    aria-label={`View ${achievement.title} image`}
                    className="block w-full overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-sky-400"
                  >
                    <div className="h-52 overflow-hidden bg-[#080F1C]">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        loading="lazy"
                        decoding="async"
                        width="640"
                        height="420"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.style.visibility = "hidden";
                        }}
                      />
                    </div>
                  </button>

                  <div className="flex min-h-16 items-center justify-between gap-3 border-t border-zinc-800 p-3">
                    <h2 className="line-clamp-2 text-sm font-medium text-white">
                      {achievement.title}
                    </h2>

                    <button
                      type="button"
                      onClick={() => setSelectedAchievement(achievement)}
                      className="shrink-0 border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-300 transition-colors hover:bg-sky-400 hover:text-[#070D18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
                    >
                      View
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* IMAGE MODAL */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
          role="presentation"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={selectedAchievement.title}
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close image preview"
              className="absolute -right-1 -top-12 flex items-center gap-2 text-sm text-white transition-colors hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
            >
              <X size={20} />
              Close
            </button>

            <img
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              decoding="async"
              className="max-h-[75vh] w-full border border-sky-500/30 bg-[#080F1C] object-contain"
            />

            <div className="border border-t-0 border-sky-500/30 bg-[#080F1C] p-4">
              <h2 className="text-center text-lg font-semibold text-white">
                {selectedAchievement.title}
              </h2>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
