import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const slideRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const commonScroll = {
        trigger: ".sliderSection",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      };

      const strips = gsap.utils.toArray(".strip");

      strips.forEach((strip) => {
        if (strip.classList.contains("slide3")) {
          gsap.fromTo(
            strip,
            { xPercent: 40 },
            { xPercent: -40, ease: "none", scrollTrigger: commonScroll }
          );
        } else if (strip.classList.contains("slide2")) {
          gsap.to(strip, {
            xPercent: 30,
            ease: "none",
            scrollTrigger: commonScroll,
          });
        } else {
          gsap.to(strip, {
            xPercent: -30,
            ease: "none",
            scrollTrigger: commonScroll,
          });
        }
      });
    }, slideRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={slideRef} className="overflow-hidden pt-40 pb-20 relative">
      <div className="sliderSection  Slider w-full relative text-white flex gap-10">
        <div className="w-[37%] z-10 pt-12 px-10">
          <div className="text-[2.3rem] font-bold google-sans-flex py-3 leading-[2.5rem]">
            <h1>Design that speaks.</h1>
            <h1>Delivery that converts.</h1>
          </div>
          <div className="py-3 ">
            <p className="MyFont text-[1.2rem] tracking-tight leading-[1.7rem] text-[#C2C2C2]">
              Visuvate crafts focused digital experiences that captivate
              audiences and drive growth. Combining bold design with smart
              strategy, we elevate your brand to win and convert—seamlessly.
            </p>
          </div>
          <div className="flex gap-4 capitalize font-normal py-5">
            <div className="rounded-md px-4 py-[0.3rem] text-md border-none text-black bg-[#CCCCCC]">
              about us
            </div>
            <div className="rounded-md px-4 py-[0.3rem] text-md border-none text-white bg-[#1A1A1A]">
              See our work
            </div>
          </div>
        </div>

        <div className="w-[63%] relative overflow-hidden z-0">
          <div className="slide1 strip flex h-65">
            <img className="child1" src="../../assets/Img12.png" alt="" />
            <img className="child1" src="../../assets/Img11.png" alt="" />
            <img className="child1" src="../../assets/Img13.png" alt="" />
            <img className="child1" src="../../assets/Img14.png" alt="" />
            <img className="child1" src="../../assets/Img15.png" alt="" />
          </div>
          <div className="slide2 strip flex h-65 ">
              <img className="child2" src="../../assets/Img15.png" alt="" />
            <img className="child2" src="../../assets/img1.png" alt="" />
            <img className="child2" src="../../assets/Img11.png" alt="" />
            <img className="child2" src="../../assets/Img13.png" alt="" />
            <img className="child2" src="../../assets/Img14.png" alt="" />
          
          </div>
        </div>
      </div>
      <div className="slide3 strip flex h-65 relative overflow-hidden">
        <img className="child3" src="../../assets/Img17.png" alt="" />
        <img className="child3" src="../../assets/img2.png" alt="" />
        <img className="child3" src="../../assets/Img3.png" alt="" />
        <img className="child3" src="../../assets/Img8.png" alt="" />
      </div>
    </div>
  );
};

export default Slider;
