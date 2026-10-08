export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  note: string;
}

export interface Education {
  period: string;
  degree: string;
  school: string;
  status: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface LeadershipRole {
  role: string;
  organization: string;
  institution: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  title: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const personalInfo = {
  name: "Athul Krishna",
  subtitle: "MCA Student · Tech & Data Explorer",
  headline: "A student figuring out where technology can take me.",
  intro:
    "Exploring data analysis, Python, SQL, and machine learning by building projects and learning through practice at Adi Shankara Institute of Engineering & Technology.",
  location: "Malappuram, Kerala",
};

export const aboutParagraphs = [
  "I'm Athul, from Malappuram, Kerala. Finished my BSc CS at Calicut University, now two years into my MCA at KTU. Somewhere in third year I got a Power BI assignment I couldn't stop working on - way past the deadline. I kept adding charts nobody asked for. That was the moment I was done for.",
  "Since then I've been learning on my own alongside college. Kaggle, courses, random datasets downloaded at weird hours. Six projects built, certifications done, more Jupyter time than I'd like to admit. No professional experience yet - all of it is real effort.",
  "I want to be in a room where people care about the data. Internship, part-time, doesn't matter. Give me something to actually work on.",
];

export const traits = [
  "Curious by nature",
  "Asks too many questions",
  "Detail-oriented",
  "Takes feedback well",
  "Team player",
];

export const stats = [
  { value: "6", label: "Projects Built" },
  { value: "6+", label: "Certifications" },
  { value: "1yr", label: "Self-learning" },
  { value: "0", label: "Exp (for now!)" },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    title: "Python · SQL",
    items: ["Python", "SQL", "HTML/CSS", "R (barely)"],
  },
  {
    category: "BI & Visualization",
    title: "Power BI · Matplotlib",
    items: ["Power BI", "Matplotlib", "Seaborn", "Excel", "Tableau*"],
  },
  {
    category: "Libraries",
    title: "Pandas · NumPy",
    items: ["Pandas", "NumPy", "Scikit-learn", "Statsmodels"],
  },
  {
    category: "Databases & Tools",
    title: "PostgreSQL · Git",
    items: ["PostgreSQL", "MySQL", "Git", "Jupyter", "VS Code"],
  },
];

/* LOCKED DATASET: Exact original objects for the locked Projects.tsx component */
export const projects: Project[] = [
  {
    title: "Airbnb Listings Dashboard",
    subtitle: "Price Variance Analysis",
    description:
      "Spent an embarrassing amount of time cleaning data before a single chart appeared. Power BI dashboard on how prices shift by location and room type. Lesson: cleaning is 80% of the job.",
    tech: ["Power BI", "Python"],
    image: "/images/aribnb.jpg",
    link: "https://github.com/Athul64",
    note: "personal · kaggle dataset",
  },
  {
    title: "Employee Data Analysis",
    subtitle: "HR Dataset Exploration",
    description:
      "SQL on an HR dataset - headcounts, salary trends, tenure. The one where joins finally clicked. I'd been faking confidence with them before this.",
    tech: ["SQL", "PostgreSQL"],
    image: "/images/sal.jpg",
    link: "https://github.com/Athul64",
    note: "course assignment · went deeper after",
  },
  {
    title: "Data Cleaning Practice",
    subtitle: "Real-World Messy Data",
    description:
      'Found a genuinely horrible dataset - wrong formats, missing values, columns named "column1". Cleaned it. Unglamorous, but this is real data work.',
    tech: ["Python", "Pandas"],
    image: "/images/data cleanning.webp",
    link: "https://github.com/Athul64",
    note: "self-study · 0 glamour, 100% useful",
  },
  {
    title: "Sales Report Dashboard",
    subtitle: "DAX Measures & Trends",
    description:
      "Retail sample data, first real DAX measures. Month-on-month growth, running totals. DAX is weird. I like it now.",
    tech: ["Power BI", "DAX"],
    image: "/images/sales-dashboard.png",
    link: "https://github.com/Athul64",
    note: "practice · sample retail data",
  },
  {
    title: "E-Commerce EDA",
    subtitle: "Exploratory Analysis",
    description:
      "Online retail dataset, just explored it. First proper EDA where I had no idea what I'd find - which is the point, apparently.",
    tech: ["Python", "Seaborn"],
    image: "/images/ecommerce-eda.png",
    link: "https://github.com/Athul64",
    note: "personal · first real EDA",
  },
  {
    title: "Doctor Appointment App",
    subtitle: "Full-Stack Web App",
    description:
      "BSc final year. The only non-data thing here. Taught me how real apps are structured. Also, six cases looks better than five.",
    tech: ["React", "Node.js"],
    image: "/images/doc.png",
    link: "https://github.com/Athul64",
    note: "bsc final year · worth knowing",
  },
];

export const leadership: LeadershipRole[] = [
  {
    role: "President",
    organization: "Aitreya — MCA Students' Association",
    institution: "Adi Shankara Institute of Engineering and Technology",
    period: "Sep 2026 - Present",
    description:
      "Leading the student body and organising the department's technical and cultural events for the year, including the upcoming Techfest.",
  },
  {
    role: "Student Representative (MCA)",
    organization: "MCA Department Council",
    institution: "APJ Abdul Kalam Technological University (KTU)",
    period: "2024 - Present",
    description:
      "Representing the MCA department at the university level on academic, curriculum, and examination matters.",
  },
];

export const education: Education[] = [
  {
    period: "2023 - Present",
    degree: "MCA - Master of Computer Applications",
    school: "APJ Abdul Kalam Technological University (KTU), Kerala",
    status: "Ongoing",
  },
  {
    period: "2020 - 2023",
    degree: "BSc - Computer Science",
    school: "University of Calicut, Kerala",
    status: "Completed",
  },
];

export const certifications: Certification[] = [
  { name: "Google Data Analytics", issuer: "Google (Coursera)", year: "2023" },
  {
    name: "Python for Everybody",
    issuer: "University of Michigan (Coursera)",
    year: "2023",
  },
  { name: "SQL & Databases", issuer: "IBM (Coursera)", year: "2022" },
  {
    name: "Data Viz with Power BI",
    issuer: "Microsoft (LinkedIn Learning)",
    year: "2023",
  },
  {
    name: "Statistics for Data Science",
    issuer: "IBM (edX)",
    year: "2023",
  },
  {
    name: "Version Control with Git",
    issuer: "Atlassian (Coursera)",
    year: "2022",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Athul64", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/athulkrishna23/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:k.athulkrishna03@gmail.com", icon: "mail" },
  { label: "Kaggle", href: "https://kaggle.com", icon: "kaggle" },
];
