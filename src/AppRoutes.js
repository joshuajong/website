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
    document.title = 'JJ\'s'; // Replace with your desired title
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} /> 
        <Route path="home" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />}> / </Route>
        <Route path="/blog/thoughts" element={<ThoughtsPage />} />
        <Route path="/blog/travel" element={<TravelPage />} />
        <Route path="/blog/tech" element={<TechPage />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="investment_calculator" element={<InvestmentCalculator />} /> */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
