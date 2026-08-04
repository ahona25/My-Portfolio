import React, { useState } from 'react';
import { FolderGit2, Sparkles, X, ArrowUpRight, ShoppingBag, Layers, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const { projects } = portfolioData;
  const [filterCategory, setFilterCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Web App'];

  const spotlightProject = projects.find(p => p.id === 'handicraft-artisan-platform') || projects[0];

  const filteredProjects = filterCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={16} /> Engineering Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Work</span>
          </h2>
          <p className="section-subtitle">
            Explore my latest web applications, full-stack systems, and open-source GitHub repositories.
          </p>
        </div>

        {/* Hero Spotlight Banner for HandiCraft */}
        <div className="glass-card spotlight-card">
          <div className="spotlight-badge-bar">
            <span className="spotlight-tag">
              <ShoppingBag size={14} /> Spotlight Showcase
            </span>
            <span className="spotlight-category">{spotlightProject.badge}</span>
          </div>

          <div className="spotlight-content-grid">
            <div className="spotlight-info">
              <h3 className="spotlight-title">{spotlightProject.title}</h3>
              <p className="spotlight-subtitle">{spotlightProject.subtitle}</p>
              <p className="spotlight-desc">{spotlightProject.description}</p>

              <div className="project-tags spotlight-tags">
                {spotlightProject.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">{tag}</span>
                ))}
              </div>

              <div className="spotlight-actions">
                <a 
                  href={spotlightProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <GithubIcon size={18} /> View HandiCraft Repository <ArrowUpRight size={18} />
                </a>

                <button 
                  onClick={() => setSelectedProject(spotlightProject)}
                  className="btn-secondary"
                >
                  View Details
                </button>
              </div>
            </div>

            <div className="spotlight-banner-graphic" style={{ background: spotlightProject.imageGradient }}>
              <div className="graphic-content">
                <ShoppingBag size={56} className="spotlight-icon" />
                <span className="graphic-title">HandiCraft</span>
                <span className="graphic-sub">Artisan Handcrafted E-Commerce</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="project-filter-bar">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${filterCategory === cat ? 'active' : ''}`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              {/* Banner */}
              <div 
                className="project-banner"
                style={{ background: project.imageGradient }}
              >
                <span className="project-category-badge">{project.badge || project.category}</span>
                <Sparkles size={28} className="banner-sparkle-icon" />
              </div>

              {/* Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Footer Links & Actions */}
                <div className="project-footer">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn-secondary btn-sm"
                  >
                    View Details
                  </button>

                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div 
              className="modal-banner" 
              style={{ background: selectedProject.imageGradient }}
            >
              <span className="project-category-badge">{selectedProject.badge || selectedProject.category}</span>
              <h3 className="modal-banner-title">{selectedProject.title}</h3>
            </div>

            <div className="modal-body">
              <h4 className="modal-section-heading">Overview</h4>
              <p className="modal-text">{selectedProject.longDescription}</p>

              <h4 className="modal-section-heading">Technologies Used</h4>
              <div className="project-tags modal-tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">{tag}</span>
                ))}
              </div>

              <div className="modal-actions">
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <GithubIcon size={18} /> View on GitHub <ArrowUpRight size={16} />
                </a>
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="btn-secondary"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
