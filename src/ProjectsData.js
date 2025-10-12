import movie from "./assets/movies.png";
import james from "./assets/james.png";
import old_portfolio from "./assets/old_portfolio.png";
import todoApp from "./assets/todoApp.png";
import weatherApp from "./assets/weatherApp.png";
import moviesAppDesktop from './assets/movisAppDesktop.png';
import todoAppDesktop from './assets/todoAppDesktop.png';
import weatherAppDesktop from './assets/weatherAppDesktop.png';

const ProjectData = [
  {
    projectName: "James Website",
    website: "https://musical-bubblegum-933125.netlify.app/",
    github: "https://github.com/radwan50000/james-website",
    cover: james,
    desktopCover: james,
    id: "jamesWebsite",
    description:
      "A stylish and responsive promotional website built for a fictional artist named James. The project focuses on modern UI/UX design using React and TailwindCSS, featuring smooth animations, dynamic content sections, and a mobile-first layout. It highlights the artist’s portfolio, social links, and latest updates while maintaining high performance and accessibility standards. This project helped me practice responsive layout building, animation timing, and component reusability.",
  },
  {
    projectName: "Movies Website",
    website: "https://movies-p.netlify.app/",
    github: "https://github.com/radwan50000/Movie_Project",
    cover: movie,
    desktopCover: moviesAppDesktop,
    id: "MoviesWebsite",
    description:
      "A dynamic React-based movie discovery website that integrates with a real-time movie API. Users can explore trending, popular, and top-rated movies, view detailed movie information, and search for titles using interactive filters. Built with React, CSS3, and Axios for API requests, this app demonstrates data fetching, asynchronous rendering, and responsive grid design. It also includes hover effects and smooth transitions to enhance the browsing experience.",
  },
  {
    projectName: "Portfolio Website (Old)",
    website: "https://radwan50000.github.io/",
    github: "https://github.com/radwan50000/portfolio/tree/main",
    cover: old_portfolio,
    desktopCover: old_portfolio,
    id: "oldPortfolio",
    description:
      "My first personal portfolio project, built using pure HTML, CSS, and JavaScript. It showcases my early web development work, personal projects, and contact details. While simple, this project represents the foundation of my journey into front-end development and responsive web design. The layout includes navigation sections, custom styling, and smooth scrolling effects. It served as a stepping stone before transitioning to frameworks like React and Next.js.",
  },
  {
    projectName: "To Doing App",
    website: "https://to-doing-app.netlify.app/Login",
    github: "https://github.com/radwan50000/todo-application",
    cover: todoApp,
    desktopCover: todoAppDesktop,
    id: "todoApp",
    description:
      "A modern task management app that allows users to create, organize, and track their daily tasks efficiently. Built with React and TailwindCSS, it supports real-time updates, delete , edit , and personalized task storage per user. The app features a clean interface with intuitive interactions, such as marking tasks complete and editing existing ones. The project highlights my ability to handle CRUD operations.",
  },
  {
    projectName: "Weather App",
    website: "https://weather-app-jxwo.vercel.app/",
    github: "https://github.com/radwan50000/weather-app",
    cover: weatherApp,
    desktopCover: weatherAppDesktop,
    id: "weatherApp",
    description:
      "A responsive and feature-rich weather forecast app built using Next.js, TailwindCSS, and the OpenWeatherMap API. It provides real-time weather data, a 5-day forecast, and detailed temperature and humidity stats for any location. The app also includes geolocation access, Lottie animations, and loading states for enhanced user experience. This project reflects strong API handling, responsive design, and client-side optimization techniques using modern Next.js practices.",
  },
];

export default ProjectData;
