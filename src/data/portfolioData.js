export const portfolioData = {
  personal: {
    name: "Tasnim Binte Monir",
    nickname: "Ahona",
    title: "Full-Stack Software Engineer & React Specialist",
    shortBio: "Passionate about creating clean, accessible, and high-performance digital experiences. Specializing in modern React web applications, intuitive user interfaces, and robust web solutions.",
    aboutLong: `Hello! I'm Tasnim Binte Monir (Ahona), a software engineering student at Daffodil International University (DIU) and a passionate React web developer with a strong focus on building modern, user-centric web applications. 

My journey in software engineering is driven by curiosity, continuous learning, and a deep appreciation for sleek, performant user interfaces. I love turning complex ideas into elegant digital products using modern web technologies like React, JavaScript (ES6+), Node.js, and modern CSS architecture.

Currently pursuing my B.Sc. in Software Engineering at Daffodil International University, I bring dedication, clean code principles, and creative problem solving to every project.`,
    location: "Dhaka, Bangladesh",
    email: "tasnimahona00@gmail.com",
    phone: "01841212337",
    formattedPhone: "+880 1841-212337",
    github: "https://github.com/ahona25",
    linkedin: "https://www.linkedin.com/in/tasnimbintamonir",
    facebook: "https://www.facebook.com/share/1D65di6YdM/",
    status: "Available for Hire & Projects",
    avatar: "/profile.jpg"
  },

  stats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Tech Repositories", value: "20+" },
    { label: "Coding Experience", value: "2+ Yrs" },
    { label: "Client Satisfaction", value: "100%" }
  ],

  skillCategories: [
    {
      id: "frontend",
      name: "Frontend Mastery",
      description: "Crafting intuitive, pixel-perfect user interfaces and responsive web applications",
      skills: [
        { name: "React.js", level: 92, status: "Expert", icon: "Code2", experience: "2+ Yrs" },
        { name: "JavaScript (ES6+)", level: 90, status: "Expert", icon: "FileCode", experience: "2+ Yrs" },
        { name: "HTML5 & Modern CSS3", level: 95, status: "Master", icon: "Layout", experience: "3+ Yrs" },
        { name: "State Management (Context/Redux)", level: 88, status: "Advanced", icon: "Layers", experience: "2 Yrs" },
        { name: "Vite & Build Tooling", level: 85, status: "Advanced", icon: "Zap", experience: "2 Yrs" },
        { name: "Responsive UI & Glassmorphism", level: 94, status: "Master", icon: "Palette", experience: "2+ Yrs" }
      ]
    },
    {
      id: "backend",
      name: "Backend & Databases",
      description: "Building scalable server logic, REST API architectures, and data stores",
      skills: [
        { name: "Node.js", level: 82, status: "Proficient", icon: "Server", experience: "1.5 Yrs" },
        { name: "Express.js", level: 80, status: "Proficient", icon: "Cpu", experience: "1.5 Yrs" },
        { name: "RESTful API Integration", level: 88, status: "Advanced", icon: "Globe", experience: "2 Yrs" },
        { name: "MongoDB & Database Design", level: 78, status: "Proficient", icon: "Database", experience: "1 Yr" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Ecosystem",
      description: "Industry-standard developer tooling and collaboration workflows",
      skills: [
        { name: "Git & GitHub", level: 90, status: "Expert", icon: "GitBranch", experience: "2+ Yrs" },
        { name: "VS Code Workflows", level: 92, status: "Expert", icon: "Terminal", experience: "3+ Yrs" },
        { name: "Postman API Testing", level: 85, status: "Advanced", icon: "CheckCircle2", experience: "2 Yrs" },
        { name: "npm / Package Ecosystem", level: 88, status: "Advanced", icon: "Box", experience: "2 Yrs" }
      ]
    }
  ],

  projects: [
    {
      id: "handicraft-artisan-platform",
      title: "HandiCraft - Artisan E-Commerce Platform",
      category: "Full Stack",
      subtitle: "Authentic Handcrafted Products & E-Commerce Showcase",
      description: "A specialized web application dedicated to showcasing and selling authentic handcrafted artisan products, traditional crafts, and custom handmade creations with an intuitive shopping experience.",
      longDescription: "HandiCraft connects artisan craft creators with buyers. Built with modern React architecture, the platform features curated product galleries, category filtering for handmade items, interactive product detail modals, shopping cart management, and a warm artisan-inspired off-white & gold UI design.",
      tags: ["React", "JavaScript", "E-Commerce", "CSS3", "Handcrafted UI", "REST API"],
      githubUrl: "https://github.com/ahona25/HandiCraft",
      liveUrl: "https://github.com/ahona25/HandiCraft",
      featured: true,
      imageGradient: "linear-gradient(135deg, #D4A359 0%, #8C3A3C 100%)",
      badge: "Primary Featured Project"
    },
    {
      id: "personal-portfolio-react",
      title: "Interactive Developer Portfolio",
      category: "Web App",
      subtitle: "Luxury Off-White & Golden Amber React App",
      description: "High-performance personal web app featuring custom glassmorphic styling, golden amber color palette, interactive skill visualizations, dynamic dark mode, and direct contact suite.",
      longDescription: "Designed to wow visitors with rich micro-animations, fast Vite build speeds, responsive flex/grid structure, and accessible typography.",
      tags: ["React", "Vite", "Vanilla CSS", "Lucide React", "UX Design"],
      githubUrl: "https://github.com/ahona25",
      liveUrl: "#",
      featured: true,
      imageGradient: "linear-gradient(135deg, #8C3A3C 0%, #1A1918 100%)",
      badge: "Featured Portfolio"
    },
    {
      id: "task-workspace-dashboard",
      title: "Productivity & Workspace Task Board",
      category: "Web App",
      subtitle: "Real-time Agile Workflow Dashboard",
      description: "Real-time task tracking board with drag-and-drop workflow status updates, priority color badges, analytics counters, and local persistence.",
      longDescription: "A sleek productivity tool crafted to help users organize software projects, set task deadlines, and monitor completion progress with interactive charts.",
      tags: ["React", "JavaScript", "LocalStorage API", "CSS Animations"],
      githubUrl: "https://github.com/ahona25",
      liveUrl: "#",
      featured: false,
      imageGradient: "linear-gradient(135deg, #4A6B5D 0%, #D4A359 100%)",
      badge: "Web Application"
    },
    {
      id: "weather-insights-app",
      title: "Real-Time Weather Analytics App",
      category: "Web App",
      subtitle: "Geolocation & Extended Forecast Insights",
      description: "Dynamic weather forecasting web app offering geolocation weather detection, 7-day extended forecasts, UV & humidity index metrics, and smooth visuals.",
      longDescription: "Connects with live Weather APIs to display current ambient conditions, interactive daily cards, and customizable temperature units with automated background adjustments.",
      tags: ["React", "REST API", "Async/Await", "Responsive Design"],
      githubUrl: "https://github.com/ahona25",
      liveUrl: "#",
      featured: false,
      imageGradient: "linear-gradient(135deg, #1A1918 0%, #8C3A3C 100%)",
      badge: "API Integration"
    }
  ],

  experience: [
    {
      role: "React & Frontend Software Developer",
      company: "Independent Projects & Client Collaborations",
      period: "2023 - Present",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Architected responsive React web applications like HandiCraft with emphasis on clean component hierarchy and performance.",
        "Implemented custom design systems utilizing CSS custom properties, responsive grid frameworks, and glassmorphic UI patterns.",
        "Maintained version control workflows and collaborative codebase management via GitHub."
      ]
    },
    {
      role: "B.Sc. in Software Engineering",
      company: "Daffodil International University (DIU)",
      period: "Undergraduate Studies",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Studying Software Engineering principles, Object-Oriented Design, Data Structures & Algorithms, and System Architecture at Daffodil International University.",
        "Developing hands-on web applications, frontend React projects like HandiCraft, and collaborative software engineering tasks.",
        "Actively expanding technical skills in modern web frameworks, UI/UX design, and full-stack software development."
      ]
    }
  ]
};
