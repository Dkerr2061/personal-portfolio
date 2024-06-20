import { Route, Routes } from "react-router-dom";
import "./index.css";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
