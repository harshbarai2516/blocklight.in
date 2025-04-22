import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Navibar from './Navbar';
import Footer from './Footer';
import News from './News';
import './App.css';
import CaseStudy from './Casestudy/CaseStudy';
import General from './General';
import Crypto101 from './Learn/Crypto101';
import Blockchain101 from './Learn/Blockchain101';
import Trading101 from './Learn/Trading101';
import Daily from './Analysis/Daily';
import Weekly from './Analysis/Weekly';
import Long from './Analysis/Long';
function App() {
  return (
    <div className='App'>
      <Router>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/navbar" element={<Navibar />} />
        <Route path="/news" element={<News />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/general" element={<General />} />
        <Route path="crypto101" element={<Crypto101 />} />
        <Route path="blockchain101" element={<Blockchain101 />} />
        <Route path="trading101" element={<Trading101 />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/longterm" element={<Long />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}
export default App;