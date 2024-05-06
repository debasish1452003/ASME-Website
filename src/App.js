import "./App.css";
import HomePage from "./pages/HomePage";
import Aboutus from "./pages/Aboutus";
import { Routes, Route } from "react-router-dom";
import Pagenotfound from "./pages/Pagenotfound";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery.js";
import Achievement from "./pages/Achievement.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage state={false} state2={true} />} />
        <Route
          path="/ASME-Website"
          element={<HomePage state={true} state2={false} />}
        />

        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/Our-Team" element={<Team />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<Achievement />} />
      </Routes>
    </>
  );
}

export default App;
