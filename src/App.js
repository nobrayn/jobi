// modules
import { Routes, Route } from 'react-router-dom';

// pages
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import JobDetails from "./Pages/JobDetails";
import JobList from "./Pages/JobList";

// components
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"

// fonts
import "./fonts/EBGaramond-VariableFont_wght.ttf"
import "./fonts/Gordita-Regular.otf"

// CSS
import './App.scss';

const App = () => {
  return (
    <div className="app wrapper">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobDetails" element={<JobDetails />} />
        <Route path="/jobList" element={<JobList />} />
        <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>  
  )
};

export default App;