import React from 'react';
import { Sparkles, Code, Compass, Zap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

export default function About() {
  const { personal, stats } = portfolioData;

  const coreValues = [
    {
      icon: <Code size={24} />,
      title: "Clean Architecture",
      description: "Writing maintainable, modular, and readable React code that scales effortlessly."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Stunning Aesthetics",
      description: "Combining harmonious color palettes with glassmorphic visuals for memorable UIs."
    },
    {
      icon: <Zap size={24} />,
      title: "Optimized Performance",
      description: "Fast loading times, responsive mobile layouts, and smooth 60fps animations."
    },
    {
      icon: <Compass size={24} />,
      title: "Problem Solver",
      description: "Translating complex requirements into intuitive, elegant digital solutions."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Award size={16} /> About Me
          </span>
          <h2 className="section-title">
            Passionate Software Engineer & <span className="gradient-text">React Innovator</span>
          </h2>
          <p className="section-subtitle">
            Dedicated to creating meaningful web solutions with high standards of design and functionality.
          </p>
        </div>

        {/* Top Split: Bio & Stats */}
        <div className="about-grid">
          <div className="glass-card about-bio-card">
            <h3 className="about-card-heading">My Engineering Journey</h3>
            {personal.aboutLong.split('\n\n').map((paragraph, index) => (
              <p key={index} className="about-paragraph">{paragraph}</p>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map((item, idx) => (
              <div key={idx} className="glass-card stat-card">
                <span className="stat-value gradient-text">{item.value}</span>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Cards */}
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="glass-card value-card">
              <div className="value-icon-box">{value.icon}</div>
              <h4 className="value-title">{value.title}</h4>
              <p className="value-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
