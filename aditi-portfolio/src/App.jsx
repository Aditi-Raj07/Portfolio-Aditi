import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsAchievements from './components/SkillsAchievements'; // Must match file name exactly!

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Structural layout matching professional portfolio patterns */}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <SkillsAchievements />
      </main>
      
      {/* Minimalistic Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} Aditi Raj. Built using React and Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;