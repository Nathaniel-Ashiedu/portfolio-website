import './App.css';
function App() {
const projects = [
  {
    title: "LAN Chat Application",
    description: "A real-time chat app built with Python sockets and tkinter, allowing multiple users to message each other over a local network.",
    tech: "Python, Sockets, Threading, Tkinter",
    githubLink: "https://github.com/Nathaniel-Ashiedu/lan-chat-app",
  },
  {
    title: "2D Platformer Game",
    description: "A side-scrolling platformer with gravity, jumping, collision detection, and a timer, built using Pygame.",
    tech: "Python, Pygame",
    githubLink: "https://github.com/Nathaniel-Ashiedu/platformer-game",
  },
  {
    title: "To-Do REST API",
    description: "A backend API for managing to-do items with full CRUD functionality, built with FastAPI and a SQLite database. Includes interactive auto-generated documentation.",
    tech: "Python, FastAPI, SQLAlchemy, SQLite",
    githubLink: "https://github.com/Nathaniel-Ashiedu/todo-api",
    liveLink: "https://todo-api-zegq.onrender.com/docs",
  },
];
  const blogPosts = [
    {
      title: "Building My First LAN Chat App",
      date: "June 2026",
      summary: "What I learned building a real-time chat app using Python sockets, including a debugging story about threading.",
    },
    {
      title: "Gravity, Jumping, and Game Loops",
      date: "June 2026",
      summary: "How I built a 2D platformer in Pygame and learned the basics of game physics along the way.",
    },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Nathaniel Ashiedu</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <h1>Hi, I'm Nathaniel Ashiedu</h1>
        <p>I am an IT professional currently pursuing further studies at Kwame Nkrumah University of Science and Technology (KNUST), with over 5 years of hands-on experience in networking, enterprise security systems, and infrastructure deployment — gained through practical trade training and professional field work.

Currently serving as Team Lead at Wilctech IT Solutions, I specialize in designing, installing, and maintaining CCTV systems, access control, fiber optic networks, and structured cabling for corporate and institutional clients.

I am actively developing expertise in cybersecurity and cloud technologies. My hands-on practice includes network analysis with Wireshark and Nmap, firewall configuration, virtual lab environments (VMware, Proxmox, pfSense), and cloud infrastructure on AWS.

My long-term goal is to build a career in cybersecurity and cloud security engineering.</p>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech">{project.tech}</span>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="blog" id="blog">
        <h2>Blog</h2>
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
        <p>Have a question or want to connect? Send me a message.</p>
        <form action="https://formspree.io/f/mvzjbgyd" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
