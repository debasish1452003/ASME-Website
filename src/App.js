import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Pagenotfound from "./pages/Pagenotfound";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ASME-Website" element={<HomePage />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/Our-Team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
