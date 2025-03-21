import React from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePage from "./pages/ResumePage";
import TemplatesPage from "./pages/TemplatesPage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AuthRoute from './components/AuthRoute';
import Header from "./pages/Header";
import TutStructure from "./pages/TutStructure";
import TutSummary from "./pages/TutSummary";
import TutATS from "./pages/TutATS";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RForm from "./components/RForm";
import Template1 from "./components/templates/Template1.jsx"
import Template2 from "./components/templates/Template2.jsx";
import Template3 from "./components/templates/Template3.jsx";
import Template4 from "./components/templates/Template4.jsx";
import Template5 from "./components/templates/Template5.jsx";
import Template6 from "./components/templates/Template6.jsx";
import CreateAkaResumePage from './pages/CreateAkaResumePage';
import ResumeViewer from "./components/ResumeViewer.jsx";

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
        <Route path="/tut-struc" element={<TutStructure/>}/>
        <Route path="/tut-summary" element={<TutSummary/>}/>
        <Route path="/tut-ats" element={<TutATS/>}/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/form" element={<RForm/>}></Route>
        <Route path="/temp1" element={<Template1/>}></Route>
        <Route path="/temp2" element={<Template2/>}></Route>
        <Route path="/temp3" element={<Template3/>}></Route>
        <Route path="/temp4" element={<Template4/>}></Route>
        <Route path="/temp5" element={<Template5/>}></Route>
        <Route path="/temp6" element={<Template6/>}></Route>
        <Route path="/create-resume/:templateId" element={<CreateAkaResumePage />} />
        <Route path="/aka_resume/:id" element={<ResumeViewer />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
