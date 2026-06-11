import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaUser } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      title: "Interval – AI-Powered Mock Interview Platform",
      type: "Individual Project",
      isTeam: false,
      description: [
        "Developed an AI-powered mock interview platform supporting Technical, Core, HR, and Rapid Fire modes with multiple difficulty levels.",
        "Integrated Groq's LLaMA model using structured prompt engineering to generate adaptive, real-time interview questions and performance feedback.",
        "Implemented Firebase Authentication for secure user login and built dynamic routing with conversational memory for realistic interview simulation."
      ],
      techStack: ["React.js", "Node.js", "Groq API", "React Router", "Tailwind CSS", "Firebase"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Nagar Sahayata Portal",
      subtitle: "Smart Civic Complaint Management System",
      type: "SIH 2025 Finalist | Team Project",
      isTeam: true,
      description: [
        "Majorly contributed to backend development by building REST APIs, JWT authentication, role-based access control, and department-wise complaint workflows.",
        "Developed a full-stack civic complaint platform featuring image uploads, real-time status tracking, and multi-tier dashboards.",
        "Integrated AI-driven issue prioritization, live geo-location mapping, multilingual support, and automated citizen notifications."
      ],
      techStack: ["MERN Stack", "JWT Auth", "Cloudinary", "RBAC", "Geolocation", "AI Prioritization"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-slate-900 text-slate-100 py-16 px-6 md:px-12 lg:px-24 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase">// FEATURED WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Projects Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className={`bg-slate-800/40 border rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-xl ${
                project.isTeam ? 'border-purple-500/20 hover:border-purple-500/40' : 'border-slate-700/60'
              }`}
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                    {project.subtitle && <p className="text-slate-400 text-sm mt-1">{project.subtitle}</p>}
                  </div>
                  <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                    project.isTeam 
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                      : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    {project.isTeam ? <FaUsers size={12} /> : <FaUser size={10} />}
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-slate-900 text-slate-300 font-mono text-xs px-2.5 py-1 rounded border border-slate-700/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 text-slate-300 text-sm md:text-base mb-8 list-disc pl-4 marker:text-emerald-400">
                  {project.description.map((bullet, i) => (
                    <li key={i} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <a href={project.githubLink} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                  <FaGithub size={18} /> Code
                </a>
                <a href={project.liveLink} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                  <FaExternalLinkAlt size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;