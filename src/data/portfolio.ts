import type {
    Profile,
    Experience,
    Project,
    SkillGroup,
    Education,
} from "@/types/portfolio";

export const profile: Profile = {
    name: "Justin Rosales",
    title: "CS Student & Developer",
    university: "University of Michigan — Ann Arbor",
    degree: "BSE Computer Science (College of Engineering)",
    // bio: "I'm a CS student at the University of Michigan building full-stack web apps, machine learning systems, and research software. I like working on things that solve real problems — whether that's a clinical screening tool for nurses or a reinforcement learning trading bot. Always learning, always shipping.",
    bio: "",
    email: "justin06.rosales@gmail.com",
    socials: [
        {
            label: "GitHub",
            url: "https://github.com/justinr25",
            icon: "github",
        },
        {
            label: "LinkedIn",
            url: "https://linkedin.com/in/justin-rosales",
            icon: "linkedin",
        },
    ],
};

export const experiences: Experience[] = [
    {
        id: "nurse-friend-dev",
        role: "Student Software Developer",
        organization: "University of Michigan School of Nursing",
        dateRange: "May 2026 – Present",
        location: "Ann Arbor, MI",
        bullets: [
            // "Engineered a dynamic 11-step clinical assessment and HADS diagnostic screening tool in React Native, delivering instant automated calculation of anxiety scores (0–21) and real-time clinical severity feedback.",
            // "Designed resilient client-side state management using Redux Toolkit slices, async dispatchers, and mock fallback objects, achieving zero runtime crashes in disconnected hospital environments.",
            // "Created an interactive clinical results dashboard featuring a visual mindfulness breathing guide with smooth 60 FPS animation loops using the React Native Animated API.",
        ],
    },
    {
        id: "umich-research-assistant",
        role: "Research Assistant",
        organization:
            "University of Michigan — Civil & Environmental Engineering",
        dateRange: "May 2026 – Present",
        location: "Ann Arbor, MI",
        bullets: [
            // "Architected the migration of monolithic research Jupyter Notebooks into modular, production-grade Python software pipelines for aerosol mass spectrometry analysis, eliminating 100% of codebase redundancy.",
            // "Engineered a responsive desktop GUI application using CustomTkinter and embedded interactive Matplotlib canvases, reducing researchers' analytical workflow time by over 80%.",
            // "Developed automated batch-processing data pipelines to sequentially analyze multi-file atmospheric chemistry datasets, scaling analytical throughput to generating 100+ publication-quality plots in seconds.",
        ],
    },
];

