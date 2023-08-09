import { gsap } from "gsap";
import { useEffect, useState } from "react";

interface props {
  prtitle: string;
  Style: string;
}
function Title({ prtitle }: props) {
  const [prev, setPrev] = useState(prtitle);
  useEffect(() => {
    if (prtitle === "ACADEMY") {
      const tl = gsap.timeline({ onComplete: () => setPrev(prtitle) });
      if (prev === "COM & EVENTS") {
        tl.to(".com", {
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-100%",
        });
        tl.to(".tech", { duration: -1, y: "-300%" });
      } else {
        tl.to(".tech", {
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-300%",
        });
        tl.to(".com", { duration: -1, y: "-100%" });
      }
      tl.to(".aca", {
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        y: "-100%",
      });
    } else if (prtitle === "COM & EVENTS") {
      const tl = gsap.timeline({ onComplete: () => setPrev(prtitle) });
      if (prev === "ACADEMY") {
        tl.to(".aca", {
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-200%",
        });
        tl.to(".tech", { duration: -1, y: "-300%" });
      } else {
        tl.to(".tech", {
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-300%",
        });
        tl.to(".aca", { duration: -1, y: "-200%" });
      }
      tl.to(".com", {
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        y: "0%",
      });
    } else if (prtitle === "TECH SERVICES") {
      const tl = gsap.timeline({ onComplete: () => setPrev(prtitle) });
      if (prev === "ACADEMY") {
        tl.to(".aca", {
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-200%",
        });
        tl.to(".com", { duration: -1, y: "-100%" });
      } else {
        tl.to(".com", {
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-100%",
        });
        tl.to(".aca", { duration: -1, y: "-200%" });
      }
      tl.to(".tech", {
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        y: "-200%",
      });
    }
  }, [prtitle]);

  return (
    <>
      <div className={`com -translate-y-full text-right stroke-com `}>
        COM & EVENTS
      </div>
      <div className={`aca  text-right -translate-y-[200%] stroke-aca `}>
        ACADEMY
      </div>
      <div className={`tech  text-right -translate-y-[300%] stroke-tech  `}>
        TECH SERVICES
      </div>
    </>
  );
}

export default Title;
