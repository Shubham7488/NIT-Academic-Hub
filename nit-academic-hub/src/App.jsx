// export default App;

import "./styles/variables.css";
import "./styles/main.css";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Homepage Components
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import StatsSection from "./components/StatsSection";

// MCA Pages
import MCA from "./pages/MCA/MCA";
import SemesterPage from "./pages/MCA/SemesterPage";
import SubjectPage from "./pages/MCA/SubjectPage";

// MBA Pages
import MBA from "./pages/MBA/MBA";
import MBASemesterPage from "./pages/MBA/SemesterPage";
import MBASubjectPage from "./pages/MBA/SubjectPage";

// MSC Pages
import MSC from "./pages/MSC/MSC";
import MSCBranchSemesterPage from "./pages/MSC/MSCBranchSemesterPage";
import MSCBranchSubjectsPage from "./pages/MSC/MSCBranchSubjectsPage";
import MSCSubjectPage from "./pages/MSC/MSCSubjectPage"; // ✅ NEW LINE

// MTech Pages
import MTech from "./pages/MTECH/MTECH";
import BranchSemesterPage from "./pages/MTECH/BranchSemesterPage";
import BranchSemesterSubjects from "./pages/MTECH/BranchSemesterSubjects";
import MtechSubjectPage from "./pages/MTECH/MtechSubjectPage";

// BTech Pages
import BTech from "./pages/BTECH/BTech";
import BranchSemesterPageBTech from "./pages/BTECH/BranchSemesterPage";
import BranchSemesterSubjectsBTech from "./pages/BTECH/BranchSemesterSubjects";
import BtechSubjectPage from "./pages/BTECH/BtechSubjectPage";

// Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// Other Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Support/Feedback";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/Support/PrivacyPolicy";

// AI Assistant
import AiAssistant from "./pages/Support/AiAssistant";

// Interview Experiences
import InterviewExperiences from "./pages/Support/InterviewExperiences";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const hideFooterRoutes = ["/login", "/signup"];

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CoursesSection />
              <StatsSection />
            </>
          }
        />
        {/* MCA */}
        <Route path="/mca" element={<MCA />} />
        <Route path="/mca/semester/:number" element={<SemesterPage />} />
        <Route
          path="/mca/semester/:number/subject/:code"
          element={<SubjectPage />}
        />
        {/* MBA */}
        <Route path="/mba" element={<MBA />} />
        <Route path="/mba/semester/:number" element={<MBASemesterPage />} />
        <Route
          path="/mba/semester/:number/subject/:code"
          element={<MBASubjectPage />}
        />
        {/* MSC */}
        <Route path="/msc" element={<MSC />} />
        <Route path="/msc/:branch" element={<MSCBranchSemesterPage />} />
        <Route
          path="/msc/:branch/semester/:number"
          element={<MSCBranchSubjectsPage />}
        />
        <Route
          path="/msc/:branch/semester/:number/subject/:code"
          element={<MSCSubjectPage />}
        />{" "}
        {/* ✅ NEW ROUTE */}
        {/* MTech */}
        <Route path="/mtech" element={<MTech />} />
        <Route path="/mtech/:branch" element={<BranchSemesterPage />} />
        <Route
          path="/mtech/:branch/semester/:number"
          element={<BranchSemesterSubjects />}
        />
        <Route
          path="/mtech/:branch/semester/:number/subject/:code"
          element={<MtechSubjectPage />}
        />
        {/* BTech */}
        <Route path="/btech" element={<BTech />} />
        <Route path="/btech/:branch" element={<BranchSemesterPageBTech />} />
        <Route
          path="/btech/:branch/semester/:number"
          element={<BranchSemesterSubjectsBTech />}
        />
        <Route
          path="/btech/:branch/semester/:number/subject/:code"
          element={<BtechSubjectPage />}
        />
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Support Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* AI Assistant & Interviews */}
        <Route path="/ai-assistant" element={<AiAssistant />} />
        <Route
          path="/interview-experiences"
          element={<InterviewExperiences />}
        />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;

