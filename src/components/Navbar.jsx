import React from 'react';
import { Link, NavLink } from 'react-router'; // react-router-dom ও ব্যবহার করতে পারেন

const Navbar = () => {
  // একটি কমন ক্লাস ফাংশন যা একটিভ লিঙ্ক হ্যান্ডেল করবে
  const navLinkStyles = ({ isActive }) => 
    `transition-colors duration-200 font-medium ${
      isActive ? 'text-[#7c3aed] border-b-2 border-[#7c3aed]' : 'text-gray-600 hover:text-[#7c3aed]'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 h-20">
        
        {/* 1. Logo Section (Navigates to Home) */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-linear-to-tr from-[#8b5cf6] to-[#7c3aed] rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-200 transition-transform group-hover:scale-105">
            H
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            Hero <span className="text-[#7c3aed]">IO</span>
          </span>
        </Link>

        {/* 2. Navigation Bar [home, apps, installation] */}
        <ul className="hidden md:flex items-center justify-center gap-8">
          <li>
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={navLinkStyles}>Apps</NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={navLinkStyles}>Installation</NavLink>
          </li>
        </ul>

        {/* 3. Contribution Button (Linking to GitHub) */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/YOUR_GITHUB_USERNAME" // এখানে আপনার গিটহাব ইউজারনেম দিন
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-purple-200 active:scale-95"
          >
            Contribution
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;