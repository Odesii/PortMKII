import {
  Download,
    mobile,
    backend,
    creator,
    web,
    javascript,
    photoshop,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    blender,
    madd,
    corgi,
    red,
    dataRebels,
    TTS,
    rain,
    threejs,
    post,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: 'project',
      title: 'Projects'
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "blender",
      icon: blender,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Postgres",
      icon: post,
    },
  ];
  
  const experiences = [
    {
      "title": "Freelance Photographer",
      "company_name": "Madd Eye",
      "icon": red,
      "iconBg": "#383E56",
      "date": "Jan 2019 - Present",
      "points": [
        "Providing professional photography services for a variety of clients, including event, portrait, and commercial photography.",
        "Published in several online and print publications, showcasing expertise in capturing compelling images.",
        "Collaborating with clients to understand their vision and deliver high-quality photographs that meet their needs.",
        "Utilizing advanced editing software to enhance and retouch images, ensuring a polished final product.",
      ]
    },
    {
      "title": "Freelance Graphic Designer",
      "company_name": "Madd Eye",
      "icon": madd,
      "iconBg": "#383E56",
      "date": "Jan 2019 - Present",
      "points": [
        "Creating and developing brand identities for small businesses, including logos, business cards, and marketing materials.",
        "Collaborating with clients to understand their brand vision and deliver designs that effectively communicate their message.",
        "Utilizing Adobe Suite and other graphic design tools to produce high-quality visual content.",
        "Designing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility."
      ]
    },
    {
      title: "Full Stack Developer",
      company_name: "Corgis.ai",
      icon: corgi,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Data Rebels",
      description:
        "Data Rebels is a turn-based game rooted in the worlds of cyberpunk and hackers, where your goal is simple: either carve your legend or perish trying.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Three JS",
          color: "pink-text-gradient",
        },
      ],
      image: dataRebels,
      source_code_link: "https://github.com/Odesii/dataRebels",
      liveLink:'https://datarebels.onrender.com/',
    },
    {
      name: "TTS",
      description:
        "TTS is a top-down pixel game, with loot and an extraction gameplay loop. It has a persistent leaderboard and is expanding out to multiplayer.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Phaser JS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Socket.io",
          color: "purple-text-gradient",
        },
      ],
      image: TTS,
      source_code_link: "https://github.com/Odesii/TTS",
      liveLink:'https://takeshrooms-691c8b570217.herokuapp.com/',
    },
    {
      name: "When the Rain Falls",
      description:
        "A simple Vaporwave inspired weather app that uses the OpenWeatherMap API to display the current weather in a city of your choice.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: rain,
      source_code_link: "https://github.com/Odesii/whenRainFalls",
      liveLink:'https://odesii.github.io/whenRainFalls/',
    },
  ];
  
  export { services, technologies, experiences, projects };