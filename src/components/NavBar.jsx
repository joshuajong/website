// Thanks to https://flowbite.com/docs/components/navbar/ for the starter code
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4 bg-white">
        <Link to="/home" className="flex">
            <img src="/images/error.jpg" className="h-8 mr-3" alt="Me :)" />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-8 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-white border-gray-700">
            <li>
              <Link
                to="home"
                className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 border-blue-500 hover:border-b-2 rounded-none ${activeLink === 'home' ? 'text-blue-700 border-b-2' : 'text-slate-900'}`}
                onClick={() => handleClick('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 border-blue-500 hover:border-b-2 rounded-none ${activeLink === 'about' ? 'text-blue-700 border-b-2' : 'text-slate-900'}`}
                onClick={() => handleClick('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 border-blue-500 hover:border-b-2 rounded-none ${activeLink === 'blog' ? 'text-blue-700 border-b-2' : 'text-slate-900'}`}
                onClick={() => handleClick('blog')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 border-blue-500 hover:border-b-2 rounded-none ${activeLink === 'contact' ? 'text-blue-700 border-b-2' : 'text-slate-900'}`}
                onClick={() => handleClick('contact')}
              >
                Contact
              </Link>
            </li>
            {/* <li>
              <Link
                to="investment_calculator"
                className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 border-blue-500 hover:border-b-2 rounded-none ${activeLink === 'contact' ? 'text-blue-700 border-b-2' : 'text-slate-900'}`}
                onClick={() => handleClick('investment_calculator')}
              >
                Calculator
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default NavBar;