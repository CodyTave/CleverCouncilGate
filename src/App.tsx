import "./App.css";
import { aca, arrow, com, mfAca, mfCom, mfTech, tech } from "./assets";
import { useState } from "react";
import Title from "./components/Title";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  const Clevers = [
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

  const [selectedClever, setClever] = useState(Clevers[1]);
  return (
    <div className={`w-screen h-screen ${selectedClever.bg} transall`}>
      <AnimatePresence>
        <motion.img
          key={selectedClever.logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="absolute sm:top-20 sm:left-28 top-10 left-10 w-20 sm:w-36 transall"
          src={selectedClever.logo}
        />
      </AnimatePresence>
      <div className="absolute transall md:right-1/2 sm:top-20  sm:right-28 sm:-translate-x-1/2 top-8 right-10 flex gap-3 items-center ">
        {Clevers.map((clev) => (
          <div
            onClick={() => setClever(clev)}
            key={clev.id}
            className={` transall w-[1px] cursor-pointer ${
              selectedClever.id === clev.id
                ? `h-10 ${clev.color}`
                : "h-7 bg-[#2F3165]"
            }`}
          ></div>
        ))}
      </div>
      <div className="flex xl:gap-14 h-full justify-center items-center  transall">
        {Clevers.map((clev) => (
          <img
            key={clev.id}
            onClick={() => setClever(clev)}
            className={`transall  relative w-auto max-w-[60%] ${
              selectedClever.position
            } ${
              selectedClever.id !== clev.id
                ? " grayscale blur-[3px] scale-75 hover:blur-0 hover:grayscale-0 "
                : "scale-100"
            }`}
            src={clev.image}
          />
        ))}
        <div
          className={`
          font-extrabold transall ${selectedClever.text} absolute tracking-widest
          xl:text-9xl  mmd:text-8xl sm:text-5xl xxs:text-3xl tn:text-xl text-sm truncate
         xl:bottom-48 lg:bottom-28 md:bottom-[20%] mmd:bottom-[18%] sm:bottom-[34%] msm:bottom-[38%] xxs:bottom-[41%] tn:bottom-[43%] bottom-[46%]
         xl:left-60 lg:left-48 md:left-36 mmd:left-24 sm:left-20 msm:left-20 xxs:left-10 tn:left-5 left-3
            `}
        >
          CLEVER
        </div>

        <div
          className={`xl:text-9xl  mmd:text-8xl sm:text-5xl xxs:text-3xl tn:text-xl text-sm z-50
          absolute tracking-wider transall font-extrabold overflow-hidden truncate
         xl:top-48 lg:top-28 md:top-[20%] mmd:top-[18%] sm:top-[34%] msm:top-[38%] xxs:top-[41%] tn:top-[43%] top-[46%]
         lg:right-48 md:right-36 mmd:right-20 sm:right-28 msm:right-20 xxs:right-10 tn:right-5 right-3
          `}
        >
          <Title Style={selectedClever.stroke} prtitle={selectedClever.title} />
        </div>
      </div>
      <div className="absolute bottom-10 xxs:left-10 left-1 flex gap-2">
        {selectedClever.links.map((link) => (
          <a
            target="__blank"
            href={link.url}
            key={link.id}
            className="flex justify-center items-center gap-1 transall"
          >
            <span
              className={`font-bold text-xs ${selectedClever.text} hover:underline cursor-pointer transall`}
            >
              {link.title}
            </span>
            <svg width="9" height="8" viewBox="0 0 12 11">
              <path
                className="transall"
                fill={selectedClever.svg}
                d="M9.142 0.603373L3.0821 0.232926L2.96008 2.2289L7.60841 2.51305L0.119065 9.13949L1.44435 10.6374L8.9337 4.01092L8.64954 8.65925L10.6455 8.78127L11.016 2.72136C11.0482 2.19201 10.869 1.67152 10.5175 1.27434C10.1661 0.877159 9.67134 0.635812 9.142 0.603373Z"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
