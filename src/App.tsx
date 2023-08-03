import "./App.css";
import { mfAca, mfCom, mfTech } from "./assets";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <div className="flex gap-16 h-full justify-center items-center  transall">
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
          className={`text-9xl font-extrabold ${selectedClever.text} absolute bottom-32 left-32 tracking-widest`}
        >
          CLEVER
        </h1>
        <AnimatePresence>
          <div
            className={`text-9xl font-extrabold absolute top-28
           ${selectedClever.stroke} right-28 tracking-wider transall
          overflow-hidden 
          `}
          >
            <motion.h1
              className=""
              initial={{ translateY: "0%" }}
              animate={{ translateY: "-100%" }}
              exit={{ translateY: "-100%" }}
              transition={{
                duration: 1.4,
                ease: "cubic-bezier(0.11, 0, 0.5, 0)",
              }}
            >
              {selectedClever.title}
            </motion.h1>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
