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

// CSS
import "./index.scss";
import './App.scss';

const App = () => {
  return (
    <div className="app wrapper">
      <header>
        <NavBar />
        <h1>jobi</h1>
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