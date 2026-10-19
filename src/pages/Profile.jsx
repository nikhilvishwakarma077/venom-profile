
import { ArrowUpRight, Trophy, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import charImg from "../../public/assets/images/char1.webp";
import SectionFade from "../components/SectionFade";

const Profile = () => {
    return (
        <section className="profile-opening relative isolate min-h-screen overflow-hidden bg-[#070D18] px-4 pb-5 pt-20 text-white sm:px-7 sm:pt-24 lg:px-10">
            <SectionFade />

            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(0,132,255,0.16),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(95,170,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(95,170,255,0.2)_1px,transparent_1px)] [background-size:45px_45px]" />

            <div className="mx-auto max-w-[1450px]">

                {/* HERO: TITLE + CHARACTER + SIDE CONTENT */}
                <div className="relative grid grid-cols-1 items-end md:min-h-[560px] md:grid-cols-[0.85fr_1.3fr_0.9fr] lg:min-h-[650px] lg:grid-cols-[0.9fr_1.35fr_0.9fr]">

                    {/* Oversized title behind character */}
                    <h1 className="pointer-events-none absolute left-1/2 top-[-25px] sm:top-[-70px] z-0 -translate-x-1/2 whitespace-nowrap font-['Oswald'] text-[21vw] font-black uppercase leading-[0.90] tracking-[-0.015em] text-[#DCE7F5] sm:text-[19vw]  md:text-[17vw] lg:text-[16vw] xl:text-[15vw]">
                        DL VENOM
                    </h1>

                    {/* Mobile character: right below title */}
                    <div className="relative col-span-1 flex h-[330px] items-end justify-center md:hidden">

                        <div className="absolute bottom-2 h-[230px] w-[230px] rounded-full border border-sky-400/20 bg-sky-500/[0.06] shadow-[0_0_70px_rgba(0,132,255,0.15)]" />
                        <div className="absolute bottom-5 h-[200px] w-[200px] rounded-full bg-sky-500/10 blur-3xl" />

                        {/* Floating Aura Particles */}
                        <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
                            {Array.from({ length: 18 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="aura-particle absolute rounded-full bg-sky-300"
                                    style={{
                                        left: `${10 + ((i * 37) % 80)}%`,
                                        top: `${15 + ((i * 29) % 70)}%`,
                                        width: `${3 + (i % 3)}px`,
                                        height: `${3 + (i % 3)}px`,
                                        animationDelay: `${(i % 8) * -0.7}s`,
                                        animationDuration: `${3.5 + (i % 4) * 0.5}s`,
                                        "--drift": `${(i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 10)}px`,
                                    }}
                                />
                            ))}
                        </div>



                        <img
                            src={charImg}
                            alt="DL Venom esports character"
                            className="relative z-10 h-[330px] max-w-full object-contain object-bottom drop-shadow-[0_0_25px_rgba(0,132,255,0.2)]"
                        />
                    </div>

                    {/* LEFT PANEL */}
                    <div className="relative z-20 order-2 mt-2 pb-5 md:order-1 md:mt-0 md:pb-10 lg:pb-12">
                        <p className="mb-4 font-['Oswald'] text-3xl font-bold uppercase leading-[1.05] text-sky-400 sm:text-4xl">
                            Primary
                            <br />
                            Rusher
                        </p>

                        <div className="space-y-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs sm:tracking-[0.2em]">
                            <p>Entry Fragger</p>
                            <p>Aggressive Playstyle</p>
                            <p>Close-Range Specialist</p>
                        </div>

                        <div className="my-5 h-px w-10 bg-sky-400" />

                        <div className="flex gap-2">
                            <span className="font-['Oswald'] text-4xl leading-none text-sky-400">
                                “
                            </span>
                            <p className="max-w-[250px] text-xs font-medium uppercase leading-[1.7] tracking-wide text-slate-300 sm:text-sm">
                                I break the front line, create space, and turn every push into
                                an opportunity.
                            </p>
                        </div>

                        <div className="mt-5 flex items-center gap-2">
                            <div className="h-px w-8 bg-sky-400/70" />
                            <span className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                                Fearless by nature
                            </span>
                        </div>
                    </div>

                    {/* DESKTOP CENTER CHARACTER */}
                    <div className="relative z-10 hidden h-full min-h-[560px] items-end justify-center md:order-2 md:flex lg:min-h-[650px]">
                        <div className="absolute bottom-[5%] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full border border-sky-400/20 bg-sky-500/[0.06] shadow-[0_0_90px_rgba(0,132,255,0.15)] lg:h-[360px] lg:w-[360px]" />
                        <div className="absolute bottom-[9%] left-1/2 h-[270px] w-[270px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl lg:h-[330px] lg:w-[330px]" />

                        {/* Floating Aura Particles */}
                        <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
                            {Array.from({ length: 18 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="aura-particle absolute rounded-full bg-sky-300"
                                    style={{
                                        left: `${10 + ((i * 37) % 80)}%`,
                                        top: `${15 + ((i * 29) % 70)}%`,
                                        width: `${4 + (i % 3)}px`,
                                        height: `${4 + (i % 3)}px`,
                                        animationDelay: `${(i % 8) * -0.7}s`,
                                        animationDuration: `${3.5 + (i % 4) * 0.5}s`,
                                        "--drift": `${(i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 10)}px`,
                                    }}
                                />
                            ))}
                        </div>

                        <img
                            src={charImg}
                            alt="DL Venom esports character"
                            className="relative z-10 h-[510px] max-w-[125%] object-contain object-bottom drop-shadow-[0_0_30px_rgba(0,132,255,0.2)] lg:h-[620px] xl:h-[660px]"
                        />

                        <span className="absolute bottom-[24%] left-1 z-20 hidden font-['Oswald'] text-[9px] uppercase tracking-[0.25em] text-sky-400/60 [writing-mode:vertical-rl] lg:block">
                            No retreat / No surrender
                        </span>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="relative z-20 order-3 mt-2 pb-5 md:mt-0 md:pb-10 lg:pb-12">


                        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
                            Esports Athlete
                        </p>

                        <h2 className="font-['Oswald'] text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-5xl">
                            DL
                            <br />
                            VENOM
                        </h2>

                        <p className="mt-2 break-words text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-xs">
                            DARK LEGION ESPORTS
                        </p>

                        <p className="mt-4 max-w-sm text-xs leading-[1.8] text-slate-400 sm:text-sm">
                            An aggressive entry fragger built for fast decisions, fearless
                            engagements, and opening space for the squad.
                        </p>

                        <div className="my-5 h-px w-full bg-gradient-to-r from-sky-400/50 to-transparent" />

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            <div className="min-w-0">
                                <Target size={17} className="mb-2 text-sky-400" />
                                <p className="font-['Oswald'] text-2xl font-bold sm:text-3xl">03+</p>
                                <p className="mt-1 text-[8px] uppercase leading-3 tracking-wide text-slate-500 sm:text-[9px]">
                                    Esports Exp.
                                </p>
                            </div>

                            <div className="min-w-0">
                                <Trophy size={17} className="mb-2 text-sky-400" />
                                <p className="font-['Oswald'] text-2xl font-bold sm:text-3xl">25+</p>
                                <p className="mt-1 text-[8px] uppercase leading-3 tracking-wide text-slate-500 sm:text-[9px]">
                                    Tournaments
                                </p>
                            </div>

                            <div className="min-w-0">
                                <Zap size={17} className="mb-2 text-sky-400" />
                                <p className="font-['Oswald'] text-xl font-bold sm:text-2xl">RUSH</p>
                                <p className="mt-1 text-[8px] uppercase leading-3 tracking-wide text-slate-500 sm:text-[9px]">
                                    Playstyle
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/players/venom/clips"
                            className="mt-5 inline-flex items-center gap-2 border border-sky-400/40 px-3 py-2.5 text-[9px] font-bold uppercase tracking-[0.12em] transition duration-300 hover:bg-sky-400 hover:text-[#070D18] sm:px-4 sm:text-[10px]"
                        >
                            Explore Highlights
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>
                </div>

                {/* Bottom strip */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-sky-400/15 pt-3 text-[8px] uppercase tracking-[0.15em] text-slate-600 sm:text-[9px] sm:tracking-[0.2em]">
                    <span>DL VENOM // Free Fire MAX</span>
                    <span className="hidden sm:block">Precision · Aggression · Impact</span>
                    <span>Player 001</span>
                </div>
            </div>
        </section>
    );
};

export default Profile;
