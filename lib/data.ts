// ============================================
// PORTFOLIO DATA
// All content centralized for easy maintenance
// ============================================

export const personalInfo = {
  name: "Souptik",
  roles: [
    "Full Stack Developer",
    "Minecraft Developer",
    "Plugin Developer",
    "Mod Developer",
    "Backend Engineer",
    "Server Infrastructure Expert",
  ],
  bio: "I craft beautiful, performant, and scalable digital experiences — from modern web apps to custom Minecraft plugins and server infrastructure. With years of hands-on experience, I turn complex ideas into polished, production-ready solutions.",
  email: "souptikdey1244@gmail.com",
  location: "Kolkata, India",
};

export const socialLinks = [
  { name: "GitHub", url: "#", icon: "github" },
  { name: "Discord", url: "#", icon: "discord" },
  { name: "LinkedIn", url: "#", icon: "linkedin" },
  { name: "Email", url: "mailto:souptikdey1244@gmail.com", icon: "mail" },
  { name: "Twitter / X", url: "#", icon: "twitter" },
];

export const statistics = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 100, suffix: "+", label: "Plugins" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "K+", label: "Downloads" },
];

export const skillCategories = [
  {
    title: "Website Development",
    icon: "Globe",
    color: "from-blue-500 to-cyan-400",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    color: "from-violet-500 to-purple-400",
    skills: [
      "REST APIs",
      "Authentication",
      "Databases",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "Minecraft Development",
    icon: "Gamepad2",
    color: "from-emerald-500 to-green-400",
    skills: [
      "Spigot",
      "Paper",
      "Bukkit",
      "Velocity",
      "BungeeCord",
      "Folia",
      "Fabric",
      "Forge",
    ],
  },
  {
    title: "Plugin Development",
    icon: "Puzzle",
    color: "from-orange-500 to-amber-400",
    skills: [
      "Java",
      "Kotlin",
      "Maven",
      "Gradle",
      "Adventure API",
      "PlaceholderAPI",
      "LuckPerms API",
    ],
  },
  {
    title: "Mod Development",
    icon: "Blocks",
    color: "from-rose-500 to-pink-400",
    skills: ["Fabric API", "Forge API", "NeoForge", "Mixins"],
  },
  {
    title: "Server Management",
    icon: "Terminal",
    color: "from-cyan-500 to-teal-400",
    skills: [
      "Linux",
      "Ubuntu",
      "Debian",
      "Docker",
      "Pterodactyl",
      "Git",
      "GitHub",
      "Nginx",
      "Cloudflare",
    ],
  },
  {
    title: "Languages",
    icon: "Code2",
    color: "from-indigo-500 to-blue-400",
    skills: ["Java", "JavaScript", "TypeScript", "Kotlin", "Python", "SQL"],
  },
];

export const projects = [
  {
    title: "Custom Minecraft Network",
    description:
      "A fully custom Minecraft network featuring custom game modes, anti-cheat, economy, and a player base of thousands. Built with Paper and Velocity for maximum performance.",
    tech: ["Java", "Paper", "Velocity", "Redis", "MySQL"],
    gradient: "from-violet-600 to-indigo-600",
    github: "#",
    live: "#",
  },
  {
    title: "Anti-Cheat Plugin",
    description:
      "Advanced anti-cheat system using packet analysis, machine learning heuristics, and real-time player behavior tracking to detect and prevent cheating.",
    tech: ["Java", "Spigot API", "ProtocolLib", "NMS"],
    gradient: "from-red-600 to-rose-600",
    github: "#",
    live: "#",
  },
  {
    title: "RPG Plugin",
    description:
      "Complete RPG system with classes, skills, quests, dungeons, custom items, and an interactive GUI system. Features a dynamic economy and progression system.",
    tech: ["Java", "Kotlin", "Paper", "Adventure API", "MongoDB"],
    gradient: "from-emerald-600 to-teal-600",
    github: "#",
    live: "#",
  },
  {
    title: "Fabric Mod",
    description:
      "Client and server-side Fabric mod adding new dimensions, mobs, biomes, and gameplay mechanics. Uses Mixins for seamless Minecraft integration.",
    tech: ["Java", "Fabric API", "Mixins", "OpenGL"],
    gradient: "from-amber-600 to-orange-600",
    github: "#",
    live: "#",
  },
  {
    title: "Web Dashboard",
    description:
      "Real-time server monitoring dashboard with player analytics, performance metrics, plugin management, and automated alerting. Full-stack Next.js application.",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "WebSocket"],
    gradient: "from-blue-600 to-cyan-600",
    github: "#",
    live: "#",
  },
  {
    title: "Discord Integration",
    description:
      "Bi-directional Discord-Minecraft bridge with slash commands, embeds, role sync, ticket system, and real-time server status updates.",
    tech: ["Java", "JDA", "Node.js", "Discord.js", "Redis"],
    gradient: "from-purple-600 to-fuchsia-600",
    github: "#",
    live: "#",
  },
  {
    title: "Server Control Panel",
    description:
      "Custom web-based control panel for managing multiple game servers, with deployment automation, resource monitoring, and user management.",
    tech: ["React", "Node.js", "Docker", "Pterodactyl API", "Nginx"],
    gradient: "from-cyan-600 to-blue-600",
    github: "#",
    live: "#",
  },
];

