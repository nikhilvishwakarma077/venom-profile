import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate, } from "react-router-dom";

const clips = [
    {
        title: "FFMAI GRIND BEGINS || TOURNAMENT HIGHLIGHTS",
        clipUrl: "https://www.youtube.com/watch?v=9DQE2Y2wT1s",
    },
    {
        title: "QUALIFIED FOR THE KNOCKOUT STAGE TOURNAMENT HIGHLIGHTS 💥 BY iQOO TGDELETE🖤🔥",
        clipUrl: "https://www.youtube.com/watch?v=3pOu1d9TVIE",
    },
    {
        title: "MVP Of Knockout Stage Day 1 🐅 || Qualified For FFMIC LAN 🦧 💙",
        clipUrl: "https://www.youtube.com/watch?v=NG4-8Fey0Hc",
    },
    {
        title: "FFMAI GRIND BEGINS || TOURNAMENT HIGHLIGHTS",
        clipUrl: "https://www.youtube.com/watch?v=9DQE2Y2wT1s",
    },
    {
        title: "FFMIC Week 1 Highlights by TAG SHOTO | Team Apex Gaming",
        clipUrl: "https://www.youtube.com/watch?v=Ku_CXca8IqA",
    },
    {
        title: "FFMAI GRIND BEGINS || TOURNAMENT HIGHLIGHTS",
        clipUrl: "https://www.youtube.com/watch?v=9DQE2Y2wT1s",
    },
    {
        title: "FFMIC Week 1 Highlights by TAG SHOTO | Team Apex Gaming",
        clipUrl: "https://www.youtube.com/watch?v=Ku_CXca8IqA",
    },
    {
        title: "FFMIC RAW TOURNAMENT POV ",
        clipUrl: "https://www.youtube.com/watch?v=zERCe0gUqGw",
    },
    {
        title: "QUALIFIED FOR THE KNOCKOUT STAGE TOURNAMENT HIGHLIGHTS 💥 BY iQOO TGDELETE🖤🔥",
        clipUrl: "https://www.youtube.com/watch?v=3pOu1d9TVIE",
    },


];

const isYoutubeUrl = (url) =>
    /youtube\.com|youtu\.be/i.test(url);

const getYoutubeEmbedUrl = (url) => {
    try {
        const parsed = new URL(url);
        let id = "";

        if (parsed.hostname.includes("youtu.be")) {
            id = parsed.pathname.slice(1);
        } else if (parsed.pathname === "/watch") {
            id = parsed.searchParams.get("v") || "";
        } else {
            id = parsed.pathname.split("/").filter(Boolean).pop() || "";
        }

        return id
            ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
            : url;
    } catch {
        return url;
    }
};

const getClipThumbnail = (url) => {
    if (!isYoutubeUrl(url)) return "/thumbnails/thumbnail1.webp";

    try {
        const parsed = new URL(url);
        const id = parsed.hostname.includes("youtu.be")
            ? parsed.pathname.slice(1)
            : parsed.searchParams.get("v") ||
            parsed.pathname.split("/").filter(Boolean).pop();

        return id
            ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
            : "/thumbnails/thumbnail1.webp";
    } catch {
        return "/thumbnails/thumbnail1.webp";
    }
};

export default function Clips() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const navigate = useNavigate();

    const openClip = (url) => {
        if (isYoutubeUrl(url)) {
            setSelectedVideo(getYoutubeEmbedUrl(url));
        } else {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <main className="min-h-screen bg-[#070D18] px-4 pb-16 pt-8 text-white sm:px-8">
            <div className="mx-auto max-w-7xl">
                {/* COMPACT HEADER */}
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
                            <p className="mb-1 text-[9px] font-semibold tracking-[0.18em] text-sky-400 sm:text-[10px] sm:tracking-[0.25em]">
                                DL VENOM
                            </p>
                            <h1 className="text-lg font-bold uppercase leading-tight tracking-wide sm:text-2xl">
                                Clips Gallery
                            </h1>
                        </div>


                    </div>
                </div>

                {/* CLIPS */}
                <div className="border border-zinc-800 bg-[#0B1424]">
                    <div className="h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

                    <div className="p-3 sm:p-5">


                        {/* RESPONSIVE GRID */}
                        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {clips.map((clip, index) => (
                                <div
                                    key={index}
                                    className="min-w-0 overflow-hidden border border-zinc-800 bg-[#080F1C] transition-colors duration-300 hover:border-sky-500/40"
                                >
                                    <button
                                        type="button"
                                        onClick={() => openClip(clip.clipUrl)}
                                        aria-label={`Play ${clip.title}`}
                                        className="group block w-full cursor-pointer overflow-hidden text-left"
                                    >
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={getClipThumbnail(clip.clipUrl)}
                                                alt={clip.title}
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = "/thumbnails/thumbnail1.webp";
                                                }}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </button>

                                    <div className="border-t border-zinc-800 p-3">
                                        <h3 className="line-clamp-2 break-words text-sm font-medium leading-5 text-white">
                                            {clip.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* VIDEO MODAL */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedVideo(null)}
                            aria-label="Close video"
                            className="absolute -top-11 right-0 flex items-center gap-2 text-sm text-white transition hover:text-sky-300"
                        >
                            <X size={20} />
                            Close
                        </button>

                        <div className="aspect-video w-full border border-sky-500/30 bg-black">
                            <iframe
                                src={selectedVideo}
                                title="Player clip"
                                className="h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}