export const projects: Project[] = [
    {
        id: "releet",
        name: "ReLeet",
        description:
            "A universal web and mobile app for technical interview prep using pattern-based spaced repetition. Integrates Gemini AI to grade dictated problem-solving competency and SM-2 math scheduling to serve unseen LeetCode problems by algorithmic pattern.",
        techStack: ["React Native", "Expo", "TypeScript", "Supabase", "Gemini"],
        featured: true,
        links: {},
    },
    {
        id: "splitr",
        name: "Splitr",
        description:
            "A secure expense-splitting web app featuring 100% client-side real-time facial recognition via TensorFlow.js to dynamically track user presence and allocate utility costs, integrated with Auth0 authentication. Won 1st Place for 'Best Use of Auth0' at MHacks 2025.",
        techStack: [
            "Python",
            "Flask",
            "Auth0",
            "Tailwind CSS",
            "TensorFlow.js",
            "face-api.js",
        ],
        featured: true,
        links: {
            devpost: "https://devpost.com/software/splitr-vbt924",
            github: "https://github.com/justinr25/splitr",
        },
    },
    {
        id: "arithmetic-battle",
        name: "Arithmetic Battle",
        description:
            "A real-time competitive mental math duel game where players race head-to-head solving arithmetic problems within a 120-second time limit using deterministic seeded problem generation for fairness.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
        featured: true,
        links: {
            github: "https://github.com/justinr25/arithmetic-battle",
            live: "https://arithmetic-battle.vercel.app/",
        },
    },
    {
        id: "flappy-bird-ai",
        name: "Flappy Bird AI",
        description:
            "A neuroevolution simulation in Python evolving feedforward neural networks via the NEAT algorithm to play Flappy Bird autonomously, surpassing human-level consistency within 10 generations of 50 agents.",
        techStack: ["Python", "Pygame", "NEAT", "NumPy", "Matplotlib"],
        featured: true,
        links: {
            github: "https://github.com/justinr25/flappy-bird-ai",
        },
    },
    {
        id: "scratchpad",
        name: "Scratchpad",
        description:
            "A full-stack notes web application built on the MERN stack featuring client-side SPA routing, dynamic per-IP rate limiting via Upstash Redis, and a modern responsive UI styled with Tailwind CSS v4 and DaisyUI v5.",
        techStack: [
            "React",
            "Express",
            "MongoDB",
            "Redis",
            "Tailwind CSS",
            "DaisyUI",
        ],
        featured: false,
        links: {
            github: "https://github.com/justinr25/scratchpad",
            live: "https://scratchpad-ur89.onrender.com/",
        },
    },
    {
        id: "web-image-scraper",
        name: "Web Image Scraper",
        description:
            "A lightweight, full-stack web application that autonomously scrapes, extracts lazy-loaded image assets from user-provided URLs, and manages media downloads with SQLite and a Bootstrap interface.",
        techStack: ["Python", "Flask", "SQLite", "HTML", "Bootstrap"],
        featured: false,
        links: {
            github: "https://github.com/justinr25/web-image-scraper",
        },
    },
    {
        id: "sudoku-solver",
        name: "Sudoku Solver",
        description:
            "A responsive web-based puzzle solver and generator featuring a step-by-step backtracking visualizer that animates algorithmic decision-making and solution discovery in real time.",
        techStack: ["HTML", "CSS", "JavaScript"],
        featured: false,
        links: {
            github: "https://github.com/justinr25/sudoku-solver",
            live: "https://justinr25.github.io/sudoku-solver/",
        },
    },
    {
        id: "pokemon-battle-simulator",
        name: "Pokémon Battle Simulator",
        description:
            "A turn-based battle simulator that fetches live combat stats and move pools from the PokéAPI with animated combat transitions and dynamic health bars via GSAP.",
        techStack: ["HTML", "CSS", "JavaScript"],
        featured: false,
        links: {
            github: "https://github.com/justinr25/pokemon-battle-simulator",
            live: "https://justinr25.github.io/pokemon-battle-simulator/",
        },
    },
    {
        id: "flappy-circle",
        name: "Flappy Circle",
        description:
            "A responsive 2D arcade game built with HTML5 Canvas and vanilla JavaScript featuring custom gravity kinematics, collision detection, and persistent high scores via localStorage.",
        techStack: ["HTML", "CSS", "JavaScript"],
        featured: false,
        links: {
            github: "https://github.com/justinr25/flappy-circle",
            live: "https://justinr25.github.io/flappy-circle/",
        },
    },
    {
        id: "pygame-flappy-bird",
        name: "Pygame Flappy Bird",
        description:
            "A modular object-oriented 2D desktop game in Python using Pygame, featuring dynamic collision detection, responsive fullscreen scaling, and persistent high scores.",
        techStack: ["Python", "Pygame"],
        featured: false,
        links: {
            github: "https://github.com/justinr25/pygame-flappy-bird",
        },
    },
    {
        id: "todo-list",
        name: "Todo List",
        description:
            "A responsive task management web application with priority tagging, due date scheduling, active filter controls, and persistent browser storage synchronization.",
        techStack: ["HTML", "CSS", "JavaScript"],
        featured: false,
        links: {
            github: "https://github.com/justinr25/todo-list",
            live: "https://justinr25.github.io/todo-list/",
        },
    },
];

export const skillGroups: SkillGroup[] = [
    {
        category: "Languages",
        skills: ["TypeScript", "Python", "C/C++", "JavaScript"],
    },
    {
        category: "Frameworks & Libraries",
        skills: [
            "React",
            "React Native",
            "Tailwind CSS",
            "DaisyUI",
            "TensorFlow.js",
            "PyTorch",
            "OpenCV",
            "NumPy",
            "Pandas",
        ],
    },
    {
        category: "Backend & Databases",
        skills: [
            "Node.js",
            "Express",
            "Flask",
            "MongoDB",
            "SQLite",
            "Redis",
            "Firebase",
            "Auth0",
        ],
    },
    {
        category: "Tools & Other",
        skills: [
            "Git",
            "GitHub",
            "Neovim",
            "Vercel",
            "Render",
            "Postman",
            "ROS",
        ],
    },
];

export const education: Education[] = [
    {
        id: "umich",
        school: "University of Michigan",
        degree: "BSE Computer Science",
        dateRange: "Aug 2025 - May 2029",
        location: "Ann Arbor, MI",
        coursework: [
            "EECS 281: Data Structures and Algorithms",
            "EECS 370: Computer Organization",
            "EECS 280: Programming and Data Structures",
            "EECS 203: Discrete Mathematics",
        ],
    },
    {
        id: "kamsc",
        school: "Kalamazoo Area Mathematics and Science Center",
        degree: "High School Diploma",
        dateRange: "Aug 2021 - May 2025",
        location: "Kalamazoo, MI",
        coursework: ["AP CSA", "AP CSP", "AP Physics C", "AP Calculus BC"],
    },
];
