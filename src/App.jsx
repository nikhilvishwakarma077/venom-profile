import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

    <Navbar username="venom" />
    <Routes>

      <Route path="/" element={<Home />} />

    </Routes>
    </>
  );
}

export default App;