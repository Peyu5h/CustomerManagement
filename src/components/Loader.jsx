import { useEffect, useState } from "react";
import gsap, { CSSPlugin, Expo } from "gsap";

gsap.registerPlugin(CSSPlugin);

const Loader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .from(".content", {
        opacity: 1,
        x: "-100%",
        width: "100%",
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to(".content", {
        opacity: 1,
        x: "0%",
        scaleX: 1,
        width: "100%",
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

  return (
    <div className="loader-container">
      <div className="relative w-screen h-screen text-[#000000]">
        <div className="h-full w-full bg-[#121212] flex absolute items-center justify-center">
          <div className="follow absolute bg-[#f48049] h-[2px] w-0 l-0 z-2"></div>
          <div
            className="hide absolute left-0 bg-[#fff] h-[2px] w-0 transition duration-400 ease-out"
            id="progress-bar"
            style={{ width: counter + "%" }}
          ></div>
          <div
            id="count"
            className="hide absolute text-lg text-[#fff] translate-y-[-15px]"
          >
            <h4 className=""></h4>
          </div>
        </div>

        <div className="content  bg-[#121212] z-3 flex justify-center items-center overflow-hidden flex-col text-[#fff] opacity-0"></div>
      </div>
    </div>
  );
};

export default Loader;
