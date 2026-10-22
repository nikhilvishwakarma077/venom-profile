import { useEffect, useState } from "react";
import {
  Clock3,
  Play,
  Shield,
  Trophy,
  Users,
  Video,
  X,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

// Public assets in Vite should be referenced from the public root.
const BANNER_IMAGE = "/assets/images/banner1.png";
const AVATAR_IMAGE = "/assets/images/char1.webp";
const FALLBACK_AVATAR = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
const FALLBACK_THUMBNAIL = "/thumbnails/thumbnail1.webp";

const userProfile = {
  username: "DL VENOM",
  uid: "8975653120",
  banner: BANNER_IMAGE,
  avatar: AVATAR_IMAGE,
  availability: { status: "DARK LEGION ESPORTS" },
  socialLinks: { instagram: "venom.ff", discord: "venom" },
  role: "Primary Rusher",
  age: 21,
  country: "India",
  languages: ["Hindi", "Marathi", "English"],
  bio: "Competitive Free Fire MAX player focused on team coordination, smart rotations, and consistent tournament performance.",
  stats: { currentRank: "Heroic", kdRatio: "4.25", headshotPercentage: 68 },
  experience: { level: 72, yearsPlaying: 5, esportsExperience: 3 },
  teamHistory: [
    { teamName: "MARATHA TYCOONS", role: "Rusher", duration: "2024 — 2025" },
    { teamName: "SHADOW ESPORTS", role: "Rusher + IGL", duration: "2023 — 2024" },
  ],
  clips: [
    { title: "FFMAI GRIND BEGINS || TOURNAMENT HIGHLIGHTS", clipUrl: "https://www.youtube.com/watch?v=9DQE2Y2wT1s" },
    { title: "QUALIFIED FOR THE KNOCKOUT STAGE TOURNAMENT HIGHLIGHTS 💥 BY iQOO TGDELETE🖤🔥", clipUrl: "https://www.youtube.com/watch?v=3pOu1d9TVIE" },
    { title: "FFMIC Week 1 Highlights by TAG SHOTO | Team Apex Gaming", clipUrl: "https://www.youtube.com/watch?v=Ku_CXca8IqA" },
  ],
  achievements: [
    { title: "FFWS Champions", image: "https://dl.dir.freefiremobile.com/common/web_event/hash/0630756532c4ae833a27eb36c707519bjpg" },
    { title: "MVP — Weekly Scrims", image: "https://res.cloudinary.com/dycngnseq/image/upload/v1782673462/gamershub/achievements/yfox43zutu3i58dhr6fd.jpg" },
    { title: "ZM Championship Winners 🏆", image: "https://res.cloudinary.com/dycngnseq/image/upload/v1781731660/gamershub/achievements/zlwovzsb3kxw5gzkxhtu.jpg" },
  ],
};

const panelClass = "border border-zinc-800 bg-[#0B1424]";
const tileClass = "border border-zinc-800 bg-[#080F1C]";
const topAccent = "h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent";
const sectionTitleClass = "text-lg font-semibold text-white";

function getYouTubeId(url = "") {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return parsed.pathname.split("/").filter(Boolean)[0] || "";
    if (!host.endsWith("youtube.com")) return "";
    if (parsed.pathname === "/watch") return parsed.searchParams.get("v") || "";
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (["embed", "shorts", "live", "v"].includes(parts[0])) return parts[1] || "";
    return "";
  } catch {
    return "";
  }
}

function getClipPlatform(url = "") {
  if (getYouTubeId(url)) return "youtube";
  if (/instagram\.com|instagr\.am/i.test(url)) return "instagram";
  return "unknown";
}

function getClipThumbnail(url) {
  const platform = getClipPlatform(url);
  const videoId = getYouTubeId(url);
  if (platform === "youtube" && videoId) return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  if (platform === "instagram") {
    return "https://images.macrumors.com/t/jkfoi-AlDh8DC2jET480Y5aS0ow=/1600x0/article-new/2021/03/Instagram-Feature-2.jpg";
  }
  return FALLBACK_THUMBNAIL;
}

function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex min-h-52 flex-col items-center justify-center border border-dashed border-zinc-700 bg-[#080F1C] px-4 text-center">
      <Icon size={36} aria-hidden="true" className="mb-3 text-zinc-600" />
      <h3 className="text-base font-semibold text-zinc-300">{title}</h3>
      <p className="mt-1 text-sm text-zinc-500">{description}</p>
    </div>
  );
}