export const experience = [
  {
    role: "Head Full Stack Developer",
    company: "SmartNodes",
    period: "Jan 2023 – Present",
    current: true,
    bullets: [
      "Led development of real-time analytics dashboard serving 100K+ daily users",
      "Architected microservices reducing deployment time by 40%",
      "Mentored team of 5 junior developers",
    ],
    tech: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "DarkHosting",
    period: "Jun 2021 – Dec 2022",
    current: false,
    bullets: [
      "Built e-commerce platform processing $2M+ in transactions",
      "Optimized database queries for 50% faster page loads",
      "Integrated Stripe and PayPal payment gateways",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
  },
  {
    role: "Frontend Developer",
    company: "JaccuziMC",
    period: "Aug 2020 – May 2021",
    current: false,
    bullets: [
      "Developed responsive websites for 15+ clients",
      "Reduced page load times by 40% through optimization",
      "Built custom CMS solutions with headless architecture",
    ],
    tech: ["React", "Vue.js", "SCSS", "Firebase"],
  },
];

export const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies. From landing pages to full-stack web applications.",
    icon: "Globe",
  },
  {
    title: "Minecraft Plugin Development",
    description:
      "Custom Spigot, Paper, and Velocity plugins tailored to your server's unique needs. Optimized for performance.",
    icon: "Gamepad2",
  },
  {
    title: "Minecraft Mod Development",
    description:
      "Fabric and Forge mods with new dimensions, mobs, items, and gameplay mechanics. Client and server-side.",
    icon: "Blocks",
  },
  {
    title: "Backend Development",
    description:
      "Robust REST APIs, authentication systems, and microservice architectures. Scalable and maintainable.",
    icon: "Server",
  },
  {
    title: "Server Optimization",
    description:
      "Performance tuning, TPS optimization, and lag reduction for Minecraft servers. Get the most out of your hardware.",
    icon: "Zap",
  },
  {
    title: "Database Design",
    description:
      "Efficient database schemas, query optimization, and data migration strategies for MySQL, PostgreSQL, and MongoDB.",
    icon: "Database",
  },
  {
    title: "Linux Hosting",
    description:
      "Server setup, management, and automation on Linux. Pterodactyl panel deployment, Nginx configuration, and security hardening.",
    icon: "Terminal",
  },
  {
    title: "Performance Optimization",
    description:
      "Code profiling, bundle optimization, caching strategies, and CDN configuration to maximize speed.",
    icon: "Gauge",
  },
];

export const testimonials = [
  {
    name: "Alex Rivera",
    role: "Server Owner, NexusMC",
    text: "Souptik built an incredible custom plugin suite for our Minecraft network. Player engagement went up 300% after launch. His code is clean, well-documented, and extremely performant.",
    rating: 5,
  },
  {
    name: "Jordan Chen",
    role: "CTO, CloudScale",
    text: "Outstanding full-stack developer. Souptik delivered our analytics dashboard ahead of schedule with exceptional quality. His understanding of both frontend and backend is rare.",
    rating: 5,
  },
  {
    name: "Maya Thompson",
    role: "Founder, PixelCraft Studios",
    text: "Souptik's Fabric mod exceeded all expectations. The custom dimension he created feels like a natural extension of Minecraft. Highly recommend for any mod project.",
    rating: 5,
  },
  {
    name: "Sam Williams",
    role: "Lead Dev, GameForge",
    text: "We hired Souptik for server optimization and he reduced our TPS lag by 80%. He also built a custom anti-cheat that caught exploits we didn't even know existed.",
    rating: 5,
  },
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];
