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
    {
      title: "Network Intrusion Detection System",
      description: "A Python-based NIDS that captures live network packets and detects port scans, SYN floods, ICMP floods, and ARP spoofing in real time, with a live Flask web dashboard.",
      tech: "Python · Scapy · Flask · SQLite · Chart.js",
      githubLink: "https://github.com/Nathaniel-Ashiedu/nids",
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
    date: "June 2025",
    summary: "What I learned building a real-time chat app using Python sockets — how threading lets a server handle multiple clients simultaneously, and a debugging story about staring at the wrong terminal for ten minutes.",
    body: "I built this project to understand how real-time communication works at the network level. Using Python's socket library, I created a server that listens for incoming TCP connections and broadcasts messages to all connected clients simultaneously — the same core mechanism behind apps like WhatsApp and Slack, just without the polish.\n\nThe trickiest part was threading. Without it, the server could only talk to one client at a time. Adding threads meant each client got its own dedicated process running in parallel, which is how the server handles multiple people chatting at once.\n\nThe most memorable debugging moment: I spent ten minutes convinced messages weren't broadcasting, only to realize I was watching the wrong terminal. The messages were showing up perfectly on the other client the whole time."
  },
  {
    title: "Gravity, Jumping, and Game Loops in Pygame",
    date: "January 2026",
    summary: "How I built a 2D platformer from scratch and learned that gravity is just adding a small number to velocity every frame.",
    body: "Before this project, game physics felt like magic. After building it, I realized gravity is surprisingly simple: every frame, you add a small constant to the player's downward velocity. The player accelerates naturally, just like real physics, because velocity compounds over time.\n\nThe game loop was the other key concept. Unlike a regular program that runs once and exits, a game loop runs 60 times per second — checking for input, updating positions, detecting collisions, and redrawing the screen every single frame. Getting that loop right made everything else fall into place.\n\nThe hardest bug I hit was a completely black screen with no error message. The cause turned out to be a missing display.flip() call — without it, nothing ever actually renders to the screen. Completely silent failure, completely obvious in hindsight."
  },
  {
    title: "From Field Technician to Software Developer",
    date: "February 2026",
    summary: "Five years of pulling cable and configuring switches taught me how networks actually behave. Here's how that shapes the way I think about software.",
    body: "Most developers learn networking from textbooks. I learned it by pulling fiber optic cable through buildings, configuring switches on-site, and diagnosing why a CCTV system stopped working at 2am. That kind of experience gives you a different mental model — one built on what actually breaks in the real world, not just what the RFC says should happen.\n\nWhen I started building software, I noticed I thought about failure differently. I always ask: what happens when the network drops? What if two packets arrive out of order? What if the server restarts mid-request? Field work trains you to think in failure modes.\n\nMy goal is to move into cybersecurity and cloud security engineering — a direction that feels natural given my background. The infrastructure knowledge is already there. The software skills are what I'm building now."
  },
  {
    title: "Building a REST API with FastAPI and SQLite",
    date: "April 2026",
    summary: "How I built a full CRUD backend with auto-generated interactive documentation, and what I learned about Python version compatibility.",
    body: "FastAPI was a revelation after building things with plain Python. You define your endpoints with simple decorators, describe your data with Pydantic models, and FastAPI automatically generates an interactive documentation page where anyone can test your API directly in the browser — no Postman required.\n\nThe CRUD pattern (Create, Read, Update, Delete) clicked for me during this project. Once I understood that almost every database-backed application is just these four operations in different combinations, I started seeing the same structure everywhere — in the chat app's message history, in the habit tracker's storage, in every web app I'd ever used.\n\nThe unexpected lesson came before I even started: pip tried to compile pygame from source on Python 3.14 and failed with a cryptic error. I learned that being on the bleeding edge of a language version means some libraries haven't caught up yet — and that virtual environments with specific Python versions are essential, not optional."
  },
  {
    title: "Building a Habit Tracker in React Native",
    date: "May 2026",
    summary: "My first mobile app — what surprised me most was how similar React Native feels to React, and how different debugging is on a physical device.",
    body: "Coming from React, React Native felt immediately familiar — same component model, same hooks, same state management patterns. The main mental shift is the rendering layer: instead of HTML divs and paragraphs, you use View and Text components, and instead of CSS files, you write StyleSheet objects in JavaScript.\n\nThe streak logic was the most interesting problem to solve. A habit tracker isn't just a checklist — it needs to remember when you last completed something, compare that to yesterday's date, and decide whether your streak continues or resets. Getting the date comparison right across midnight boundaries required careful thinking about what 'yesterday' actually means in code.\n\nTesting on a real Android device via Expo Go was a different experience from browser-based debugging. Hot reload worked well, but some errors only appeared on the physical device and not in the simulator, which taught me to always test on real hardware before calling something done."
  },
  {
    title: "Building a Network Intrusion Detection System",
    date: "July 2026",
    summary: "How I built a live NIDS using Scapy that detects real attacks — and what happened when I turned it on for the first time.",
    body: "The idea behind a NIDS is straightforward: sit on the network, watch every packet that goes by, and raise an alarm when something looks suspicious. The implementation is where it gets interesting. Scapy gives you access to raw network packets in Python, which means you can inspect every layer — IP headers, TCP flags, ARP replies — and write detection logic in plain code.\n\nI implemented four detection types: port scans (one IP hitting many ports quickly), SYN floods (overwhelming a server with connection requests), ICMP floods (ping attacks), and ARP spoofing (a man-in-the-middle technique where an attacker poisons the ARP table to intercept traffic).\n\nThe moment I turned it on for the first time, it immediately logged 17 alerts — all port scans from external IPs probing my machine. I hadn't done anything to trigger them. That's just the internet: automated scanners constantly sweep IP ranges looking for open ports and vulnerable services. Seeing that in real time, on my own network, made the threat landscape feel very concrete."
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
        <p className="hero-label">IT Technician & Team Lead · KNUST</p>
        <h1>Nathaniel Ashiedu</h1>
        <p className="hero-sub">
          5+ years deploying networks, security systems, and cloud infrastructure —
          now building software to deepen that foundation.
        </p>
        <div className="hero-badges">
          <span>CFOT Certified</span>
          <span>CCNA</span>
          <span>AWS</span>
          <span>Accra, Ghana</span>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-inner">
          <h2>About</h2>
          <p>
            I'm an IT professional currently pursuing a Diploma in Information Technology
            at Kwame Nkrumah University of Science and Technology (KNUST). I have over
            5 years of hands-on experience in networking, enterprise security systems,
            and infrastructure deployment gained through practical trade training and
            professional field work.
          </p>
          <p>
            As Team Lead at Wilctech IT Solutions, I specialize in designing, installing,
            and maintaining CCTV systems, access control, fiber optic networks, and
            structured cabling for corporate and institutional clients. I've deployed
            Starlink in remote areas, mounted masts and radio antennas for wide-range
            connectivity, and set up ICT centres in communities with no prior internet
            access.
          </p>
          <p>
            My long-term goal is to build a career in cybersecurity and cloud security
            engineering — combining my infrastructure experience with modern software
            development.
          </p>
          <div className="about-meta">
            <div><span>Role</span>IT Technician & Team Lead, Wilctech IT Solutions</div>
            <div><span>Study</span>Diploma in IT, KNUST (2025)</div>
            <div><span>Location</span>Accra, Ghana</div>
          </div>
        </div>
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
              <p className="summary">{post.summary}</p>
              {post.body.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
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