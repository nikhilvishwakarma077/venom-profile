import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Achievements from "./pages/Achievements";
import Clips from "./pages/Clips";
import Contact from "./pages/Contact";
import PageFade from "./components/PageFade";
import HomeIntro from "./components/HomeIntro";

function App() {
  return (
    <>
      <Navbar username="venom" />

      <Routes element={<PageFade />}>

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/clips" element={<Clips />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <HomeIntro />
    </>
  );
}

export default App;