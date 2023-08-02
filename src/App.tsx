import "./App.css";
import { mfAca, mfCom, mfTech } from "./assets";
import { useState } from "react";
function App() {
  const [position, setPosition] = useState("transall");
  return (
    <div className="w-screen h-screen bg-aca-2 overflow-auto ">
      <div className="flex gap-20 h-full justify-center items-center overflow-x-scroll  ">
        <img
          onClick={() => setPosition("translate-x-full transall")}
          className={position}
          src={mfCom}
        />
        <img
          onClick={() => setPosition("transall")}
          className={position}
          src={mfAca}
        />
        <img
          onClick={() => setPosition("-translate-x-full transall")}
          className={position}
          src={mfTech}
        />
      </div>
    </div>
  );
}

export default App;

{
  /* <h1 className="text-9xl font-extrabold text-aca-1 absolute -bottom-20 -left-20 tracking-widest">
          CLEVER
        </h1>
        <h1 className="text-9xl font-extrabold stroke  absolute -top-16 -right-28 tracking-wider">
          ACADEMY
        </h1> */
}
