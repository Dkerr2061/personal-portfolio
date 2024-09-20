import CLI from "../assets/cli.png";
import WebFlix from "../assets/WebFlix.png";
import looney from "../assets/looney.png";

function Index() {
  const PROJECTS = [
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
    },
    {
      title: "CLI Artist and Album Project",
      image: CLI,
      description:
        "This application enables users to navigate the CLI to manipulate database data, including getting, adding, patching, and deleting artists and albums. Through this project, I gained proficiency in Python, SQL, and ORM, deepening my understanding of database operations and data population.",
      technologies: ["Python", "SQLite"],
    },
  ];

  return PROJECTS;
}

export default Index;
