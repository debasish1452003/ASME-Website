import "./App.css";
import HomePage from "./pages/HomePage";
import Aboutus from "./pages/Aboutus";
import { Routes, Route } from "react-router-dom";
import Pagenotfound from "./pages/Pagenotfound";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Intro from "./components/Loader/Intro";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ASME-Website" element={<HomePage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/Our-Team" element={<Team />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/gallery" element={<Intro />} /> */}
      </Routes>
    </>
  );
}

export default App;
