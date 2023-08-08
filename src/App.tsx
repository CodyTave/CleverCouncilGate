import "./App.css";
import { mfAca, mfCom, mfTech } from "./assets";
import { useState } from "react";
import Title from "./components/Title";
function App() {
  const Clevers = [
    {
      id: "com",
      title: "COM & EVENTS",
      position: "translate-x-full",
      image: mfCom,
      bg: "bg-com-2",
      stroke: "stroke-com",
      text: "text-com-0",
    },
    {
      id: "academy",
      title: "ACADEMY",
      position: "",
      image: mfAca,
      bg: "bg-aca-2",
      stroke: "stroke-aca",
      text: "text-aca-1",
    },
    {
      id: "tech",
      title: "TECH SERVICES",
      position: "-translate-x-full",
      image: mfTech,
      bg: "bg-tech-2",
      stroke: "stroke-tech",
      text: "text-tech-1",
    },
  ];

  const [selectedClever, setClever] = useState(Clevers[1]);
  return (
    <div className={`w-screen h-screen ${selectedClever.bg} transall`}>
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
         lg:bottom-28 md:bottom-[20%] mmd:bottom-[18%] sm:bottom-[34%] msm:bottom-[38%] xxs:bottom-[41%] tn:bottom-[43%] bottom-[46%]
         lg:left-48 md:left-36 mmd:left-24 sm:left-20 msm:left-20 xxs:left-10 tn:left-5 left-3
            `}
        >
          CLEVER
        </div>

        <div
          className={`xl:text-9xl  mmd:text-8xl sm:text-5xl xxs:text-3xl tn:text-xl text-sm z-50
          absolute tracking-wider transall font-extrabold overflow-hidden truncate
         lg:top-28 md:top-[20%] mmd:top-[18%] sm:top-[34%] msm:top-[38%] xxs:top-[41%] tn:top-[43%] top-[46%]
         lg:right-48 md:right-36 mmd:right-20 sm:right-28 msm:right-20 xxs:right-10 tn:right-5 right-3
          `}
        >
          <Title Style={selectedClever.stroke} prtitle={selectedClever.title} />
        </div>
      </div>
    </div>
  );
}

export default App;
