import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={16} /> Career & Education
          </span>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            My practical developer journey, project milestones, and academic background in software engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experience.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                {idx === 0 ? <Briefcase size={18} /> : <GraduationCap size={18} />}
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="item-role">{item.role}</h3>
                    <h4 className="item-company">{item.company}</h4>
                  </div>
                  <div className="timeline-meta">
                    <span className="meta-pill">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <span className="meta-pill">
                      <MapPin size={14} /> {item.location}
                    </span>
                  </div>
                </div>

                <ul className="item-highlights">
                  {item.highlights.map((point, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="highlight-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
