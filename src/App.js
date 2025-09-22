import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Server, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration, admin dashboard, and real-time notifications.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/rajvardhan-ulape",
      live: "https://demo.com"
    },
    {
      title: "Social Media Dashboard", 
      description: "Analytics dashboard with data visualization, user management, and social media integration.",
      tech: ["React", "D3.js", "Firebase", "Material-UI"],
      github: "https://github.com/rajvardhan-ulape",
      live: "https://demo.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["React", "Socket.io", "PostgreSQL", "Express"],
      github: "https://github.com/rajvardhan-ulape", 
      live: "https://demo.com"
    }
  ];

  const skills = [
    { name: "Frontend", icon: Code, items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
    { name: "Backend", icon: Server, items: ["Node.js", "Express.js", "Python", "Java", "REST APIs"] },
    { name: "Database", icon: Database, items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { name: "Mobile", icon: Smartphone, items: ["React Native", "Flutter", "Android"] }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#1a1a1a',
      transition: 'all 0.3s ease'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: isDarkMode ? 'rgba(26, 26, 26, 0.9)' : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
      padding: '1rem 0'
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 2rem'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none'
    },
    navLink: {
      color: isDarkMode ? '#d1d5db' : '#4b5563',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s',
      textTransform: 'capitalize'
    },
    mobileMenu: {
      display: isMenuOpen ? 'block' : 'none',
      backgroundColor: isDarkMode ? '#2d2d2d' : '#f9f9f9',
      padding: '1rem',
      borderTop: `1px solid ${isDarkMode ? '#444' : '#ddd'}`
    },
    hero: {
      paddingTop: '100px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      padding: '100px 2rem 2rem'
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4rem)',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    section: {
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem'
    },
    grid: {
      display: 'grid',
      gap: '2rem'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    gridCols4: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    card: {
      backgroundColor: isDarkMode ? '#2d2d2d' : '#f9f9f9',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
    },
    button: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'background-color 0.2s',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    techTag: {
      backgroundColor: isDarkMode ? '#1e3a8a' : '#dbeafe',
      color: isDarkMode ? '#93c5fd' : '#1e40af',
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      margin: '0.25rem'
    },
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem'
    },
    socialLink: {
      color: isDarkMode ? '#9ca3af' : '#6b7280',
      transition: 'color 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Rajvardhan Ulape</div>
          
          {/* Desktop Navigation */}
          <ul style={{...styles.navLinks, display: window.innerWidth > 768 ? 'flex' : 'none'}}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  style={styles.navLink}
                  onClick={() => scrollToSection(item)}
                  onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                  onMouseLeave={(e) => e.target.style.color = isDarkMode ? '#d1d5db' : '#4b5563'}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Mobile Menu */}
          <div style={styles.flexCenter}>
            <button 
              onClick={toggleTheme}
              style={{
                ...styles.button,
                backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
                color: isDarkMode ? '#ffffff' : '#000000',
                padding: '0.5rem'
              }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            <button
              style={{...styles.button, display: window.innerWidth <= 768 ? 'block' : 'none'}}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <div key={item} style={{padding: '0.5rem 0'}}>
              <a 
                style={styles.navLink}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
  <div style={styles.heroContent}>
    {/* Profile Image */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
      <img
        src="/profile.jpg" // place your photo inside public/profile.jpg
        alt="Rajvardhan Ulape"
        style={{
          width: '320px',
          height: '320px',
          borderRadius: '80%',
          border: '4px solid #3b82f6',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        }}
      />
    </div>

    {/* Hero Title */}
    <h1 style={styles.heroTitle}>
      Hi, I'm{' '}
      <span
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Rajvardhan
      </span>
    </h1>

    {/* Subtitle */}
    <p style={styles.heroSubtitle}>
      Computer Science Engineering Student & Full-Stack Developer passionate about 
      building innovative web applications with the MERN stack.
    </p>

    {/* Buttons */}
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <button
        style={styles.button}
        onClick={() => scrollToSection('projects')}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#2563eb')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#3b82f6')}
      >
        View My Work <ExternalLink size={20} />
      </button>

      <button
        style={{
          ...styles.button,
          backgroundColor: 'transparent',
          border: `2px solid ${isDarkMode ? '#6b7280' : '#d1d5db'}`,
          color: isDarkMode ? '#d1d5db' : '#374151',
        }}
      >
        Download Resume <Download size={20} />
      </button>
    </div>

    {/* Social Links */}
    <div style={styles.socialLinks}>
      <a href="https://github.com/rajvardhan-ulape" style={styles.socialLink}>
        <Github size={24} />
      </a>
      <a href="https://linkedin.com/in/rajvardhan-ulape" style={styles.socialLink}>
        <Linkedin size={24} />
      </a>
      <a href="mailto:rajvardhanulape2151@gmail.com" style={styles.socialLink}>
        <Mail size={24} />
      </a>
    </div>
  </div>
</section>
      {/* About Section */}
      <section id="about" style={{
        ...styles.section,
        backgroundColor: isDarkMode ? '#0f0f0f' : '#f9fafb'
      }}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem'}}>
          <div>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              I'm a final-year Computer Science Engineering student with a passion for creating 
              innovative web applications. My journey in technology started with curiosity and 
              has evolved into expertise in full-stack development.
            </p>
            
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              I specialize in the MERN stack and enjoy solving complex problems through clean, 
              efficient code. When I'm not coding, you'll find me exploring new technologies 
              or contributing to open-source projects.
            </p>
          </div>
          
          <div style={styles.card}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Quick Stats</h3>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Projects Completed</span>
                <span style={{color: '#3b82f6', fontWeight: 'bold'}}>15+</span>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Technologies Mastered</span>
                <span style={{color: '#3b82f6', fontWeight: 'bold'}}>20+</span>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>GitHub Contributions</span>
                <span style={{color: '#3b82f6', fontWeight: 'bold'}}>500+</span>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Coffee Consumed</span>
                <span style={{color: '#3b82f6', fontWeight: 'bold'}}>∞</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills & Technologies</h2>
        
        <div style={{...styles.grid, ...styles.gridCols4}}>
          {skills.map((category, index) => (
            <div key={index} style={styles.card}>
              <div style={{...styles.flexCenter, marginBottom: '1rem'}}>
                <category.icon color="#3b82f6" size={24} />
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold'}}>{category.name}</h3>
              </div>
              
              <div>
                {category.items.map((skill, skillIndex) => (
                  <span key={skillIndex} style={styles.techTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        ...styles.section,
        backgroundColor: isDarkMode ? '#0f0f0f' : '#f9fafb'
      }}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        
        <div style={{...styles.grid, ...styles.gridCols3}}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                {project.title}
              </h3>
              
              <p style={{
                color: isDarkMode ? '#d1d5db' : '#6b7280',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>
              
              <div style={{marginBottom: '1rem'}}>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{display: 'flex', gap: '1rem'}}>
                <a
                  href={project.github}
                  style={{...styles.flexCenter, color: '#6b7280', textDecoration: 'none'}}
                  onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                  onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={project.live}
                  style={{...styles.flexCenter, color: '#6b7280', textDecoration: 'none'}}
                  onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                  onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Let's Work Together</h2>
        
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{
            fontSize: '1.1rem',
            color: isDarkMode ? '#d1d5db' : '#6b7280',
            marginBottom: '2rem',
            lineHeight: '1.8'
          }}>
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to chat about technology, 
            feel free to reach out!
          </p>
          
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
            <a
              href="mailto:rajvardhan.ulape@email.com"
              style={{...styles.button, textDecoration: 'none'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
              <Mail size={20} />
              Email Me
            </a>
            
            <a
              href="https://linkedin.com/in/rajvardhan-ulape"
              style={{...styles.button, textDecoration: 'none'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: `1px solid ${isDarkMode ? '#333' : '#e5e5e5'}`,
        color: isDarkMode ? '#9ca3af' : '#6b7280'
      }}>
        <p>© 2025 Rajvardhan Ulape. Built with React and lots of ☕</p>
      </footer>
    </div>
  );
};

export default Portfolio;