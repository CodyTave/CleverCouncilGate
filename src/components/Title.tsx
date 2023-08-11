import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { isMobile } from "../constants/functions";

interface props {
  prtitle: string;
  setAnimating: (arg: boolean) => void;
}
function Title({ prtitle, setAnimating }: props) {
  const [prev, setPrev] = useState(prtitle);
  useEffect(() => {
    if (prtitle === "ACADEMY") {
      setAnimating(true);
      const tl = gsap.timeline({
        onComplete: () => {
          setPrev(prtitle);
          setAnimating(false);
        },
      });
      if (prev === "COM & EVENTS") {
        tl.to(".com", {
          duration: 0.5,
          ease: "Power4.easeOut",
          y: "-100%",
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        });
        tl.to(".tech", {
          duration: -1,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          y: "-300%",
        });
      } else {
        tl.to(".tech", {
          duration: 0.5,
          ease: "easeInOuteaseOut",
          y: "-300%",
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        });
        tl.to(".tech2", {
          delay: -0.3,
          duration: 0.5,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          y: "-400%",
        });
        tl.to(".com", {
          duration: -1,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          y: "-100%",
        });
      }
      tl.to(".aca", {
        duration: 0.5,
        ease: "easeInOuteaseOut",
        y: "-100%",
        textShadow: isMobile() ? "" : "8px 8px 8px rgba(0, 0, 0, 0.2)",
      });
    } else if (prtitle === "COM & EVENTS") {
      setAnimating(true);

      const tl = gsap.timeline({
        onComplete: () => {
          setPrev(prtitle);
          setAnimating(false);
        },
      });
      if (prev === "ACADEMY") {
        tl.to(".aca", {
          duration: 0.5,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          y: "-200%",
        });
        tl.to(".tech", {
          duration: -1,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          y: "-300%",
        });
        tl.to(".tech2", {
          duration: -1,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          y: "-400%",
        });
      } else {
        tl.to(".tech", {
          duration: 0.5,
          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",

          y: "-300%",
        });
        tl.to(".tech2", {
          delay: -0.3,
          duration: 0.5,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          y: "-400%",
        });

        tl.to(".aca", {
          duration: -1,
          textShadow: "0px 0px 0px rgba(0, 0, 0,0)",
          y: "-200%",
        });
      }
      tl.to(".com", {
        duration: 0.5,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        y: "0%",
        textShadow: isMobile() ? "" : "8px 8px 8px rgba(0, 0, 0, 0.2)",
      });
    } else if (prtitle === "TECH SERVICES") {
      setAnimating(true);
      const tl = gsap.timeline({
        onComplete: () => {
          setPrev(prtitle);
          setAnimating(false);
        },
      });
      if (prev === "ACADEMY") {
        tl.to(".aca", {
          duration: 0.8,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",

          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-200%",
        });
        tl.to(".com", { duration: -1, y: "-100%" });
      } else {
        tl.to(".com", {
          duration: 0.8,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",

          ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          y: "-100%",
        });
        tl.to(".aca", { duration: -1, y: "-200%" });
      }
      tl.to(".tech2", {
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        y: "-200%",
        textShadow: isMobile() ? "" : "8px 8px 8px rgba(0, 0, 0, 0.2)",
      }).to(".tech", {
        delay: -0.5,
        duration: 0.8,
        ease: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        y: "-200%",
        textShadow: isMobile() ? "" : "8px 8px 8px rgba(0, 0, 0, 0.2)",
      });
    }
  }, [prtitle]);

  return (
    <>
      <div
        className={`com -translate-y-full text-right text-com-0
           tracking-widest `}
      >
        COM & EVENTS
      </div>
      <div
        className={`aca text-center  msm:text-right -translate-y-[200%]
        text-aca-0   tracking-widest`}
      >
        ACADEMY
      </div>

      <div
        className={`tech  text-right -translate-y-[300%]
         text-tech-0   tracking-widest `}
      >
        TECHNOLOGY
      </div>
      <div
        className={`tech2  text-right -translate-y-[400%]
         text-tech-0   tracking-widest `}
      >
        SERVICES
      </div>
    </>
  );
}

export default Title;
