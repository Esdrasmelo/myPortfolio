import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutMe from "./views/AboutMe";
import Skills from "./views/Skills";
import Curiosity from "./views/Curiosity";
import Contact from "./views/Contact";
import MainLayout from "./layout/MainLayout";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/curiosity" element={<Curiosity />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
