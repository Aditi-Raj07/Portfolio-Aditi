import React from 'react';
//export default SkillsAchievements;
const SkillsAchievements = () => {
  const skillCategories = [
    { title: "Languages", skills: ["C", "C++", "JavaScript"] },
    { title: "Frontend Frameworks", skills: ["HTML", "React.js", "Tailwind CSS"] },
    { title: "Backend & Databases", skills: ["Node.js", "Express.js", "MongoDB", "SQL Server", "Firebase"] },
    { title: "Tools & Core Subjects", skills: ["Git", "GitHub", "Postman", "DBMS", "Operating Systems", "Computer Networks"] }
  ];

  return (
    <section id="skills" className="bg-slate-900 text-slate-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left 2 Columns: Skills Grid */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase">// COMPETENCIES</p>
            <h2 className="text-3xl font-bold mt-2">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-800/30 border border-slate-800">
                <h4 className="text-emerald-400 font-mono text-sm font-semibold mb-3">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="text-sm bg-slate-800 text-slate-200 px-3 py-1 rounded border border-slate-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Column: Standout Ratings & Achievements */}
        <div className="space-y-6">
          <div>
            <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase">// VERIFIED METRICS</p>
            <h2 className="text-3xl font-bold mt-2">Achievements</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-800/40 border border-slate-800 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-400 font-medium">LeetCode Rating</p>
                <p className="text-xs text-slate-500 font-mono">Contest Standing</p>
              </div>
              <span className="text-xl font-bold text-white font-mono">1600+</span>
            </div>

            <div className="p-4 bg-slate-800/40 border border-slate-800 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-400 font-medium">GeeksForGeeks Rank</p>
                <p className="text-xs text-slate-500 font-mono">Platform Practice</p>
              </div>
              <span className="text-xl font-bold text-white font-mono">Top 20</span>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-950/30 to-slate-800/40 border border-purple-500/20 rounded-xl">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-mono">NATIONAL</span>
              <p className="text-sm text-white font-semibold mt-2">Smart India Hackathon 2025</p>
              <p className="text-xs text-slate-400 mt-0.5">College Finalist Status Achieved</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsAchievements;