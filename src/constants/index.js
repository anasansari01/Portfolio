const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Major Projects Completed" },
  { value: 5, suffix: "+", label: "Programming Languages Learned" },
  { value: 800, suffix: "+", label: "DSA Problems Solved" },
  { value: 4, suffix: "+", label: "Certificates & Achievements" },
];


const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Strong Problem-Solving",
    desc: "Solved 800+ DSA problems across platforms, building optimized and efficient solutions.",
  },
  {
    imgPath: "/images/time.png",
    title: "Adaptable Learner",
    desc: "Quickly picked up MERN stack and ML tools to build real-world, end-to-end applications.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python & ML Enthusiast",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js & Express Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive UI Builder",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "The Memories app taught me how to bring a full-stack idea to life — from UI to backend deployment. It’s an engaging social platform where users can post, like, and comment in real time.",
    mention: "@Paras",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer — Memories App",
    date: "January 2025 - Present",
    responsibilities: [
      "Built a social media app using the MERN stack with full CRUD functionality.",
      "Implemented liking, commenting, and post creation with live updates using Redux and Redux Thunk.",
      "Styled components with Material-UI for a responsive and clean UI experience.",
      "Deployed frontend on Netlify and backend on Render/Heroku with proper environment config and CORS setup.",
    ],
  },
  {
    review: "Building this game taught me the power of JavaScript and DOM manipulation. I focused on making the experience fun and intuitive for players.",
    // imgPath: "/images/exp3.png",
    mention: "@Wasim",
    logoPath: "/images/logo3.png",
    title: "Frontend Developer — Chess Game",
    date: "August 2024 - December 2024",
    responsibilities: [
      "Developed a browser-based multiplayer chess game using JavaScript, HTML, and CSS.",
      "Implemented complete game logic including legal moves, check/checkmate, and turns.",
      "Created a smooth drag-and-drop UI with real-time interaction between two players.",
    ],
  },
  {
    review: "This project boosted my interest in machine learning. It was exciting to see how NLP could be used to solve real-world problems like fake news detection.",
    // imgPath: "/images/exp2.png",
    mention: "@Himanshi",
    logoPath: "/images/logo2.png",
    title: "Machine Learning Developer — Fake News Detection",
    date: "May 2024 - July 2024",
    responsibilities: [
      "Created a fake news classifier with 85% accuracy using Python and Scikit-learn.",
      "Handled data preprocessing, feature engineering, and model evaluation.",
      "Applied NLP techniques such as tokenization, stop-word removal, and TF-IDF vectorization.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Rajnikant",
    mentions: "@rajnikant",
    review:
      "Really impressive work on the MERN stack project! The way you structured the backend and managed state with Redux, Respect bro!",
    imgPath: "/images/client1.png",
  },
  {
    name: "Manik",
    mentions: "@manik",
    review:
      "Your frontend game is solid! Clean React code, great use of Material UI, and the deployment process was seamless. Really appreciate your attention to detail.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Rocky",
    mentions: "@rocky",
    review:
      "Loved the chess game — your logic implementation and user flow were smooth. Shows you’ve got a strong hold on core JavaScript and UI thinking. Keep building!",
    imgPath: "/images/client2.png",
  },
  {
    name: "Anant",
    mentions: "@anant",
    review:
      "The ML model you built for fake news detection was very accurate. You clearly know how to handle data and apply the right algorithms. Great work, bro!",
    imgPath: "/images/client5.png",
  },
  {
    name: "Vansh",
    mentions: "@vansh",
    review:
      "Your UI decisions were on point — intuitive, minimal, and clean. The app felt smooth and well-structured. Would love to team up on something again soon!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Sourabh",
    mentions: "@sourabh",
    review:
      "Your DSA and problem-solving skills are next level. I’ve seen your consistency on LeetCode — it’s inspiring. Keep grinding and building amazing stuff!",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/4nas.o1/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/4nas-ansari",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/anasansari01",
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
