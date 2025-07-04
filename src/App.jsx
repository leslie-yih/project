import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProjectGrid from './ProjectGrid';
import ProjectDetail from './ProjectDetail';
import PatentList from './PatentList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProjectGrid />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/patents" element={<PatentList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;