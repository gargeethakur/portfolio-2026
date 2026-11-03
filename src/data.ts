// Edit this file to update the whole site. Replace every "#" link and the email.

export const profile = {
  name: "Gargee Thakur",
  role: "Hello, I'm Gargee Thakur",
  pitch:
    "Turning ideas into digital experiences and meaningful solutions.",
  about: [
    "I'm a 4th year Computer Science student at NMIMS with a curiosity for technology and a passion for learning and creating. ",
    "I'm interested in exploring different areas of technology, particularly Software Development, Cybersecurity, and Artificial Intelligence. I enjoy working on projects that allow me to turn ideas into practical solutions, experiment with new technologies, and challenge myself to learn something new.",
    "Throughout my academic journey, I've worked on projects such as AI Phishing Detector and Hybrid IDS, along with gaining industry exposure through internship experiences at Reliance Industries Limited and Dani Endeavors. I believe in learning by doing and constantly improving through hands-on experience.",
    "Beyond coding, I'm always eager to explore new concepts, develop my problem-solving abilities, and take on opportunities that help me grow both personally and professionally.",
  ],
  email: "gargeet16@gmail.com",
  github: "https://github.com/gargeethakur",
  linkedin: "https://www.linkedin.com/in/gargee-thakur/",
  resume: "/Gargee Thakur - Resume 2026.pdf", 
};

export type Project = {
  title: string;
  context: string;
  summary: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Hybrid Intrusion Detection System",
    context: "University capstone, team project",
    summary:
      "Developed a machine learning-based Hybrid Intrusion Detection System using the CICIDS2017 dataset to identify potentially malicious network traffic. The system combines XGBoost, LightGBM, and CatBoost models, with SHAP explainability to interpret predictions and identify the network traffic features influencing security alerts. The project was completed as a university team capstone and accompanied by a research paper.",
    stack: ["Python", "XGBoost", "LightGBM", "CatBoost", "SHAP", "CICIDS2017"],
    links: [
      { label: "Code", href: "https://github.com/gargeethakur/Hybrid-Intrusion-Detection-System" },
      { label: "Paper", href: "/hybrid-ids-paper.pdf" },
    ],
  },
  {
    title: "GAIT, Internship Tracker",
    context: "Reliance Industries Limited - internship",
    summary:
      "A full-stack application for tracking interns and their progress. The application streamlines intern progress monitoring through a FastAPI backend and MongoDB database, with a React-based frontend featuring interactive dashboards and sortable data grids to help supervisors efficiently manage and track internship records.",
    stack: ["FastAPI", "MongoDB", "React", "TypeScript", "Python", "SDLC"],
    links: [],
  },
  {
    title: "EmotionAI, multimodal emotion detection",
    context: "Personal project",
    summary:
      "A full-stack web app that detects emotions from a live webcam feed and from typed text. A custom CNN classifies faces into 7 emotions, and a fine-tuned DistilBERT model classifies text into 28 emotion classes. The dashboard shows the camera feed, bar charts and sentiment badges.",
    stack: ["Python", "PyTorch", "Flask", "React", "Vite", "DistilBERT"],
    links: [{ label: "Code", href: "https://github.com/gargeethakur/Multimodal-Emotion-Recognition-System" },
            { label: "Report", href: "/ML Project Report.pdf" },
    ],
  },
  {
    title: "AI phishing detector for DMs",
    context: "Personal project",
    summary:
      "Detects phishing, scam and social engineering messages in short DM-style chats, with support for India-specific patterns in Hindi, Hinglish and regional scams. Three detection layers work together: an NLP/ML analyzer, a URL checker and a pattern engine. A Streamlit dashboard sits on a FastAPI backend that logs results to MongoDB.",
    stack: ["Python", "FastAPI", "Streamlit", "MongoDB", "NLP", "Docker"],
    links: [{ label: "Code", href: "https://github.com/gargeethakur/AI-Phishing-Detector" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming Languages", items: ["Python", "JavaScript", "Java", "C++"] },
  { group: "Backend & Databases", items: ["Python", "FastAPI", "Rest APIs", "MongoDB", "MySQL"] },
  { group: "Frontend", items: ["React", "HTML", "CSS", "JavaScript", "TypeScript", "Vite"] },
  { group: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Docker"] },
];

export const education = [
  {
    school: "NMIMS, Institute of Management Studies",
    degree: "B.Tech in Computer Engineering",
    period: "2023 to 2027",
    note: "CGPA: 3.01/4.0",
  },
];

export const certifications = [
  {
    name: "Google Cybersecurity",
    issuer: "Google",
    year: "2025",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/LP7WII4F4VLR",
  },
  {
    name: "CompTIA Security+ Certification (SY0-701): The Total Course",
    issuer: "CompTIA",
    year: "2026",
    href: "https://www.coursera.org/account/accomplishments/specialization/JUT0UB1DJ858",
  },
  {
    name: "Managing Projects with AI",
    issuer: "AI CERTs",
    year: "2026",
    href: "https://www.coursera.org/account/accomplishments/verify/OY2PD3NKLRVD",
  },
  {
    name: "Cloud Architecting",
    issuer: "AWS Training and Certification",
    year: "2026",
    href: "https://www.credly.com/badges/45f327d7-c15d-4d71-b96c-9371f380db49/print",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Reliance Industries Limited",
    period: "May 2026 to July 2026",
    summary:
      "Contributed to the development of GAIT, an enterprise web application, as part of the full-stack development team. Worked on the HR module, implementing frontend features using React (Vite), integrating Python-based backend APIs, and managing data using MongoDB. Gained practical experience in understanding business requirements, feature development, testing, and collaborative software development.",
    stack: ["React", "Vite", "Python", "FastAPI", "MongoDB", "REST APIs", "Full-Stack Development"],
    certificate: "/internship - reliance.pdf",
  },
  {
    role: "Web Developer Intern",
    company: "Dani Endeavors (opc) Pvt. Ltd.",
    period: "May 2025 to July 2025",
    summary:
      "Developed responsive web interfaces, including a login page, admin portal, and digital ID card for MUHS University using HTML, CSS, JavaScript, and Bootstrap. Designed two landing pages and a complete responsive website for Bulls & Bears Trading Academy. Also implemented SEO improvements through content optimization, meta tags, and image alt attributes to enhance website visibility.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Web Design", "SEO", "UI Development"],
    certificate: "/internship - dani.pdf",
  },
];

export const achievements = [
  {
    title: "Network Optimization in Edge Computing",
    label: "Publication: Edge Artificial Intelligence: Foundation, Techniques and Application, Wiley Online Library",
    year: "2025",
    summary:
      "The paper examines approaches to improving resource allocation, reducing latency, and enhancing overall system performance in distributed computing environments.",
    href: "https://onlinelibrary.wiley.com/doi/abs/10.1002/9781394355037.ch5?msockid=00de43457bd367b11b6756f47a4866b2",
  },
  {
    title: "Echelon'25",
    label: "Hackathon participant",
    year: "2025",
    summary:
      "Built EduBoost AI, an AI-powered learning platform featuring personalized learning paths, course recommendations, and mentor matching. Integrated the Google Gemini API and backend services to enable AI-driven learning assistance.",
    href: "https://github.com/gargeethakur/Echelon-25",
  },
];