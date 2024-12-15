import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AboutUs from './pages/About Us';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'gr'>('en');

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Public Routes */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col transition-colors">
                <Navbar language={language} setLanguage={setLanguage} />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home language={language} />} />
                    <Route path="/services" element={<Services language={language} setLanguage={setLanguage} />} />
                    <Route path="/contact" element={<Contact language={language} />} />
                    <Route path="/about-us" element={<AboutUs language={language} setLanguage={setLanguage} />} />
                  </Routes>
                </main>
                <Footer language={language} />
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}