import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Amisha<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>Amisha Kumari</h1>

          <h2>
            Computer Science Engineer & <span>Software Developer</span>
          </h2>

          <p className="hero-description">
            I am a B.Tech Computer Science student passionate about
            Software Development, Data Structures & Algorithms,
            Full-Stack Development, and Artificial Intelligence.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>

            <a
              href="/Amisha_Kumari_Resume.pdf"
              className="btn secondary-btn"
              download
            >
              Download Resume
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/amisha8o"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/amisha-kumari-3b80aa2b1/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

     <div className="hero-card">
  <div className="profile-circle">
    <img
      src="/profile.jpg"
      alt="Amisha Kumari"
      className="profile-image"
    />
  </div>

  <h3>Software Developer</h3>
  <p>Java • DSA • MERN • AI/ML</p>
</div>
      </section>


      {/* About Section */}
      <section id="about" className="section">
        <p className="section-subtitle">GET TO KNOW ME</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Computer Science and Engineering student pursuing
              my B.Tech with an 8.78 CGPA. I enjoy building practical
              software solutions and solving complex problems using
              Data Structures and Algorithms.
            </p>

            <p>
              I have hands-on experience in Java, JavaScript, Python,
              MERN Stack, and AI/ML technologies. I am continuously
              learning and exploring modern technologies to become a
              strong Software Developer.
            </p>
          </div>

          <div className="about-stats">
  <div className="stat-card">
    <h3>8.78</h3>
    <p>CGPA</p>
  </div>

  <div className="stat-card">
    <h3>4+</h3>
    <p>Internships</p>
  </div>

  <div className="stat-card">
    <h3>10+</h3>
    <p>Projects</p>
  </div>
</div>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="section skills-section">
        <p className="section-subtitle">MY TECHNICAL EXPERTISE</p>
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Java</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>C Programming</p>
            <p>Data Structures & Algorithms</p>
          </div>

          <div className="skill-card">
            <h3>Web Development</h3>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>React.js</p>
            <p>Node.js</p>
            <p>Express.js</p>
          </div>

          <div className="skill-card">
            <h3>Database & Backend</h3>
            <p>MongoDB</p>
            <p>MySQL</p>
            <p>REST APIs</p>
            <p>JWT Authentication</p>
            <p>Git & GitHub</p>
          </div>

          <div className="skill-card">
            <h3>AI & Machine Learning</h3>
            <p>Machine Learning</p>
            <p>Pandas</p>
            <p>NumPy</p>
            <p>Scikit-learn</p>
            <p>AI Applications</p>
          </div>

        </div>
      </section>


      {/* Experience */}
      <section id="experience" className="section">
        <p className="section-subtitle">MY PROFESSIONAL JOURNEY</p>
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">

          <div className="experience-card">
            <h3>AI Automation and Intelligence Solutions Intern</h3>
            <h4>IBM SkillsBuild (AICTE) | July 2026 - Present</h4>
            <p>
              Developed AI-driven automation solutions using Python and
              Machine Learning. Worked with data preprocessing, machine
              learning algorithms, model evaluation, Git, and GitHub.
            </p>
          </div>

          <div className="experience-card">
            <h3>Full Stack Development Intern</h3>
            <h4>CodeAlpha | May 2026 - June 2026</h4>
            <p>
              Developed full-stack web applications using the MERN stack,
              including responsive frontend interfaces, backend APIs,
              authentication, database integration, debugging, testing,
              and deployment.
            </p>
          </div>

          <div className="experience-card">
            <h3>Software Development Intern</h3>
            <h4>Sysslan IT Solutions | April 2026 - May 2026</h4>
            <p>
              Contributed to MERN stack-based web application modules,
              focusing on frontend UI development, backend API integration,
              debugging, testing, feature implementation, and Git workflows.
            </p>
          </div>

          <div className="experience-card">
            <h3>Software Development Trainee</h3>
            <h4>Web2Ease Private Limited | June 2025 - July 2025</h4>
            <p>
              Worked on frontend and backend modules using HTML, CSS,
              JavaScript, and Node.js. Gained practical experience in
              API integration, debugging, and full-stack development.
            </p>
          </div>

        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="section projects-section">
        <p className="section-subtitle">WHAT I HAVE BUILT</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">

          {/* SmartHire */}
          <div className="project-card">
            <h3>SmartHire – AI Recruitment Platform</h3>

            <p>
              AI-powered recruitment and placement platform featuring
              AI resume analysis, ATS scoring, mock interviews,
              job recommendations, application tracking, recruiter
              dashboards, and placement management.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>JWT</span>
              <span>AI</span>
            </div>

            <a
              href="https://github.com/amisha8o/SmartHire-AI-Recruitment-Platform"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>
          </div>


          {/* Task Management */}
          <div className="project-card">
            <h3>Task Management System</h3>

            <p>
              Full-stack task management application with user
              authentication, JWT security, task management,
              REST APIs, and MongoDB integration.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>JWT</span>
            </div>

            <a
              href="https://github.com/amisha8o/CodeAlpha_ProjectManagementTool"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>
          </div>


          {/* Farmer Predictive System */}
          <div className="project-card">
            <h3>AI-Based Farmer Predictive System</h3>

            <p>
              AI-powered crop recommendation system that predicts
              suitable crops based on temperature, rainfall, and
              soil type using Machine Learning.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

           <a
  href="https://github.com/amisha8o/farmer-ai-project"
  className="project-link"
  target="_blank"
  rel="noreferrer"
