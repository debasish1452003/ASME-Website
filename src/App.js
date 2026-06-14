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
import AdminPanel from "./pages/AdminPanel.js";
import Blogs from "./pages/Blogs.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage state={true} state2={false} />} />

        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/Our-Team" element={<Team />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<Achievement />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/all" element={<Loader />} /> */}
      </Routes>
    </>
  );
}

export default App;
