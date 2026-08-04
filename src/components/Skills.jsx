import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Layout, 
  Zap, 
  Layers, 
  Palette, 
  Server, 
  Cpu, 
  Globe, 
  Database, 
  GitBranch, 
  Terminal, 
  CheckCircle2, 
  Box,
  Wrench,
  Sparkles,
  Award
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  Code2: <Code2 size={22} />,
  FileCode: <FileCode size={22} />,
  Layout: <Layout size={22} />,
  Zap: <Zap size={22} />,
  Layers: <Layers size={22} />,
  Palette: <Palette size={22} />,
  Server: <Server size={22} />,
  Cpu: <Cpu size={22} />,
  Globe: <Globe size={22} />,
  Database: <Database size={22} />,
  GitBranch: <GitBranch size={22} />,
  Terminal: <Terminal size={22} />,
  CheckCircle2: <CheckCircle2 size={22} />,
  Box: <Box size={22} />
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const currentCategory = skillCategories[activeCategoryIndex];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={16} /> Technical Mastery
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Engineering Matrix</span>
          </h2>
          <p className="section-subtitle">
            An interactive matrix of frontend mastery, backend frameworks, and essential developer tools.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="skills-nav-tabs">
          {skillCategories.map((category, idx) => (
            <button
              key={category.id}
              className={`skills-nav-btn ${activeCategoryIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveCategoryIndex(idx)}
            >
              <Sparkles size={16} className="btn-sparkle" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Meta Header */}
        <div className="category-meta-box">
          <h3 className="category-meta-title">{currentCategory.name}</h3>
          <p className="category-meta-desc">{currentCategory.description}</p>
        </div>

        {/* New 3D Glass Skill Cards Matrix Grid */}
        <div className="skill-matrix-grid">
          {currentCategory.skills.map((skill, index) => (
            <div key={index} className="glass-card skill-matrix-card">
              {/* Top Row: Icon + Name + Badge */}
              <div className="skill-card-head">
                <div className="skill-avatar-box">
                  {iconMap[skill.icon] || <Code2 size={22} />}
                </div>
                <div className="skill-heading-group">
                  <h4 className="skill-title-name">{skill.name}</h4>
                  <span className="skill-experience-tag">{skill.experience}</span>
                </div>
                <span className="skill-status-pill">{skill.status}</span>
              </div>

              {/* Meter Gauge & Level */}
              <div className="skill-level-block">
                <div className="level-text-row">
                  <span className="proficiency-label">Proficiency</span>
                  <span className="percentage-digit">{skill.level}%</span>
                </div>
                <div className="matrix-gauge-track">
                  <div 
                    className="matrix-gauge-bar" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="gauge-glow-tip"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tech Badge Cloud */}
        <div className="tech-cloud-wrapper">
          <div className="tech-cloud-title">
            <Award size={18} /> Integrated Tooling & Frameworks
          </div>
          <div className="tech-cloud-pills">
            {["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Vite", "Node.js", "Express.js", "REST APIs", "Git & GitHub", "Context API", "Postman", "Glassmorphic UI", "Responsive Web"].map((item, i) => (
              <span key={i} className="cloud-pill">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
