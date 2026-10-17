import React from "react";
import Hero from "../components/home/Hero";
import AchievementSection from "../components/home/AchievementSection";
import ClipsSection from "../components/home/ClipsSection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070b12]">
      <Hero />
      <AchievementSection username="venom" />
      <ClipsSection username="venom" />
      <Footer />
    </div>
  );
}
