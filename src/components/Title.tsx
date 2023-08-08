import { gsap } from "gsap";
import { useEffect, useState } from "react";

interface props {
  prtitle: string;
  Style: string;
}
function Title({ prtitle, Style }: props) {
  const [title, setTitle] = useState(prtitle);
  useEffect(() => {
    // gsap.to(".title", { y: 0 });
    // gsap.to(".title", { duration: 1, y: -100 });
    setTitle(prtitle);
  }, [prtitle]);

  return (
    <>
      <div className={`title ${Style} `}>{title}</div>
    </>
  );
}

export default Title;
