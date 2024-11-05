import project4 from "../assets/projects/project-4.jpg";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Front-end developer with proven experience in building responsive, accessible, and high-performance websites. Skilled in HTML, CSS, JavaScript, and modern frameworks like React, with a commitment to creating user-centered applications. Possess foundational knowledge in AIML. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm Shankar Karmi, a front-end developer and AI enthusiast with a background in Information Science. Over the past few years, I've developed skills across front-end and back-end technologies, including React, Express.js, and Node.js, while also delving into machine learning. My project work includes building a responsive news aggregator and a facial recognition system, showcasing my ability to tackle complex challenges and deliver user-focused solutions. I’m committed to lifelong learning and thrive in collaborative, dynamic environments where I can contribute to transformative tech solutions.`;

export const EXPERIENCES = [
  {
    year: "05/2023 - 07/2023",
    role: "AI and Machine Learning Intern",
    company: "Central Tool Room and Training Centre",
    description: `Developed a robust facial recognition system capable of identifying individuals by matching their facial features with known data. Implemented in Python using OpenCV, CNN, and Keras for accurate recognition.`,
    technologies: ["Python", "OpenCV", "CNN", "Keras", "NumPy"],
  },
  {
    year: "04/2023 - Present",
    role: "Home Tutor",
    company: "Private",
    description: `Tutored students, helping them transform into confident learners. Focused on inspiring curiosity and a love for learning through personalized instruction.`,
    technologies: ["Communication", "Teaching", "Mentoring"],
  },
];


export const PROJECTS = [


  {
    title: "MERN Stack Website",
    image: project4, // Replace with the actual image path
    description: "A MERN stack application with secure user authentication, utilizing Zod for validation, bcrypt for password hashing, and dotenv for environment management.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      
    ],
  },


  {
    title: "Responsive News Aggregator",
    image: project1,
    description:
      "A responsive news website using the newsdata.io API to deliver real-time updates across various categories with a visually appealing card-based UI.",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
  },
  {
    title: "UsabilityHub Website Redesign",
    image: project2,
    description:
      "A modern website developed with HTML and CSS, featuring a responsive design for optimal user experience across devices.",
    technologies: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, experience and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Budharaja, Shanti Nagar, Sambalpur,  Odisha, India",
  phoneNo: "+91 8917309548",
  email: "shankarkarmi52@gmail.com",
};
