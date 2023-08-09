import { gsap } from "gsap";
import { useEffect, useState } from "react";

interface props {
  prtitle: string;
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
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",
        });
        tl.to(".tech", {
          duration: -1,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",
          y: "-300%",
        });
      } else {
        tl.to(".tech", {
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-300%",
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",
        });
        tl.to(".com", {
          duration: -1,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",
          y: "-100%",
        });
      }
      tl.to(".aca", {
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        y: "-100%",
        textShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
      });
    } else if (prtitle === "COM & EVENTS") {
      const tl = gsap.timeline({ onComplete: () => setPrev(prtitle) });
      if (prev === "ACADEMY") {
        tl.to(".aca", {
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",

          y: "-200%",
        });
        tl.to(".tech", {
          duration: -1,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",
          y: "-300%",
        });
      } else {
        tl.to(".tech", {
          duration: 0.8,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",

          y: "-300%",
        });
        tl.to(".aca", {
          duration: -1,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",
          y: "-200%",
        });
      }
      tl.to(".com", {
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        y: "0%",
        textShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
      });
    } else if (prtitle === "TECH SERVICES") {
      const tl = gsap.timeline({ onComplete: () => setPrev(prtitle) });
      if (prev === "ACADEMY") {
        tl.to(".aca", {
          duration: 0.8,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",

          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-200%",
        });
        tl.to(".com", { duration: -1, y: "-100%" });
      } else {
        tl.to(".com", {
          duration: 0.8,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)",

          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-100%",
        });
        tl.to(".aca", { duration: -1, y: "-200%" });
      }
      tl.to(".tech", {
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        y: "-200%",
        textShadow: "8px 8px 8px rgba(0, 0, 0, 0.2)",
      });
    }
  }, [prtitle]);

  return (
    <>
      <div
        className={`com -translate-y-full text-right text-com-0
          pr-3 tracking-widest `}
      >
        COM & EVENTS
      </div>
      <div
        className={`aca  text-right -translate-y-[200%]
        text-aca-0  pr-3 tracking-widest`}
      >
        ACADEMY
      </div>
      <div
        className={`tech  text-right -translate-y-[300%]
         text-tech-0  pr-3 tracking-widest `}
      >
        TECH SERVICES
      </div>
    </>
  );
}

export default Title;
