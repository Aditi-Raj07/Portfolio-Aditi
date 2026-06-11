import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-slate-900 text-slate-100 pt-20 pb-12 px-6 md:px-12 lg:px-24 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block bg-emerald-500/10 text-emerald-400 font-mono text-xs px-3 py-1 rounded-full border border-emerald-500/20">
            Available for Software Engineering Roles
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Aditi Raj</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            A B.Tech IT student with a strong foundation in Data Structures and Algorithms and hands-on experience in the MERN stack. Focused on building efficient, scalable software solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 font-mono pt-2">
            <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-emerald-400" /> Buxar, Bihar, India</span>
            <span className="flex items-center gap-1.5"><FaEnvelope className="text-emerald-400" /> aditirh2006@gmail.com</span>
          </div>
        </div>

        {/* Visual Coding Streak Display Block */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center w-full max-w-xs h-64 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
          <p className="text-sm font-mono text-emerald-400 tracking-widest uppercase">// CONSISTENCY</p>
          <h3 className="text-6xl font-extrabold text-white mt-3 font-mono tracking-tight">200+</h3>
          <p className="text-slate-300 font-medium mt-2">Day Coding Streak</p>
          <p className="text-xs text-slate-500 mt-1">Maintained across algorithmic platforms</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;