function Panel({ title, icon: Icon, children, className = "" }) {
  return (
    <section className={`${panelClass} ${className}`}>
      <div className={topAccent} />
      <div className="p-5">
        <div className="mb-4 flex items-center gap-2">
          <Icon size={16} className="text-sky-400" aria-hidden="true" />
          <h2 className={sectionTitleClass}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function SocialLink({ platform, value, mobile = false }) {
  if (!value) return null;
  const isInstagram = platform === "instagram";
  const href = isInstagram
    ? `https://www.instagram.com/${value.replace(/^@/, "")}/`
    : `https://discord.com/users/${value}`;
  const label = isInstagram ? "Instagram" : "Discord";
  const icon = isInstagram
    ? "https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
    : "https://cdn-icons-png.flaticon.com/512/5968/5968756.png";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${label}`}
      className={`flex items-center justify-center border border-zinc-700 bg-[#080F1C] transition-colors hover:border-sky-500/50 hover:bg-sky-500/10 ${mobile ? "h-12 w-12" : "h-11 w-11"}`}
    >
      <img src={icon} alt="" loading="lazy" decoding="async" className={mobile ? "h-6 w-6" : "h-5 w-5"} />
    </a>
  );
}

function ClipCard({ clip, onPlay, mobile = false }) {
  const platform = getClipPlatform(clip.clipUrl);
  const isYouTube = platform === "youtube";
  const openClip = () => {
    if (isYouTube) {
      const id = getYouTubeId(clip.clipUrl);
      if (id) onPlay(`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`);
      return;
    }
    window.open(clip.clipUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article className={`${tileClass} ${mobile ? "w-70 shrink-0 md:hidden" : "hidden md:block"} transition-colors duration-300 hover:border-sky-500/30`}>
      <button
        type="button"
        onClick={openClip}
        aria-label={`${isYouTube ? "Play" : "Open"} clip: ${clip.title}`}
        className="group relative block w-full cursor-pointer overflow-hidden text-left"
      >
        <img
          src={getClipThumbnail(clip.clipUrl)}
          alt=""
          loading="lazy"
          decoding="async"
          onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = FALLBACK_THUMBNAIL; }}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${mobile ? "h-44" : "h-48"}`}
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/60 text-white">
            {isYouTube ? <Play size={18} fill="currentColor" /> : <ExternalLink size={18} />}
          </span>
        </span>
      </button>
      <div className="border-t border-zinc-800 p-3">
        <h3 className="line-clamp-2 text-sm font-medium text-white">{clip.title}</h3>
      </div>
    </article>
  );
}

function AchievementCard({ achievement, onSelect, mobile = false }) {
  return (
    <article className={`${tileClass} ${mobile ? "w-70 shrink-0 md:hidden" : "hidden md:block"} transition-colors duration-300 hover:border-sky-500/30`}>
      <button
        type="button"
        onClick={() => onSelect(achievement)}
        aria-label={`View achievement: ${achievement.title}`}
        className="group block w-full cursor-pointer overflow-hidden"
      >
        <img
          src={achievement.image}
          alt={achievement.title}
          loading="lazy"
          decoding="async"
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${mobile ? "h-44" : "h-48"}`}
        />
      </button>
      <div className="flex items-center justify-between gap-3 border-t border-zinc-800 p-3">
        <h3 className="line-clamp-2 text-sm font-medium text-white">{achievement.title}</h3>
        <button
          type="button"
          onClick={() => onSelect(achievement)}
          className="shrink-0 border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300 transition-colors hover:bg-sky-500 hover:text-black"
        >
          View
        </button>
      </div>
    </article>
  );
}

