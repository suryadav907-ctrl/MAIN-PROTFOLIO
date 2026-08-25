import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "SURYASH YADAV",
    role: "B.TECH CSE — 2ND YEAR",
    degree: "B.Tech Computer Science & Engineering",
    year: "2nd Year",
    institution: "GLA University",
    location: "Mathura, UP, India",
    animatedStatements: [
      "I BUILD.",
      "I LEARN.",
      "I EXPERIMENT."
    ],
    tagline: "Focused on core programming fundamentals, algorithmic problem solving, and building practical systems that bridge theory into functional software.",
    email: "suryash.yadav@gla.ac.in", // Placeholder editable email
    github: "https://github.com/suryash-yadav", // Placeholder
    linkedin: "https://linkedin.com/in/suryash-yadav", // Placeholder
    locationDetails: "Mathura, Uttar Pradesh",
    availability: "Open for technical collaborations & open-source projects"
  },

  aboutStats: [
    {
      number: "01",
      title: "B.Tech CSE",
      subtitle: "Academic Stream",
      description: "Rigorous focus on core computer science foundations, computing systems, and algorithmic theory."
    },
    {
      number: "02",
      title: "2nd Year",
      subtitle: "Current Stage",
      description: "Deepening practical understanding through intensive project development and structured problem solving."
    },
    {
      number: "03",
      title: "GLA University",
      subtitle: "Institution",
      description: "Acquiring strong academic foundations and engineering methodologies in Mathura."
    },
    {
      number: "04",
      title: "Mathura",
      subtitle: "Location",
      description: "Based in the historic city of Mathura, Uttar Pradesh, connected with developer communities."
    }
  ],

  skills: [
    {
      id: "programming",
      title: "PROGRAMMING",
      skills: [
        { name: "C++", level: "Core Language", description: "Primary choice for DSA, low-level efficiency, and memory management understanding.", featured: true },
        { name: "Python", level: "Scripting & Dev", description: "Used for automation, rapid prototyping, data manipulation, and ML experiments.", featured: true },
        { name: "Java", level: "OOP System", description: "Strong grasp of object-oriented architecture, multi-threading, and class hierarchies.", featured: true },
        { name: "JavaScript", level: "Web & Runtime", description: "Asynchronous programming, ES6+ standards, and event-driven architecture.", featured: true }
      ]
    },
    {
      id: "computer-science",
      title: "COMPUTER SCIENCE",
      skills: [
        { name: "Data Structures & Algorithms", level: "Foundation", description: "Arrays, Trees, Graphs, Dynamic Programming, Complexity Analysis, Time/Space tradeoffs.", featured: true },
        { name: "Object-Oriented Programming", level: "Design Pattern", description: "Encapsulation, Polymorphism, Inheritance, Abstraction, SOLID principles.", featured: true },
        { name: "DBMS", level: "Data Architecture", description: "Relational database concepts, normalization, transaction management, indexing.", featured: true },
        { name: "SQL", level: "Query Engine", description: "Complex joins, aggregations, schema design, and query optimization.", featured: true },
        { name: "Operating Systems", level: "System Level", description: "Process scheduling, memory paging, file systems, synchronization, concurrency.", featured: false },
        { name: "Computer Networks", level: "Protocols", description: "OSI Model, TCP/IP stack, HTTP/HTTPS, sockets, routing principles.", featured: false }
      ]
    },
    {
      id: "development",
      title: "DEVELOPMENT",
      skills: [
        { name: "HTML5", level: "Markup", description: "Semantic document structure, accessibility standards, SEO tags.", featured: false },
        { name: "CSS3 / Tailwind", level: "Styling", description: "Modern responsive layouts, Flexbox/Grid, custom design systems, dark interfaces.", featured: true },
        { name: "JavaScript (ES6+)", level: "Logic", description: "DOM manipulation, functional patterns, async/await pipeline.", featured: true },
        { name: "React", level: "Frontend Framework", description: "Component state management, hooks architecture, dynamic SPA user interfaces.", featured: true }
      ]
    },
    {
      id: "tools",
      title: "TOOLS & ENVIRONMENT",
      skills: [
        { name: "Git", level: "Version Control", description: "Branching strategies, commit hygiene, merge resolution, rebase.", featured: true },
        { name: "GitHub", level: "Collaboration", description: "Pull requests, code reviews, project workflow, GitHub Pages/Actions.", featured: true },
        { name: "VS Code", level: "Primary IDE", description: "Custom extensions, task runners, integrated debugging environment.", featured: true }
      ]
    }
  ],

  currentlyExploring: [
    "Next.js App Router Architecture & SSR",
    "Advanced Graph Algorithms & Dynamic Programming Patterns",
    "System Design Fundamentals & Scalable Micro-architectures",
    "Machine Learning Pipeline Foundations with Python"
  ],

  projects: [
    {
      id: "algogrid-visualizer",
      number: "01",
      title: "AlgoGrid Engine",
      subtitle: "Interactive Algorithm & Graph Visualizer",
      description: "An interactive web workbench for visualizing Dijkstra, A* Search, and Sorting algorithms in real-time with customizable node weights and speed control.",
      longDescription: "Built to deepen structural understanding of Graph Theory and Data Structures. AlgoGrid visualizes dynamic pathfinding across custom grid obstacles, execution step counts, memory allocations, and state transitions with frame-by-frame controls.",
      technologies: ["C++ Logic", "JavaScript", "React", "HTML5 Canvas", "Tailwind CSS"],
      githubUrl: "https://github.com/suryash-yadav/algogrid-visualizer",
      liveUrl: "https://suryash-algogrid.vercel.app",
      highlights: [
        "Real-time visual rendering of BFS, DFS, Dijkstra, and A* search pathfinding.",
        "Interactive obstacle drawing, node weight assignment, and animated traversal step log.",
        "Modular architecture allowing easy addition of new graph algorithms."
      ],
      codeSnippet: `// A* Search Heuristic Computation
function calculateHeuristic(nodeA, nodeB) {
  const dx = Math.abs(nodeA.x - nodeB.x);
  const dy = Math.abs(nodeA.y - nodeB.y);
  return dx + dy; // Manhattan Distance
}`,
      category: "Algorithmic Tool",
      featured: true
    },
    {
      id: "mini-dbms-engine",
      number: "02",
      title: "LiteDB Query Engine",
      subtitle: "C++ In-Memory Relational Database Parser",
      description: "A lightweight in-memory SQL-like database engine implemented in C++ supporting table creation, index lookup, B-Tree storage structures, and WHERE clause filtering.",
      longDescription: "Developed as a system engineering project to explore database internals, page storage layouts, index structures, and lexical query parsing. LiteDB parses simple SQL strings into abstract syntax trees for fast memory table execution.",
      technologies: ["C++17", "Data Structures", "B-Trees", "File I/O", "CMake"],
      githubUrl: "https://github.com/suryash-yadav/litedb-cpp-engine",
      liveUrl: undefined,
      highlights: [
        "Custom tokenizer and recursive descent SQL parser for SELECT, INSERT, and CREATE TABLE queries.",
        "B-Tree index implementation reducing search lookup complexity from O(N) to O(log N).",
        "Binary storage persistence format for loading/saving tables to disk."
      ],
      codeSnippet: `// B-Tree Node Insertion logic
template <typename K, typename V>
void BTreeNode<K, V>::insertNonFull(const K& key, const V& value) {
  int i = keys.size() - 1;
  if (isLeaf) {
    keys.push_back(key);
    while (i >= 0 && keys[i] > key) {
      keys[i + 1] = keys[i];
      i--;
    }
    keys[i + 1] = key;
  }
}`,
      category: "Systems & C++",
      featured: true
    },
    {
      id: "devcampus-portal",
      number: "03",
      title: "DevCampus Portal",
      subtitle: "Academic Resource & CSE Project Hub",
      description: "A collaborative web application for CSE students to archive subject notes, share open-source project repositories, and organize study group schedules.",
      longDescription: "Designed to solve resource fragmentation among university peers. DevCampus provides a clean editorial dashboard with full-text search, subject tagging, topic discussions, and interactive code snippet previews.",
      technologies: ["React", "Python", "SQL / SQLite", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/suryash-yadav/devcampus-portal",
      liveUrl: "https://devcampus-gla.vercel.app",
      highlights: [
        "Categorized academic repository indexed by semester, subject, and project tech stack.",
        "Instant client-side search with debounced filtering and tag taxonomy.",
        "Responsive dark-mode UI optimized for mobile study and fast reference."
      ],
      codeSnippet: `// Fast debounced search query hook
export function useDebouncedSearch(query: string, delay = 300) {
  const [debounced, setDebounced] = useState(query);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(query), delay);
    return () => clearTimeout(handler);
  }, [query, delay]);
  return debounced;
}`,
      category: "Full Stack Web",
      featured: true
    },
    {
      id: "cli-file-sync",
      number: "04",
      title: "SyncPulse CLI",
      subtitle: "Python Distributed File Hash Synchronizer",
      description: "A high-performance command line utility in Python that monitors local folder changes, computes SHA-256 integrity hashes, and synchronizes remote backups efficiently.",
      longDescription: "Created to gain hands-on experience with OS file system watchdogs, hashing algorithms, threading, and socket communication. SyncPulse minimizes network bandwidth by only transmitting delta changes.",
      technologies: ["Python 3", "SHA-256", "Asyncio", "Socket API", "CLI Framework"],
      githubUrl: "https://github.com/suryash-yadav/syncpulse-cli",
      liveUrl: undefined,
      highlights: [
        "Multithreaded file hash calculation using chunked reading for low memory footprint.",
        "Delta synchronization mechanism detecting file additions, modifications, and deletions.",
        "Interactive CLI status display built with Python Rich terminal formatting."
      ],
      codeSnippet: `import hashlib

def compute_file_hash(filepath, chunk_size=65536):
    hasher = hashlib.sha256()
    with open(filepath, 'rb') as f:
        for chunk in iter(lambda: f.read(chunk_size), b''):
            hasher.update(chunk)
    return hasher.hexdigest()`,
      category: "Python Tooling",
      featured: true
    }
  ],

  journey: [
    {
      year: "2024–2025",
      period: "FOUNDATION PHASE",
      title: "Enrolled in B.Tech CSE at GLA University, Mathura",
      description: "Began academic journey in Computer Science. Built solid programming basics in C++ and Python, focusing on procedural logic, object-oriented concepts, and discrete mathematics.",
      status: "completed",
      tags: ["C++", "Programming Basics", "Mathematics", "GLA University"]
    },
    {
      year: "2025–2026",
      period: "CORE CSE & SYSTEM STRUCTURES",
      title: "DSA, System Fundamentals & Web Development",
      description: "Dived deep into Data Structures (Trees, Graphs, DP), DBMS, and Object-Oriented Software Design. Started crafting interactive web applications using JavaScript and React.",
      status: "current",
      tags: ["Data Structures & Algorithms", "DBMS", "React", "System Engineering"]
    },
    {
      year: "2026",
      period: "PRACTICAL EXPANSION",
      title: "Advanced Projects & Algorithmic Optimization",
      description: "Focusing on building production-grade projects, participating in open-source contributions, expanding competitive programming skills, and diving into core operating system concepts.",
      status: "upcoming",
      tags: ["Algorithms", "Operating Systems", "Open Source", "Full Stack"]
    },
    {
      year: "FUTURE & BEYOND",
      period: "CONTINUOUS EVOLUTION",
      title: "Exploring Software Engineering, AI & Scalable Systems",
      description: "Aiming to master software engineering practices, cloud-native deployments, distributed computing, and artificial intelligence integration.",
      status: "upcoming",
      tags: ["Software Architecture", "AI/ML", "System Design", "Cloud"]
    }
  ]
};