>
  View Project →
</a>
          </div>


          {/* E-Commerce */}
          <div className="project-card">
            <h3>E-Commerce Store Website</h3>

            <p>
              Full-stack e-commerce web application with user
              authentication, product management, shopping cart,
              CRUD operations, REST APIs, and MongoDB integration.
            </p>

            <div className="tech-stack">
              <span>MongoDB</span>
              <span>Express</span>
              <span>React</span>
              <span>Node.js</span>
              <span>REST API</span>
            </div>

            <a
              href="https://github.com/amisha8o/CodeAlpha_EcommerceStore"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>
          </div>

        </div>
      </section>
      {/* Drone Dashboard */}
<div className="project-card">
  <h3>AI-Powered Drone Monitoring Dashboard</h3>

  <p>
    Futuristic drone surveillance dashboard featuring real-time drone
    monitoring, mission control, GPS tracking, radar animation,
    AI threat detection, security alerts, and drone analytics.
  </p>

  <div className="tech-stack">
    <span>HTML5</span>
    <span>CSS3</span>
    <span>JavaScript</span>
    <span>Bootstrap</span>
    <span>Chart.js</span>
  </div>

  <a
    href="https://github.com/amisha8o/Drone_Dashboard_Project"
    className="project-link"
    target="_blank"
    rel="noreferrer"
  >
    View Project →
  </a>
</div>


      {/* Education */}
      <section className="section education-section">
        <p className="section-subtitle">MY ACADEMIC BACKGROUND</p>
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>
            Bachelor of Technology – Computer Science & Engineering
          </h3>

          <h4>
            Government Mahila Engineering College, Ajmer, Rajasthan
          </h4>

          <p>
            August 2023 – Present | CGPA: 8.78 / 10
          </p>
        </div>
      </section>


      {/* Achievements */}
      <section className="section achievements-section">
        <p className="section-subtitle">MY ACHIEVEMENTS</p>
        <h2 className="section-title">Achievements</h2>

        <div className="experience-list">

          <div className="experience-card">
            <p>
              🏆 Qualified for the Internal Round of Smart India Hackathon
              (SIH) 2024 for developing an ML-based prediction system.
            </p>
          </div>

          <div className="experience-card">
            <p>
              🏆 Achieved Top 8% rank in AlgoUniversity Technology
              Fellowship (ATF 2025) among 250,000+ participants nationwide.
            </p>
          </div>

          <div className="experience-card">
            <p>
              🏆 Secured a Top 4 rank on the GeeksforGeeks leaderboard
              during an inter-college coding event.
            </p>
          </div>

        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="section contact-section">
        <p className="section-subtitle">LET'S CONNECT</p>
        <h2 className="section-title">Contact Me</h2>

        <p>
          I am open to Software Development opportunities,
          internships, and exciting projects.
        </p>

        <div className="contact-links">

          <a href="mailto:amishakumaripatna123@gmail.com">
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/amisha-kumari-3b80aa2b1/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/amisha8o"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>
      </section>


      {/* Footer */}
      <footer>
        <p>
          © 2026 Amisha Kumari. Built with React.
        </p>
      </footer>

    </div>
  )
}

export default App

