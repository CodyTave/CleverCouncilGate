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
      <div className="flex gap-14 h-full justify-center items-center  transall">
        {Clevers.map((clev) => (
          <img
            onClick={() => setClever(clev)}
            className={`transall cursor-pointer  ${selectedClever.position} ${
              selectedClever.id !== clev.id
                ? "filter grayscale blur-sm scale-75 "
                : "scale-100"
            }`}
            src={clev.image}
          />
        ))}
        <h1
          className={`text-9xl font-extrabold transall ${selectedClever.text} absolute bottom-32 left-32 tracking-widest`}
        >
          CLEVER
        </h1>

        <div
          className={`text-9xl font-extrabold absolute top-28 z-50
            right-28 tracking-wider transall 
          overflow-hidden 
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
