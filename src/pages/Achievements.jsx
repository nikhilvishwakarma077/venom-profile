import { useState } from "react";
import { ArrowLeft, X, } from "lucide-react";
import { useNavigate } from "react-router-dom";

const achievements = [
    { title: "Tournament Champion", image: "http://res.cloudinary.com/dycngnseq/image/upload/v1781731660/gamershub/achievements/zlwovzsb3kxw5gzkxhtu.jpg" },
    { title: "MVP Award", image: "https://res.cloudinary.com/dycngnseq/image/upload/v1782673462/gamershub/achievements/yfox43zutu3i58dhr6fd.jpg" },
    { title: "FFWS Champions", image: "https://dl.dir.freefiremobile.com/common/web_event/hash/0630756532c4ae833a27eb36c707519bjpg" },
    { title: "Team Championship", image: "http://res.cloudinary.com/dycngnseq/image/upload/v1781731660/gamershub/achievements/zlwovzsb3kxw5gzkxhtu.jpg" },
    { title: "Outstanding Performance", image: "https://res.cloudinary.com/dycngnseq/image/upload/v1782673462/gamershub/achievements/yfox43zutu3i58dhr6fd.jpg" },
    { title: "FFWS Champions", image: "https://dl.dir.freefiremobile.com/common/web_event/hash/0630756532c4ae833a27eb36c707519bjpg" },
];

export default function Achievements() {

    const navigate = useNavigate();
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    return (
        <main className="min-h-screen bg-[#070D18] px-4 pb-16 pt-8 text-white sm:px-8">
            <div className="mx-auto max-w-7xl">
                {/* RESPONSIVE HEADER */}
                <div className="mb-6 overflow-hidden border border-sky-400/20 bg-[#0B1424]">
                    <div className="h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

                    <div className="flex flex-wrap items-center gap-3 p-3 sm:gap-4 sm:p-5">
                        <button
                            onClick={() => navigate(-1)}
                            aria-label="Go back"
                            className="flex h-9 w-9 shrink-0 items-center justify-center border border-zinc-700 text-zinc-400 transition hover:border-sky-400 hover:text-sky-300 sm:h-10 sm:w-10"
                        >
                            <ArrowLeft size={18} />
                        </button>



                        <div className="min-w-0 flex-1">
                            <p className="mb-1 truncate text-[9px] font-semibold tracking-[0.18em] text-sky-400 sm:text-[10px] sm:tracking-[0.25em]">
                                DL VENOM
                            </p>

                            <h1 className="break-words text-lg font-bold uppercase leading-tight tracking-wide sm:text-2xl">
                                Achievements
                            </h1>
                        </div>


                    </div>
                </div>

                {/* ACHIEVEMENT GRID */}
                <div className="border border-zinc-800 bg-[#0B1424]">
                    <div className="h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

                    <div className="p-3 sm:p-5">


                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {achievements.map((achievement) => (
                                <div
                                    key={achievement.title}
                                    className="group overflow-hidden border border-zinc-800 bg-[#0B1424] transition-all duration-300 hover:border-sky-400/50"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setSelectedAchievement(achievement)}
                                        className="block w-full cursor-pointer overflow-hidden text-left"
                                        aria-label={`View ${achievement.title}`}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={achievement.image}
                                                alt={achievement.title}
                                                loading="lazy"
                                                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                onError={(e) => {
                                                    e.currentTarget.style.visibility = "hidden";
                                                }}
                                            />

                                            {/* <span className="absolute left-3 top-3 border border-sky-400/30 bg-[#070D18]/90 px-3 py-1 text-xs font-bold tracking-wider text-sky-300">
                                         {String(index + 1).padStart(2, "0")}
                                    </span> */}
                                        </div>
                                    </button>

                                    <div className="flex min-h-16 items-center justify-between gap-3 border-t border-zinc-800 p-3">
                                        <h3 className="line-clamp-2 text-sm font-medium text-white">
                                            {achievement.title}
                                        </h3>

                                        <button
                                            type="button"
                                            onClick={() => setSelectedAchievement(achievement)}
                                            className="shrink-0 border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-300 transition hover:bg-sky-400 hover:text-[#070D18]"
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* IMAGE MODAL */}
            {selectedAchievement && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedAchievement(null)}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedAchievement(null)}
                            className="absolute -right-1 -top-12 flex items-center gap-2 text-sm text-white hover:text-sky-300"
                        >
                            <X size={20} />
                            Close
                        </button>

                        <img
                            src={selectedAchievement.image}
                            alt={selectedAchievement.title}
                            className="max-h-[75vh] w-full border border-sky-500/30 bg-[#080F1C] object-contain"
                        />

                        <div className="border border-t-0 border-sky-500/30 bg-[#080F1C] p-4">
                            <h3 className="text-center text-lg font-semibold text-white">
                                {selectedAchievement.title}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}