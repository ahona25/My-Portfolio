import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Copy,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState('');

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2500);
  };

  const contactItems = [
    {
      icon: <Mail size={26} />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      copyKey: 'email',
      copyValue: personal.email,
      description: "Drop me a message anytime"
    },
    {
      icon: <Phone size={26} />,
      label: "Phone & WhatsApp",
      value: personal.formattedPhone,
      href: `tel:${personal.phone}`,
      copyKey: 'phone',
      copyValue: personal.phone,
      description: "Available Mon–Sat, 9am–9pm"
    },
    {
      icon: <MapPin size={26} />,
      label: "Location",
      value: personal.location,
      href: null,
      copyKey: null,
      description: "Open to remote collaboration"
    },
  ];

  const socials = [
    {
      icon: <GithubIcon size={24} />,
      label: "GitHub",
      handle: "@ahona25",
      href: personal.github,
      color: "#24292e"
    },
    {
      icon: <LinkedinIcon size={24} />,
      label: "LinkedIn",
      handle: "tasnimbintamonir",
      href: personal.linkedin,
      color: "#0077B5"
    },
    {
      icon: <FacebookIcon size={24} />,
      label: "Facebook",
      handle: "Tasnim Binte Monir",
      href: personal.facebook,
      color: "#1877F2"
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={16} /> Get In Touch
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Reach out — I'd love to connect.
          </p>
        </div>

        {/* Big CTA Banner */}
        <div className="contact-cta-banner">
          <div className="cta-text">
            <h3 className="cta-heading">Ready to build something great?</h3>
            <p className="cta-sub">Let's turn your ideas into a polished digital product.</p>
          </div>
          <a href={`mailto:${personal.email}`} className="btn-primary cta-email-btn">
            Say Hello <ArrowUpRight size={20} />
          </a>
        </div>

        {/* Contact Info Row */}
        <div className="contact-row">
          {contactItems.map((item, idx) => (
            <div key={idx} className="contact-info-tile glass-card">
              <div className="tile-icon-wrap">
                {item.icon}
              </div>
              <div className="tile-body">
                <span className="tile-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="tile-value">{item.value}</a>
                ) : (
                  <span className="tile-value">{item.value}</span>
                )}
                <span className="tile-desc">{item.description}</span>
              </div>
              {item.copyKey && (
                <button
                  className={`tile-copy-btn ${copiedField === item.copyKey ? 'copied' : ''}`}
                  onClick={() => handleCopy(item.copyValue, item.copyKey)}
                  title={`Copy ${item.label}`}
                >
                  {copiedField === item.copyKey
                    ? <CheckCircle2 size={16} />
                    : <Copy size={16} />}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Social Media Cards */}
        <div className="socials-row">
          <div className="socials-label">
            <span>Find me on</span>
          </div>
          <div className="socials-cards">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card glass-card"
              >
                <div className="social-card-icon">{s.icon}</div>
                <div className="social-card-info">
                  <span className="social-card-platform">{s.label}</span>
                  <span className="social-card-handle">{s.handle}</span>
                </div>
                <ArrowUpRight size={18} className="social-card-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
