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
      { id: "ws", title: "VISITER", url: "" },
      { id: "fb", title: "FACEBOOK", url: "" },
      { id: "ig", title: "INSTAGRAM", url: "" },
      { id: "ln", title: "LINKEDIN", url: "" },
    ],
  },
  {
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
      { id: "ws", title: "VISITER", url: "" },
      { id: "fb", title: "FACEBOOK", url: "" },
      { id: "ig", title: "INSTAGRAM", url: "" },
      { id: "ln", title: "LINKEDIN", url: "" },
    ],
  },
  {
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
      { id: "ws", title: "VISITER", url: "" },
      { id: "fb", title: "FACEBOOK", url: "" },
      { id: "ig", title: "INSTAGRAM", url: "" },
      { id: "ln", title: "LINKEDIN", url: "" },
    ],
  },
];
