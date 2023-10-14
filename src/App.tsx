import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import "./styles/App.css";
import Skills from "./components/Skills";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;