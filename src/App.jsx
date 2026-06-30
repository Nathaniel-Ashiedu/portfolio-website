function App() {
  const projects = [
    {
      title: "LAN Chat Application",
      description: "A real-time chat app built with Python sockets and tkinter, allowing multiple users to message each other over a local network.",
      tech: "Python, Sockets, Threading, Tkinter",
    },
    {
      title: "2D Platformer Game",
      description: "A side-scrolling platformer with gravity, jumping, collision detection, and a timer, built using Pygame.",
      tech: "Python, Pygame",
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
        <p>A 2nd year IT student building real-world software projects.</p>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech">{project.tech}</span>
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