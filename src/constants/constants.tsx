import { aca, com, mfAca, mfCom, mfTech, tech } from "../assets";
export const navLinks: Array<{ id: string; title: string; order: string }> = [
  {
    id: "home",
    title: "Home",
    order: "order-0",
  },
  {
    id: "nav1",
    title: "Nav1",
    order: "order-1",
  },
  {
    id: "nav2",
    title: "Nav2",
    order: "order-2",
  },
  {
    id: "nav3",
    title: "Nav3",
    order: "order-3",
  },
];

export const Clevers = [
  {
    index: 0,
    id: "com",
    title: "COM & EVENTS",
    position: "translate-x-full",
    image: mfCom,
    logo: com,
    bg: "bg-com-2",
    stroke: "stroke-com",
    text: "text-com-0",
    color: "bg-com-0",
    svg: "#C6A180",
    links: [
      {
        id: "ws",
        title: "VISITER",
        url: "https://clevercouncil.com/com-events",
      },
      {
        id: "fb",
        title: "FACEBOOK",
        url: "https://www.facebook.com/clevercouncil",
      },
      {
        id: "ig",
        title: "INSTAGRAM",
        url: "https://www.instagram.com/clevercomandevents/",
      },
      {
        id: "ln",
        title: "LINKEDIN",
        url: "https://www.linkedin.com/company/clevercouncil/",
      },
    ],
  },
  {
    index: 1,

    id: "academy",
    title: "ACADEMY",
    position: "",
    image: mfAca,
    logo: aca,
    bg: "bg-aca-2",
    stroke: "stroke-aca",
    text: "text-aca-1",
    color: "bg-aca-1",
    svg: "#109CD7",
    links: [
      { id: "ws", title: "VISITER", url: "https://clevercouncil.com/academy" },
      {
        id: "fb",
        title: "FACEBOOK",
        url: "https://www.facebook.com/clevercouncil",
      },
      {
        id: "ig",
        title: "INSTAGRAM",
        url: "https://www.instagram.com/cleveracademy__/",
      },
      {
        id: "ln",
        title: "LINKEDIN",
        url: "https://www.linkedin.com/company/clevercouncil/",
      },
    ],
  },
  {
    index: 2,
    id: "tech",
    title: "TECH SERVICES",
    position: "-translate-x-full",
    image: mfTech,
    logo: tech,
    bg: "bg-tech-2",
    stroke: "stroke-tech",
    text: "text-tech-1",
    color: "bg-tech-1",
    svg: "#B02D6E",
    links: [
      {
        id: "ws",
        title: "VISITER",
        url: "https://clevercouncil.com/technology",
      },
      {
        id: "fb",
        title: "FACEBOOK",
        url: "https://www.facebook.com/clevercouncil",
      },
      {
        id: "ig",
        title: "INSTAGRAM",
        url: "https://www.instagram.com/clev.ertechnologyservices/",
      },
      {
        id: "ln",
        title: "LINKEDIN",
        url: "https://www.linkedin.com/company/clevercouncil/",
      },
    ],
  },
];
