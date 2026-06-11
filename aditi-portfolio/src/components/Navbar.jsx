import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-100 py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wider text-emerald-400 font-mono">
        &lt;AditiRaj /&gt;
      </div>
      
      <div className="flex items-center gap-6">
        <a href="#projects" className="text-sm font-medium hover:text-emerald-400 transition-colors">Projects</a>
        <a href="#skills" className="text-sm font-medium hover:text-emerald-400 transition-colors">Skills & Stats</a>
        <span className="text-slate-700">|</span>
        <a href="https://github.com/Aditi-Raj07" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/aditiraj41/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
          <FaLinkedin size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;