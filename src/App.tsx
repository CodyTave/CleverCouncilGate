import "./App.css";
import { mfAca, mfCom, mfTech } from "./assets";
import { useState } from "react";
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
            className={`transall cursor-pointer relative w-auto max-w-[60%] ${
              selectedClever.position
            } ${
              selectedClever.id !== clev.id
                ? " grayscale blur-sm scale-75 "
                : "scale-100"
            }`}
            src={clev.image}
          />
        ))}
        <h1
          className={`
          font-extrabold transall ${selectedClever.text} absolute tracking-widest
          xl:text-9xl  mmd:text-8xl sm:text-5xl xxs:text-5xl text-3xl
           sm:bottom-32 bottom-1/4
            sm:left-32 xxs:left-10
            `}
        >
          CLEVER
        </h1>

        <div
          className={`xl:text-9xl  mmd:text-8xl sm:text-5xl xxs:text-5xl text-3xl z-50
          absolute tracking-wider transall font-extrabold overflow-hidden 
          sm:top-28 top-1/4
          sm:right-28 xxs:right-10
          `}
        >
          <h1 className={` ${selectedClever.stroke}  `}>
            {selectedClever.title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
