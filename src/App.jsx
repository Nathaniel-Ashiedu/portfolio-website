import './App.css';

function App() {
  const projects = [
    {
      title: "LAN Chat Application",
      description: "A real-time chat app built with Python sockets and tkinter, allowing multiple users to message each other over a local network.",
      tech: "Python · Sockets · Threading · Tkinter",
      githubLink: "https://github.com/Nathaniel-Ashiedu/lan-chat-app",
    },
    {
      title: "2D Platformer Game",
      description: "A side-scrolling platformer with gravity, jumping, collision detection, and a timer built from scratch using Pygame.",
      tech: "Python · Pygame",
      githubLink: "https://github.com/Nathaniel-Ashiedu/platformer-game",
    },
    {
      title: "To-Do REST API",
      description: "A backend API for managing to-do items with full CRUD functionality and interactive auto-generated documentation.",
      tech: "Python · FastAPI · SQLAlchemy · SQLite",
      githubLink: "https://github.com/Nathaniel-Ashiedu/todo-api",
      liveLink: "https://todo-api-zegq.onrender.com/docs",
    },
    {
      title: "Habit Tracker Mobile App",
      description: "A React Native mobile app for tracking daily habits with streak counting, persistent storage, and a clean minimal UI.",
      tech: "React Native · Expo · AsyncStorage",
      githubLink: "https://github.com/Nathaniel-Ashiedu/habit-tracker",
    },
  ];

  const skills = [
    {
      category: "Networking & Security",
      items: "Network setup · IP configuration · Firewalls · Access control · Wireshark · Nmap · Kismet · IP surveillance · Router & switch configuration",
    },
    {
      category: "Cloud & Systems",
      items: "AWS (EC2, IAM, VPC) · Linux system administration · VMware · Proxmox · pfSense",
    },
    {
      category: "Software Development",
      items: "Python · FastAPI · React · React Native · HTML · CSS · JavaScript · SQL",
    },
    {
      category: "Infrastructure",
      items: "Fiber optic splicing · CCTV & IP cameras · Structured cabling · Starlink deployment · Intercom systems · Electric fencing",
    },
  ];

  const blogPosts = [
    {
      title: "Building My First LAN Chat App",
      date: "June 2026",
      summary: "What I learned building a real-time chat app using Python sockets, including a debugging story about threading and misidentified terminal windows.",
    },
    {
      title: "Gravity, Jumping, and Game Loops in Pygame",
      date: "June 2026",
      summary: "How I built a 2D platformer from scratch and learned the basics of game physics, collision detection, and frame-rate control.",
    },
    {
      title: "From Field Technician to Software Developer",
      date: "June 2026",
      summary: "Reflecting on 5 years of deploying infrastructure in the field, and how hands-on networking experience shapes the way I think about software.",
    },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Nathaniel Ashiedu</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <h1>Hi, I'm Nathaniel Ashiedu</h1>
        <p>A 2nd year IT student building real-world software projects.</p>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>
        <p className="section-sub">Software built while studying — each one a new skill.</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech">{project.tech}</span>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills" id="skills">
        <h2>Skills</h2>
        <p className="section-sub">Field experience meets modern software development.</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.category}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="blog" id="blog">
        <h2>Blog</h2>
        <p className="section-sub">Writing about what I'm learning and building.</p>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <h3>{post.title}</h3>
              <span className="date">{post.date}</span>
              <p>{post.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p className="section-sub">Have a question or want to connect? Send me a message.</p>
        <div className="contact-details">
          <p>📧 nathanielashiedu9120@gmail.com</p>
          <p>📞 +233 55 707 4092</p>
          <p>📍 Accra, Ghana</p>
        </div>
        <form action="https://formspree.io/f/mvzjbgyd" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>Designed & built by Nathaniel Ashiedu · Accra, Ghana</p>
      </footer>
    </div>
  );
}

export default App;
