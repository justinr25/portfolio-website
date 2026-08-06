import type {
    Profile,
    Experience,
    Project,
    SkillGroup,
} from "@/types/portfolio";

export const profile: Profile = {
    name: "Justin Rosales",
    title: "CS Student & Developer",
    university: "University of Michigan — Ann Arbor",
    degree: "BSE Computer Science (College of Engineering)",
    bio: "I'm a CS student at the University of Michigan building full-stack web apps, machine learning systems, and research software. I like working on things that solve real problems — whether that's a clinical screening tool for nurses or a reinforcement learning trading bot. Always learning, always shipping.",
    email: "justin06.rosales@gmail.com",
    socials: [
        {
            label: "GitHub",
            url: "https://github.com/justinr25",
            icon: "github",
        },
        {
            label: "LinkedIn",
            url: "https://linkedin.com/in/justinrosales",
            icon: "linkedin",
        },
    ],
};

export const experiences: Experience[] = [
    {
        id: "umich-research-assistant",
        role: "Undergraduate Research Assistant",
        organization:
            "University of Michigan — Civil & Environmental Engineering",
        dateRange: "Jun 2026 – Present",
        location: "Ann Arbor, MI",
        bullets: [
            // "Architected the migration of monolithic research Jupyter Notebooks into modular, production-grade Python software pipelines for aerosol mass spectrometry analysis, eliminating 100% of codebase redundancy.",
            // "Engineered a responsive desktop GUI application using CustomTkinter and embedded interactive Matplotlib canvases, reducing researchers' analytical workflow time by over 80%.",
            // "Developed automated batch-processing data pipelines to sequentially analyze multi-file atmospheric chemistry datasets, scaling analytical throughput to generating 100+ publication-quality plots in seconds.",
        ],
    },
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
];

export const projects: Project[] = [
    {
        id: "releet",
        name: "ReLeet",
        description:
            "A web application for LeetCode practice using spaced repetition algorithms (SM-2 / Leitner) to dynamically schedule problem reviews, track algorithmic mastery, and optimize technical interview prep.",
        techStack: ["React", "TypeScript", "Tailwind CSS"],
        links: {},
    },
    {
        id: "splitr",
        name: "Splitr",
        description:
            "A secure web application integrating real-time facial recognition using OpenCV, PyTorch, and FaceNet with Auth0 OAuth 2.0 authentication. Won 1st Place for 'Best Use of Auth0' at MHacks 2025.",
        techStack: ["Python", "Flask", "Auth0", "OpenCV", "PyTorch", "SQLite"],
        links: {
            devpost: "https://devpost.com/software/splitr-vbt924",
        },
    },
    {
        id: "scratchpad",
        name: "Scratchpad",
        description:
            "A full-stack notes web application built on the MERN stack featuring client-side SPA routing, dynamic per-IP rate limiting via Upstash Redis, and a modern responsive UI styled with Tailwind CSS v4 and DaisyUI v5.",
        techStack: [
            "React 19",
            "Express 5",
            "MongoDB",
            "Redis",
            "Tailwind CSS",
            "DaisyUI",
        ],
        links: {
            github: "https://github.com/justinr25/scratchpad",
            live: "https://scratchpad-ur89.onrender.com/",
        },
    },
    {
        id: "arithmetic-battle",
        name: "Arithmetic Battle",
        description:
            "A real-time competitive mental math duel game where players race head-to-head solving arithmetic problems within a 120-second time limit using deterministic seeded problem generation for fairness.",
        techStack: [
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
            "Vercel",
        ],
        links: {
            github: "https://github.com/justinr25/arithmetic-battle",
            live: "https://arithmetic-battle.vercel.app/",
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
