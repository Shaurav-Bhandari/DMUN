import {
  Innovation,
  Leadership,
  Excellence,
  Success,
  // Join,
  Book,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#Home",
  },
  {
    id: "1",
    title: "Our Objectives",
    url: "#About",
  },
  {
    id: "2",
    title: "Contact Us",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "schedule",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "organizers",
    url: "#organizers",
  },
  // {
  //   id: "5",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "6",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];


export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

// export const collabApps = [
//   {
//     id: "0",
//     title: "Figma",
//     icon: "",
//     width: 26,
//     height: 36,
//   },
//   {
//     id: "1",
//     title: "Notion",
//     icon: "",
//     width: 34,
//     height: 36,
//   },
//   {
//     id: "2",
//     title: "Discord",
//     icon: "",
//     width: 36,
//     height: 28,
//   },
//   {
//     id: "3",
//     title: "Slack",
//     icon: "",
//     width: 34,
//     height: 35,
//   },
//   {
//     id: "4",
//     title: "Photoshop",
//     icon: "",
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "5",
//     title: "Protopie",
//     icon: "",
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "6",
//     title: "Framer",
//     icon: "",
//     width: 26,
//     height: 34,
//   },
//   {
//     id: "7",
//     title: "Raindrop",
//     icon: "",
//     width: 38,
//     height: 32,
//   },
// ];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];


export const collabContent = [
  {
    id: "0",
    title: "Acoustic Night",
    text: "With soulful melodies and enchanting performances, it's the perfect evening for music lovers to unwind.",
  },
  {
    id: "1",
    title: "Masquerade Ball",
  },
  {
    id: "2",
    title: "Many Exciting Games and other Activities",
  },
];


export const benefits = [
  {
    id: "0",
    title: "Innovation in Education",
    text: "Dynamic programs like BSc.CSIT and BCA nurture students from school to high school, fostering a vibrant academic environment with collaborations with diverse IT companies.",
    backgroundUrl: "assets/benefits/innovation_in_education.svg",
    iconUrl: Innovation,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Model United Nations",
    text: "Simulating the United Nations, students play delegates representing countries, working to pass resolutions on global issues, honing leadership and negotiation skills.",
    backgroundUrl: "assets/benefits/Leadership.svg",
    iconUrl: Leadership,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Academic Excellence",
    text: "We foster a vibrant academic environment that bridges education and entertainment, emphasizing student talent and growth, preparing well-rounded individuals.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: Excellence,
    imageUrl: benefitImage2,
  },
  // {
  //   id: "3",
  //   title: "Global Collaboration",
  //   text: "Engaging with international academic and IT communities, promoting a diverse and inclusive culture, and preparing students for global contributions.",
  //   backgroundUrl: "assets/benefits/card-4.svg",
  //   iconUrl: Join,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  {
    id: "4",
    title: "Student Success",
    text: "Developing real-world problem-solving skills through MUN, highlighting student achievements, and encouraging active participation and engagement.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: Success,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Join Us",
    text: "Be part of a pioneering institution, experience innovative education, and contribute to global and local communities for a successful future.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: Book,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
