import { Route, Routes } from "react-router-dom";
import "./index.css";
import Resume from "./Pages/Resume";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Contact from "./Components/Contact";
import ContactForm from "./Pages/ContactForm";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        {/* <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact /> */}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
