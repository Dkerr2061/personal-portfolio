import CLI from "../assets/cli.png";
import WebFlix from "../assets/WebFlix.png";
import looney from "../assets/looney.png";
import gear from "../assets/gearheadz.png";
import REST from "../assets/RESTfulAPI.png";
import bug from "../assets/bug-project.png";

function Index() {
  const PROJECTS = [
    {
      title: "Bug Tracker",
      image: bug,
      description:
        "Bug Tracker is a user-friendly application for reporting and managing bugs. Users can report bugs, assign statuses and priorities, edit or delete entries, and sort or filter bugs by status, priority, and submission date. Priority tags are color-coded for quick visual reference, and dates are auto-generated upon submission. This project helped me deepen my knowledge of React, TypeScript, Firebase, and Material UI while creating a streamlined and efficient bug management system.",
      technologies: ["React", "TypeScript", "Firebase", "Material UI"],
      link: "https://bug-form.web.app/",
    },
    {
      title: "RESTful API",
      image: REST,
      description:
        "This RESTful API, developed with Python, Flask, and SQLAlchemy, serves as the backend for several front-end applications within my personal projects. It manages CRUD operations for dynamic content, seamlessly handling data flow between the client interfaces and the server. Deployed on Vercel, the API leverages SQLAlchemy to interact with a relational database, providing secure, reliable endpoints optimized for performance. Each endpoint is designed for efficient data retrieval and modification, ensuring that users experience fast and responsive interactions across the front-end applications.",
      technologies: ["Python", "Flask", "SQLAlchemy"],
      link: null,
    },
    {
      title: "GearHeadz",
      image: gear,
      description:
        "GearHeadz is a blog dedicated to sharing articles about cars and motorcycles. Through this project, I honed my skills using Astro (a modern JavaScript framework) alongside JavaScript, React, and Tailwind CSS to build a fast, responsive, and visually engaging platform for fellow automotive enthusiasts.",
      technologies: ["Astro", "React", "JavaScript"],
      link: "https://gear-headz.vercel.app/",
    },
    {
      title: "WebFlix",
      image: WebFlix,
      description:
        "This project is my second full CRUD application, building on skills from my previous work. It features two user types: admins and customers. Admins can manage movies, reviews, and cart items, while customers can manage their reviews and cart items. Through this project, I gained experience with many-to-many relationships and the complexities of adding new tables. I also implemented user authentication, allowing new users to sign up and access the site only when logged in.",
      technologies: [
        "React",
        "JavaScript",
        "Python",
        "Flask",
        "SQLAlchemy",
        "Tailwinds",
      ],
      link: "https://webflix-frontend.vercel.app/",
    },
    {
      title: "Looney Tunes",
      image: looney,
      description:
        "This project is my first full CRUD application, allowing users to add, edit, update, and delete artists, albums, and reviews. It was my initial experience building an API and integrating it with a React front end. Through this project, I learned about serialization, validations, constraints, and effectively connecting a React front end with a Flask backend.",
      technologies: [
        "React",
        "JavaScript",
        "Python",
        "Flask",
        "SQLAlchemy",
        "Tailwinds",
      ],
      link: "https://github.com/Dkerr2061/phase-4-capstone-project",
    },
    {
      title: "CLI Artist and Album Project",
      image: CLI,
      description:
        "This application enables users to navigate the CLI to manipulate database data, including getting, adding, patching, and deleting artists and albums. Through this project, I gained proficiency in Python, SQL, and ORM, deepening my understanding of database operations and data population.",
      technologies: ["Python", "SQLite"],
      link: "https://github.com/Dkerr2061/phase-3-modded-capstone",
    },
  ];

  return PROJECTS;
}

export default Index;
