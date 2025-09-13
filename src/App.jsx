import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BDD2 from "./pages/BDD2";
import Compiladores from "./pages/Compiladores";
import AnalisisSistemas from "./pages/AnalisisSistemas";
import SistemasOperativos from "./pages/SistemasOperativos";
import Arquitectura from './pages/Arquitectura';
import "./App.css";

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bdd2" element={<BDD2 />} />
        <Route path="/compiladores" element={<Compiladores />} />
        <Route path="/analisis-sistemas" element={<AnalisisSistemas />} />
        <Route path="/sistemas-operativos" element={<SistemasOperativos />} />
        <Route path="/arquitectura" element={<Arquitectura />} />
      </Routes>
      <Footer />
    </Router>
  );
}
