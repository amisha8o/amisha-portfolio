import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          Amisha<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero-section">

        <div className="hero-content">

          <p className="hello">Hello, I'm</p>

          <h1>Amisha Kumari</h1>

          <h2>
            Computer Science Engineer &{' '}
            <span>Software Developer</span>
          </h2>

          <p className="hero-description">
            I am a B.Tech Computer Science & Engineering student passionate
            about building practical software solutions using Java, Data
            Structures & Algorithms, Full-Stack Development, and Artificial
            Intelligence.
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


        {/* Profile Card */}
        <div className="hero-card">

          <div className="profile-circle">

            <img
              src="/Photo.png"
              alt="Amisha Kumari"
              className="profile-image"
            />

          </div>

          <h3>Software Developer</h3>

          <p>Java • DSA • MERN • AI/ML</p>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section">

        <p className="section-subtitle">
          GET TO KNOW ME
        </p>

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-content">

          <div className="about-text">

            <p>
              I am a Computer Science & Engineering student pursuing my
              B.Tech with an <strong>8.78 CGPA</strong>, focused on Software
              Development, problem solving, and modern web technologies.
            </p>

            <p>
              I have hands-on experience with Java, JavaScript, Python,
              MERN Stack, REST APIs, MongoDB, and AI/ML. I enjoy building
              end-to-end applications and solving real-world problems
              through technology.
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


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">

        <p className="section-subtitle">
          MY TECHNICAL EXPERTISE
        </p>

        <h2 className="section-title">
          Skills
        </h2>


        <div className="skills-grid">

          <div className="skill-card">

            <h3>Programming & DSA</h3>

            <p>Java</p>
            <p>Python</p>
            <p>JavaScript</p>
            <p>C Programming</p>
            <p>Data Structures & Algorithms</p>

          </div>


          <div className="skill-card">

            <h3>Frontend Development</h3>

            <p>HTML5</p>
            <p>CSS3</p>
            <p>React.js</p>
            <p>Vite</p>
            <p>Responsive UI</p>

          </div>


          <div className="skill-card">

            <h3>Backend & Database</h3>

            <p>Node.js</p>
            <p>Express.js</p>
            <p>REST APIs</p>
            <p>MongoDB</p>
            <p>MySQL</p>

          </div>


          <div className="skill-card">

            <h3>AI & Machine Learning</h3>

            <p>Machine Learning</p>
            <p>Pandas</p>
            <p>NumPy</p>
            <p>Scikit-learn</p>
            <p>AI Applications</p>

          </div>


          <div className="skill-card">

            <h3>Tools & Technologies</h3>

            <p>Git</p>
            <p>GitHub</p>
            <p>Postman</p>
            <p>JWT Authentication</p>
            <p>REST API Development</p>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="section">

        <p className="section-subtitle">
          MY PROFESSIONAL JOURNEY
        </p>

        <h2 className="section-title">
          Experience
        </h2>


        <div className="experience-list">


          <div className="experience-card">

            <h3>
              AI Automation & Intelligence Solutions Intern
            </h3>

            <h4>
              IBM SkillsBuild (AICTE) | July 2026 – Present
            </h4>

            <p>
              Working on AI and automation-oriented solutions using Python
              and Machine Learning, with hands-on exposure to data
              preprocessing, machine learning algorithms, model evaluation,
              Git, and GitHub.
            </p>

          </div>


          <div className="experience-card">

            <h3>
              Full Stack Development Intern
            </h3>

            <h4>
              CodeAlpha | May 2026 – June 2026
            </h4>

            <p>
              Developed full-stack web applications using the MERN stack,
              working with responsive interfaces, backend APIs,
              authentication, database integration, debugging, testing,
              and deployment.
            </p>

          </div>


          <div className="experience-card">

            <h3>
              Software Development Intern
            </h3>

            <h4>
              Sysslan IT Solutions | April 2026 – May 2026
            </h4>

            <p>
              Contributed to MERN-based web application modules, including
              frontend development, backend API integration, debugging,
              testing, feature implementation, and Git workflows.
            </p>

          </div>


          <div className="experience-card">

            <h3>
              Software Development Trainee
            </h3>

            <h4>
              Web2Ease Private Limited | June 2025 – July 2025
            </h4>

            <p>
              Worked on frontend and backend modules using HTML, CSS,
              JavaScript, and Node.js, gaining practical experience in
              API integration, debugging, and full-stack development.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">

        <p className="section-subtitle">
          WHAT I HAVE BUILT
        </p>

        <h2 className="section-title">
          Featured Projects
        </h2>


        <div className="projects-grid">


          {/* SmartHire */}
          <div className="project-card">

            <h3>
              SmartHire – AI Recruitment Platform
            </h3>

            <p>
              AI-powered recruitment and placement platform featuring
              resume analysis, ATS scoring, mock interviews, job
              recommendations, application tracking, recruiter dashboards,
              and placement management.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
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


          {/* ExpenseMind AI */}
          <div className="project-card">

            <div className="project-heading">

              <h3>
                ExpenseMind AI – Finance Management System
              </h3>

              <span className="status-badge">
                In Progress
              </span>

            </div>

            <p>
              AI-powered personal finance management system for tracking
              income and expenses, financial analytics, savings forecasting,
              anomaly detection, and personalized financial insights.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>AI/ML</span>
            </div>

            <p className="project-status">
              🚧 Currently Building
            </p>

          </div>


          {/* Task Management */}
          <div className="project-card">

            <h3>
              Task Management System
            </h3>

            <p>
              Full-stack task management application featuring secure
              authentication, JWT-based authorization, task management,
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

            <h3>
              AI-Based Farmer Predictive System
            </h3>

            <p>
              Machine Learning-based crop recommendation system that
              analyzes temperature, rainfall, and soil-related inputs
              to recommend suitable crops.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Pandas</span>
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

            <h3>
              E-Commerce Store
            </h3>

            <p>
              Full-stack e-commerce application featuring authentication,
              product management, shopping cart functionality, CRUD
              operations, REST APIs, and database integration.
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


          {/* Drone Dashboard */}
          <div className="project-card">

            <h3>
              AI-Powered Drone Monitoring Dashboard
            </h3>

            <p>
              Interactive drone monitoring dashboard featuring mission
              control, GPS tracking, radar visualization, security alerts,
              AI-based threat detection, and drone analytics.
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

        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section className="section education-section">

        <p className="section-subtitle">
          MY ACADEMIC BACKGROUND
        </p>

        <h2 className="section-title">
          Education
        </h2>


        <div className="education-card">

          <h3>
            Bachelor of Technology – Computer Science & Engineering
          </h3>

          <h4>
            Government Mahila Engineering College, Ajmer, Rajasthan
          </h4>

          <p>
            August 2023 – Present
          </p>

          <strong>
            CGPA: 8.78 / 10
          </strong>

        </div>

      </section>


      {/* ================= ACHIEVEMENTS ================= */}
      <section className="section achievements-section">

        <p className="section-subtitle">
          ACHIEVEMENTS & RECOGNITION
        </p>

        <h2 className="section-title">
          Achievements
        </h2>


        <div className="experience-list">


          <div className="experience-card">

            <h3>
              🏆 Smart India Hackathon – Internal Round
            </h3>

            <p>
              Qualified for the Internal Round of Smart India Hackathon
              (SIH) 2024 with an ML-based prediction system.
            </p>

          </div>


          <div className="experience-card">

            <h3>
              🏆 AlgoUniversity Technology Fellowship
            </h3>

            <p>
              Achieved a Top 8% rank in the AlgoUniversity Technology
              Fellowship (ATF 2025).
            </p>

          </div>


          <div className="experience-card">

            <h3>
              🏆 Coding Competition Recognition
            </h3>

            <p>
              Secured a Top 4 position on the GeeksforGeeks leaderboard
              during an inter-college coding event.
            </p>

          </div>


          <div className="experience-card">

            <h3>
              🏅 ECSoC 2026 Contributor
            </h3>

            <p>
              Selected as a contributor for ECSoC 2026, participating in
              an open-source and community-driven technical ecosystem.
            </p>

          </div>


          <div className="experience-card">

            <h3>
              🏅 IBM SkillsBuild
            </h3>

            <p>
              Completed IBM SkillsBuild learning and project-based
              activities focused on AI, automation, and machine learning.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">

        <p className="section-subtitle">
          LET'S CONNECT
        </p>

        <h2 className="section-title">
          Contact Me
        </h2>

        <p>
          I am open to Software Development opportunities, internships,
          and collaborative projects where I can learn, contribute,
          and build meaningful products.
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


      {/* ================= FOOTER ================= */}
      <footer>

        <p>
          © 2026 Amisha Kumari · Built with React
        </p>

      </footer>

    </div>
  )
}

export default App

