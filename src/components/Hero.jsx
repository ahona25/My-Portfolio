import React from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Download, 
  Sparkles, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const { personal } = portfolioData;

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4A359', '#8C3A3C', '#4A6B5D', '#FFFFFF']
    });
    alert(`Thank you for your interest! Tasnim Ahona's resume can be requested directly at ${personal.email} or downloaded from her profile.`);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & Content */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{personal.status}</span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>
          <div className="hero-nickname">
            <span>Also known as <strong>"{personal.nickname}"</strong></span>
          </div>

          <h2 className="hero-subheading">{personal.title}</h2>

          <p className="hero-bio">{personal.shortBio}</p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            
            <button onClick={handleDownloadResume} className="btn-secondary">
              <Download size={18} /> Resume
            </button>
          </div>

          {/* Social & Contact Bar */}
          <div className="hero-social-bar">
            <span className="social-label">Connect with me:</span>
            <div className="social-icons">
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>

              <a 
                href={personal.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                title="Facebook Profile"
              >
                <FacebookIcon size={20} />
              </a>

              <a 
                href={`mailto:${personal.email}`} 
                className="social-icon-btn" 
                title="Send Email"
              >
                <Mail size={20} />
              </a>

              <a 
                href={`tel:${personal.phone}`} 
                className="social-icon-btn" 
                title="Call Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Framed Portrait Image & Floating Badges */}
        <div className="hero-visual">
          <div className="portrait-wrapper">
            {/* Ambient Background Glow */}
            <div className="portrait-ambient-glow"></div>
            
            {/* Outer Decorative Ring */}
            <div className="portrait-ring"></div>

            {/* Profile Image Frame */}
            <div className="portrait-card">
              <img 
                src={personal.avatar} 
                alt={personal.name} 
                className="portrait-image"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>

            {/* Floating Glass Badges */}
            <div className="floating-badge badge-top-right animated-float">
              <div className="badge-icon-box">
                <Code2 size={20} className="badge-icon" />
              </div>
              <div className="badge-text">
                <span className="badge-title">React Expert</span>
                <span className="badge-sub">Modern Web</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left animated-float" style={{ animationDelay: '1.5s' }}>
              <div className="badge-icon-box gold">
                <Sparkles size={20} className="badge-icon" />
              </div>
              <div className="badge-text">
                <span className="badge-title">Clean Code</span>
                <span className="badge-sub">UI & UX Focused</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-right animated-float" style={{ animationDelay: '3s' }}>
              <div className="badge-icon-box green">
                <CheckCircle2 size={20} className="badge-icon" />
              </div>
              <div className="badge-text">
                <span className="badge-title">Open for Projects</span>
                <span className="badge-sub">Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