function Modal({ title, onClose, children, dialogClass = "" }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div role="dialog" aria-modal="true" aria-label={title} className={`relative w-full ${dialogClass}`}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute -right-1 -top-12 z-20 flex h-9 w-9 items-center justify-center text-white transition hover:text-sky-300"
        >
          <X size={30} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  const [showAvatarPreview, setShowAvatarPreview] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [avatarSrc, setAvatarSrc] = useState(userProfile.avatar);

  const closeAchievement = () => setSelectedAchievement(null);
  const closeVideo = () => setSelectedVideo("");
  const closeAvatar = () => setShowAvatarPreview(false);

  const status = userProfile.availability.status;
  const stats = [
    { label: "BR Rank", value: userProfile.stats.currentRank || "N/A", highlight: true },
    { label: "KD Ratio", value: userProfile.stats.kdRatio || "N/A" },
    { label: "Headshot %", value: userProfile.stats.headshotPercentage != null ? `${userProfile.stats.headshotPercentage}%` : "N/A" },
  ];
  const experience = [
    { label: "ID Level", value: userProfile.experience.level != null ? `Lv. ${userProfile.experience.level}` : "N/A", highlight: true },
    { label: "Years Playing", value: userProfile.experience.yearsPlaying != null ? `${userProfile.experience.yearsPlaying} Years` : "N/A" },
    { label: "Esports Experience", value: userProfile.experience.esportsExperience != null ? `${userProfile.experience.esportsExperience} Years` : "N/A" },
  ];
  const hasStats = stats.some((item) => item.value !== "N/A");
  const hasTeams = userProfile.teamHistory.some((team) => team.teamName?.trim());
  const hasClips = userProfile.clips.some((clip) => clip.title?.trim() && clip.clipUrl?.trim());
  const hasAchievements = userProfile.achievements.some((achievement) => achievement.title?.trim() && achievement.image?.trim());

  return (
    <main className="min-h-screen bg-[#070D18] text-white">
      {/* Banner */}
      <div className="relative aspect-[4/1] max-h-80 min-h-35 w-full overflow-hidden">
        <img src={userProfile.banner} alt={`${userProfile.username} profile banner`} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18]/70 via-transparent to-black/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        {/* Main profile card */}
        <section className={`${panelClass} mt-4 p-5 sm:p-6 lg:p-8`} aria-label="Player profile">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex justify-center lg:justify-start">
              <button type="button" onClick={() => setShowAvatarPreview(true)} aria-label="Preview player avatar" className="group relative cursor-zoom-in rounded-full">
                <span className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl" />
                <img
                  src={avatarSrc}
                  alt={`${userProfile.username} avatar`}
                  onError={() => setAvatarSrc(FALLBACK_AVATAR)}
                  className="relative h-28 w-28 rounded-full border-2 border-sky-500/40 object-cover transition-transform duration-300 group-hover:scale-105 sm:h-36 sm:w-36 lg:h-60 lg:w-60"
                />
                <span className="absolute inset-0 flex scale-105 items-center justify-center rounded-full bg-black/50 text-xs font-semibold tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">VIEW</span>
              </button>
            </div>

            <div className="min-w-0 flex-1">
              <div className="hidden items-start justify-between gap-6 lg:flex">
                <div>
                  <h1 className="text-4xl font-black tracking-wide text-white">{userProfile.username}</h1>
                  <p className="mt-1 text-sm text-zinc-500">UID #{userProfile.uid}</p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <div className="border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sm font-medium text-sky-300">{status}</div>
                  <div className="flex gap-3">
                    <SocialLink platform="instagram" value={userProfile.socialLinks.instagram} />
                    <SocialLink platform="discord" value={userProfile.socialLinks.discord} />
                  </div>
                </div>
              </div>

              <div className="text-center lg:hidden">
                <h1 className="text-3xl font-black tracking-wide text-white">{userProfile.username}</h1>
                <p className="mt-1 text-sm text-zinc-500">UID #{userProfile.uid}</p>
              </div>

              <div className="mt-4 flex justify-center lg:justify-start">
                <div className="flex items-center border border-sky-500/30 bg-[#080F1C]">
                  <span className="bg-sky-500 px-3 py-3 text-xs font-black text-black">ROLE</span>
                  <span className="px-4 py-3 text-sm font-bold uppercase tracking-wider text-white">{userProfile.role}</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
                <span className="border border-zinc-700 bg-[#080F1C] px-4 py-2 text-sm text-zinc-300">Age — {userProfile.age}</span>
                <span className="border border-zinc-700 bg-[#080F1C] px-4 py-2 text-sm text-zinc-300">{userProfile.country}</span>
                <div className="flex flex-wrap justify-center gap-2">
                  {userProfile.languages.map((language) => <span key={language} className="border border-sky-500/20 bg-sky-500/10 px-3 py-2 text-sm text-sky-300">{language}</span>)}
                </div>
              </div>

              <p className="mt-5 text-center text-sm leading-relaxed text-zinc-300 lg:text-left">{userProfile.bio}</p>

              <div className="mt-6 lg:hidden">
                <div className="border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">{status}</div>
                <div className="mt-4 flex justify-center gap-3">
                  <SocialLink platform="instagram" value={userProfile.socialLinks.instagram} mobile />
                  <SocialLink platform="discord" value={userProfile.socialLinks.discord} mobile />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats, experience and team history */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Panel title="Player Stats" icon={Shield}>
            {hasStats ? <div className="space-y-3">{stats.map((item) => (
              <div key={item.label} className={`${tileClass} p-4`}>
                <p className="text-xs uppercase tracking-wider text-zinc-500">{item.label}</p>
                <p className={`mt-1 text-lg font-semibold ${item.highlight ? "text-xl font-bold text-sky-400" : "text-white"}`}>{item.value}</p>
              </div>
            ))}</div> : <EmptyState icon={Shield} title="No Stats Available" description="Player has not added stats yet." />}
          </Panel>

          <Panel title="Experience" icon={Shield}>
            <div className="space-y-3">{experience.map((item) => (
              <div key={item.label} className={`${tileClass} p-4`}>
                <p className="text-xs uppercase tracking-wider text-zinc-500">{item.label}</p>
                <p className={`mt-1 text-lg font-semibold ${item.highlight ? "text-xl font-bold text-sky-400" : "text-white"}`}>{item.value}</p>
              </div>
            ))}</div>
          </Panel>

          <Panel title="Previous Teams" icon={Users}>
            {hasTeams ? <div className="max-h-105 space-y-3 overflow-y-auto pr-1">{userProfile.teamHistory.filter((team) => team.teamName?.trim()).map((team) => (
              <article key={`${team.teamName}-${team.duration}`} className={`${tileClass} p-4 transition-colors duration-300 hover:border-sky-500/30`}>
                <h3 className="break-words text-sm font-semibold text-white">{team.teamName}</h3>
                <p className="mt-1 text-sm text-sky-300">{team.role}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500"><Clock3 size={13} aria-hidden="true" /><span>{team.duration}</span></div>
              </article>
            ))}</div> : <EmptyState icon={Users} title="No Team History" description="Player has not added any previous teams." />}
          </Panel>
        </div>

        {/* Featured clips */}
        <section className={`${panelClass} mt-8`}>
          <div className={topAccent} />
          <div className="p-4 sm:p-5">
            <div className="mb-5 flex items-center gap-2">
              <Video className="text-sky-400" size={18} aria-hidden="true" />
              <h2 className={sectionTitleClass}>Featured Clips</h2>
              <Link to="/clips" className="ml-auto text-sm font-medium text-sky-400 transition hover:text-white">View All →</Link>
            </div>
            {hasClips ? <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {userProfile.clips.filter((clip) => clip.title?.trim() && clip.clipUrl?.trim()).map((clip) => (
                <div key={clip.clipUrl} className="contents">
                  <ClipCard clip={clip} mobile onPlay={setSelectedVideo} />
                  <ClipCard clip={clip} onPlay={setSelectedVideo} />
                </div>
              ))}
            </div> : <EmptyState icon={Video} title="No Clips Added" description="Player has not uploaded any clips yet." />}
          </div>
        </section>

        {/* Achievements */}
        <section className={`${panelClass} mt-8`}>
          <div className={topAccent} />
          <div className="p-4 sm:p-5">
            <div className="mb-5 flex items-center gap-2">
              <Trophy className="text-sky-400" size={18} aria-hidden="true" />
              <h2 className={sectionTitleClass}>Achievements</h2>
              <Link to="/achievements" className="ml-auto text-sm font-medium text-sky-400 transition hover:text-white">View All →</Link>
            </div>
            {hasAchievements ? <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {userProfile.achievements.filter((achievement) => achievement.title?.trim() && achievement.image?.trim()).map((achievement) => (
                <div key={`${achievement.title}-${achievement.image}`} className="contents">
                  <AchievementCard achievement={achievement} onSelect={setSelectedAchievement} mobile />
                  <AchievementCard achievement={achievement} onSelect={setSelectedAchievement} />
                </div>
              ))}
            </div> : <EmptyState icon={Trophy} title="No Achievements Yet" description="You have not added any achievements." />}
          </div>
        </section>
      </div>

      {/* Avatar preview */}
      {showAvatarPreview && <Modal title="Player avatar preview" onClose={closeAvatar} dialogClass="flex max-w-[90vw] justify-center">
        <img src={avatarSrc} alt={`${userProfile.username} avatar enlarged`} className="max-h-[90vh] max-w-full border border-sky-500/30 object-contain shadow-[0_0_50px_rgba(56,189,248,0.25)]" />
      </Modal>}

      {/* Achievement preview */}
      {selectedAchievement && <Modal title={selectedAchievement.title} onClose={closeAchievement} dialogClass="max-w-5xl">
        <img src={selectedAchievement.image} alt={selectedAchievement.title} loading="eager" className="max-h-[80vh] w-full border border-sky-500/30 bg-[#080F1C] object-contain" />
        <div className="border border-t-0 border-sky-500/30 bg-[#080F1C] p-4"><h3 className="text-center text-lg font-semibold text-white">{selectedAchievement.title}</h3></div>
      </Modal>}

      {/* YouTube preview */}
      {selectedVideo && <Modal title="Video preview" onClose={closeVideo} dialogClass="max-w-5xl">
        <div className="aspect-video w-full border border-sky-500/30 bg-black">
          <iframe
            src={selectedVideo}
            title="Featured Free Fire MAX clip"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Modal>}
    </main>
  );
}
