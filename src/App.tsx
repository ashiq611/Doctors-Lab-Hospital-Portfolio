
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Doctors } from "./pages/Doctors";
import { HospitalFeatures } from "./pages/HospitalFeatures";
import { LabReports } from "./pages/LabReports";
import { Pharmacy } from "./pages/Pharmacy";
import { Contact } from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/features" element={<HospitalFeatures />} />
        <Route path="/lab-reports" element={<LabReports />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
