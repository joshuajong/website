import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Navbar from './components/NavBar';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ThoughtsPage from './pages/ThoughtsPage';
import TravelPage from './pages/TravelPage';
import TechPage from './pages/TechPage';
import Footer from './components/Footer';
// import InvestmentCalculator from './pages/InvestmentCalculator';

function AppRoutes() {
  useEffect(() => {
    document.title = "JJ's"; // Replace with your desired title
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/website" element={<Main />} />
        <Route path="/website/about" element={<About />} />
        <Route path="/website/blog" element={<Blog />}>
          <Route path="thoughts" element={<ThoughtsPage />} />
          <Route path="travel" element={<TravelPage />} />
          <Route path="tech" element={<TechPage />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback for /website/blog routes */}
        </Route>
        <Route path="/website/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Fallback for other routes */}
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
