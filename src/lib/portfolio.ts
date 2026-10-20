export const email = "raninikita840@gmail.com";
export const github = "https://github.com/27niki04";
export const linkedin = "https://www.linkedin.com/in/nikita-rani-a12b66278";
export const phone = "9508455059";

export const primarySkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
];

export const projects = [
  {
    name: "DojoApp",
    number: "01",
    type: "Learning platform",
    description:
      "A focused space for learners to organize their practice, track progress, and keep momentum.",
    stack: ["React", "Node.js", "MongoDB"],
    mark: "D",
    theme: "lime",
  },
  {
    name: "FileShare",
    number: "02",
    type: "File sharing",
    description:
      "A lightweight file-sharing experience designed to make sending and receiving files feel simple.",
    stack: ["React", "Express", "Socket.IO"],
    mark: "F",
    theme: "blue",
  },
  {
    name: "TUTU-AI",
    number: "03",
    type: "AI assistant",
    description:
      "An approachable AI assistant that turns everyday questions into useful, conversational answers.",
    stack: ["Next.js", "Python", "AI APIs"],
    mark: "AI",
    theme: "violet",
  },
  {
    name: "Codr",
    number: "04",
    type: "Developer tool",
    description:
      "A clean coding space for writing, experimenting with, and sharing ideas with code.",
    stack: ["React", "TypeScript", "Monaco Editor"],
    mark: "</>",
    theme: "orange",
  },
] as const;

export const skillGroups = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    name: "Programming languages",
    skills: ["JavaScript", "TypeScript", "Python", "C"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
  },
  {
    name: "Networking concepts",
    skills: ["TCP/IP", "HTTP/HTTPS", "DNS", "OSI model"],
  },
  {
    name: "Machine learning",
    skills: [
      "ML fundamentals",
      "Supervised learning",
      "Unsupervised learning",
      "Data preprocessing",
      "Model evaluation",
      "NumPy",
      "Pandas",
      "scikit-learn",
    ],
  },
] as const;
