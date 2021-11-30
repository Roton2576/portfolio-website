import './App.css';
import Join from './components/Join/Join';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioDetails from './components/PortfolioDetails/PortfolioDetails';
import HondaCarSite from './components/HondaCarSite/HondaCarSite';
import MedicalCareSite from './components/MedicalCareSite/MedicalCareSite';
import MyBlog from './components/MyBlog/MyBlog';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={ <Join></Join> } />
            <Route path="/developersite" element={<PortfolioDetails />} />
            <Route path="/hondacarsite" element={<HondaCarSite />} />
            <Route path="/medicalsite" element={<MedicalCareSite />} />
            <Route path="/myblog" element={<MyBlog />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
