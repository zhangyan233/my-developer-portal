import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import InternDiary from './pages/InternDiary'
import Showcase from './pages/Showcase';
import Passions from './pages/Passions'
import Contact from './pages/Contact';

import './App.css';

const App:React.FC=()=>{
  return (
   <Router>
    <div className="min-h-screen flex flex-col">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/internDiary' element={<InternDiary/>}/>
        <Route path='/showcase' element={<Showcase/>}/>
        <Route path='/passions' element={<Passions/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
    </div>
   </Router>
  );
}

export default App;
