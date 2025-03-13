import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePage from "./pages/ResumePage";
import TemplatesPage from "./pages/TemplatesPage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AuthRoute from './components/AuthRoute';
import Header from "./pages/Header";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
      <Header/>
      <Routes>
        <Route path="/" element={<AuthRoute />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume/:resumeId" element={<ResumePage />} /> {/* Fix: Add dynamic route for ResumePage */}
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
