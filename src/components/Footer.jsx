import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-[#8b5cf6] to-[#6d28d9] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">Hero IO</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-70">
              Discover, install, and manage the world's best applications in one powerful platform. Built for performance and designed for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/apps" className="hover:text-purple-400 transition-colors">All Apps</Link></li>
              <li><Link to="/installation" className="hover:text-purple-400 transition-colors">My Installation</Link></li>
            </ul>
          </div>

          {/* Social & Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li>
                {/* Contribution link as per requirements */}
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700 transition-all text-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Contribute
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Status */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-slate-800 border-none rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-purple-500 outline-hidden"
              />
              <button className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded-md text-xs font-medium transition-all">
                Join
              </button>
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-widest opacity-50">
              ● System Status: Operational
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-xs opacity-60">
            &copy; {currentYear} Hero IO. All rights reserved. Designed for Assignment 03.
          </p>
          <div className="flex gap-6 text-xs opacity-60">
            <span>Built with React & Tailwind v4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;