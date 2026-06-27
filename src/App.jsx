import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Templates from "./components/Templates";

import BasicTemplates from "./templates/BasicTemplates";
import ProfessionalTemplates from "./templates/ProfessionalTemplates";
import PremiumTemplates from "./templates/PremiumTemplates";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Hero />} />

        {/* Pricing Page */}
        <Route path="/pricing" element={<Pricing />} />

        {/* All Templates Page */}
        <Route path="/templates" element={<Templates />} />

        {/* Plan-based Template Pages */}
        <Route path="/templates/basic" element={<BasicTemplates />} />
        <Route path="/templates/pro" element={<ProfessionalTemplates />} />
        <Route path="/templates/premium" element={<PremiumTemplates />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;