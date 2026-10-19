import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <>

    <Navbar username="venom" />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/:profile" element={<Profile />} />

    </Routes>
    </>
  );
}

export default App;