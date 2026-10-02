export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  myContribution: string[];
  githubUrl: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    source: string;
  }[];
}

export const portfolioData = {
  personal: {
    name: 'Likhita Seera',
    title: 'AI & Data Science Student | Aspiring AI/ML & Software Engineer',
    degreeInfo: 'Bachelor of Artificial Intelligence and Data Science (2023–2027) · GPA: 7.81',
    college: 'Satya Institute of Technology and Management, Vizianagaram',
    email: 'likhitaseera70369@gmail.com',
    phone: '7036959326',
    formattedPhone: '+91 7036959326',
    location: 'Hiramandalam / Vizianagaram, India',
    github: 'https://github.com/likhitaseera-2005',
    linkedin: 'https://www.linkedin.com/in/likhita-seera-758894321/',
    summary:
      'I am an undergraduate student pursuing a Bachelor of Artificial Intelligence and Data Science at Satya Institute of Technology and Management (2023–2027, GPA: 7.81). I have completed a 4-weeks virtual internship at Indian Servers focused on Artificial Intelligence and cyber security, working with NumPy, Pandas, Scikit-learn, and TensorFlow for basic analysis and model building. Additionally, I built an AI Programming Learning Platform (PrepBuddyAI) using React, Node.js, Express, MongoDB, and the Google Gemini API. I am looking for opportunities in AI/ML engineering, Python development, software engineering, and Appian associate development.',
    targetRoles: [
      'AI / ML Engineer (Fresher)',
      'Python Developer',
      'Software Engineer (Fresher)',
      'Appian Associate Developer',
    ],
  },

  recruiterGlance: [
    { label: 'Candidate', value: 'Likhita Seera' },
    { label: 'Degree', value: 'Bachelor of AI & Data Science' },
    { label: 'College', value: 'Satya Institute of Technology and Management' },
    { label: 'Graduation Year', value: '2027 (Final Year / Fresher)' },
    { label: 'Current GPA', value: '7.81 / 10.0' },
    { label: 'Internship', value: 'Indian Servers (AI & Cyber Security)' },
    { label: 'Primary Languages', value: 'Python, Java' },
    { label: 'Key Project', value: 'PrepBuddyAI (AI Learning Platform)' },
  ],

  about: {
    academic:
      'I am pursuing my Bachelor of Artificial Intelligence and Data Science at Satya Institute of Technology and Management (2023–2027) in Vizianagaram, with a current GPA of 7.81. Prior to this, I completed my Intermediate education in MPC at Sri Rama Junior College with a 9.3 GPA, and Secondary Education at Sun School High School with a 9.3 GPA.',
    interests:
      'My technical interest centers on Artificial Intelligence and Machine Learning. I enjoy working with Python for data analysis, exploring predictive models with Scikit-learn and TensorFlow, and building full-stack web applications that integrate intelligent APIs.',
    experience:
      'During my 4-weeks virtual internship at Indian Servers in 2025, I focused on Artificial Intelligence and cyber security, working with libraries such as NumPy, Pandas, Scikit-learn, and TensorFlow for basic dataset analysis and model building.',
    goal:
      'I am looking for an opportunity to start my career where I can apply my knowledge of Python, Machine Learning, SQL, Appian, and web technologies (React, Node.js, Express, MongoDB), learn new skills, and contribute effectively as an entry-level engineer.',
  },

  // Exactly the skills supported by the uploaded resume
  skillCategories: [
    {
      id: 'programming',
      title: 'Programming Languages',
      skills: [
        { name: 'Python', source: 'Core language in resume, internship & projects' },
        { name: 'Java', source: 'Object-oriented programming listed in resume skills' },
      ],
    },
    {
      id: 'aiml',
      title: 'AI & Machine Learning',
      skills: [
        { name: 'NumPy', source: 'Applied in Indian Servers internship & resume skills' },
        { name: 'Pandas', source: 'Applied in Indian Servers internship for analysis' },
        { name: 'Scikit-learn', source: 'Applied in Indian Servers internship for model building' },
        { name: 'TensorFlow', source: 'Applied in Indian Servers internship for basic models' },
        { name: 'Basic Analysis & Model Building', source: 'Documented in Indian Servers internship' },
      ],
    },
    {
      id: 'web_backend',
      title: 'Web & Backend Development',
      skills: [
        { name: 'React', source: 'Frontend framework used in PrepBuddyAI project' },
        { name: 'Node.js', source: 'Backend runtime used in PrepBuddyAI project' },
        { name: 'Express', source: 'API framework used in PrepBuddyAI project' },
        { name: 'HTML', source: 'Web markup listed in resume skills' },
        { name: 'CSS', source: 'Styling technologies listed in resume skills' },
      ],
    },
    {
      id: 'data_databases',
      title: 'Data & Databases',
      skills: [
        { name: 'SQL', source: 'Relational database knowledge listed in resume summary' },
        { name: 'MongoDB', source: 'Document database used in PrepBuddyAI project' },
      ],
    },
    {
      id: 'tools_enterprise',
      title: 'Tools & Intelligent APIs',
      skills: [
        { name: 'Google Gemini API', source: 'Integrated in PrepBuddyAI for explanations & quizzes' },
        { name: 'Visual Studio Code', source: 'Primary development editor listed in resume' },
        { name: 'Git & GitHub', source: 'Version control (github.com/likhitaseera-2005)' },
        { name: 'Appian', source: 'Low-code application knowledge listed in resume summary' },
      ],
    },
    {
      id: 'professional',
      title: 'Professional Competencies',
      skills: [
        { name: 'Communication', source: 'Listed in resume competencies' },
        { name: 'Teamwork', source: 'Listed in resume competencies' },
        { name: 'Adaptability', source: 'Listed in resume competencies' },
        { name: 'Leadership', source: 'Listed in resume competencies' },
      ],
    },
  ] as SkillCategory[],

  // Project from resume: "AI Programming Learning Platform" (PrepBuddyAI)
  projects: [
    {
      id: 'prepbuddy-ai',
      title: 'AI Programming Learning Platform (PrepBuddyAI)',
      subtitle: 'Adaptive Educational Platform with Google Gemini API',
      description:
        'An AI-powered programming learning platform that provides personalized guidance, code explanations, debugging assistance, quizzes, and coding challenges. Built with React, Node.js, Express, MongoDB, and Google Gemini API to deliver an interactive and adaptive learning experience.',
      problem:
        'Students learning programming often struggle with confusing error messages, syntax misconceptions, and lack immediate step-by-step guidance when practicing outside classroom hours.',
      solution:
        'An interactive web platform integrating the Google Gemini API to act as an educational coding mentor. The application accepts student code, identifies runtime and logical errors, provides step-by-step explanations, and generates interactive quizzes.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Gemini API', 'HTML', 'CSS'],
      features: [
        'Personalized code explanations that demystify syntax and algorithmic logic',
        'Debugging assistance that highlights error causes and suggests guided remedies',
        'Interactive programming quizzes to assess comprehension',
        'Coding challenges designed to reinforce problem-solving skills',
        'Full-stack architecture connecting React client, Express API, and MongoDB data store',
      ],
      myContribution: [
        'Built the responsive web frontend interface using React components, HTML, and CSS',
        'Constructed the backend server routes using Node.js and Express to handle user requests',
        'Integrated the Google Gemini API to process code inputs and produce structured instructional feedback',
        'Configured MongoDB database collections to store user quiz sessions and progress data',
      ],
      githubUrl: 'https://github.com/likhitaseera-2005',
      image: '/src/assets/images/prepbuddy_project_preview_1790955434569.jpg',
    },
  ] as Project[],

  // Work experience from resume: "Artificial Intelligence and Cyber security" at Indian Servers
  experience: [
    {
      id: 'indian-servers',
      organization: 'Indian Servers',
      role: 'Artificial Intelligence and Cyber security Intern',
      period: '2025',
      duration: '4-weeks virtual internship',
      location: 'Virtual / Remote, India',
      responsibilities: [
        'Completed a 4-weeks virtual internship focused on Artificial Intelligence and cyber security.',
        'Worked with libraries such as NumPy, Pandas, Scikit-learn, and TensorFlow for basic analysis and model building.',
      ],
      technologies: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Python'],
    },
  ] as ExperienceItem[],

  // Education from resume: exact institutions, GPAs, dates, and locations
  education: [
    {
      id: 'btech-aids',
      degree: 'Bachelor of Artificial Intelligence and Data Science',
      institution: 'Satya Institute of Technology and Management',
      period: '2023 - 2027',
      location: 'Vizianagaram, India',
      score: '7.81',
      scoreLabel: 'GPA',
    },
    {
      id: 'intermediate-mpc',
      degree: 'Board of Intermediate in MPC',
      institution: 'Sri Rama Junior College',
      period: '2021 - 2023',
      location: 'Hiramandalam, India',
      score: '9.3',
      scoreLabel: 'GPA',
    },
    {
      id: 'secondary-school',
      degree: 'Board of Secondary Education',
      institution: 'Sun School High School',
      period: '2020 - 2021',
      location: 'Hiramandalam, India',
      score: '9.3',
      scoreLabel: 'GPA',
    },
  ] as EducationItem[],

  // Honest learning areas directly related to candidate's B.Tech AI & Data Science coursework
  currentFocus: {
    title: 'Currently Learning & Practicing',
    subtitle: 'Active areas of study during final-year B.Tech in Artificial Intelligence & Data Science',
    items: [
      {
        topic: 'Machine Learning & Deep Learning Pipelines',
        description: 'Deepening practical understanding of neural network layers in TensorFlow and model evaluation techniques in Scikit-learn.',
      },
      {
        topic: 'API Integration with Modern LLMs',
        description: 'Practicing prompt structuring and error handling with the Google Gemini API for software development tools.',
      },
      {
        topic: 'Relational Database Queries & Enterprise Workflows',
        description: 'Writing complex SQL queries for relational data manipulation and exploring Appian process automation fundamentals.',
      },
    ],
  },
};
