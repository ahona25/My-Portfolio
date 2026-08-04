import React from 'react';
import { ArrowUp, Heart, Sparkles, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top Row */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-badge">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="footer-brand-name">{personal.name}</h3>
              <p className="footer-brand-tag">{personal.title}</p>
            </div>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Middle Navigation & Socials */}
        <div className="footer-middle">
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={personal.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href={`mailto:${personal.email}`} title="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="footer-crafted-by">
            Crafted with <Heart size={14} className="heart-icon" /> React & Modern CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
