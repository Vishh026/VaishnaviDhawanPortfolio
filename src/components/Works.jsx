
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";



const Works = () => {
   const sectionRef = useRef(null);
   

   gsap.to(".card",{
    y: -180,
    scrollTrigger: {
      trigger: ".wrapper-slider",
      start: "top center",
      end: "bottom center"
    }
    
   })
  

  return (
    <div className="text-white text-center bg-red-700">
      <div className="pt-30 pb-56">
        <h1 className="work-h1 ">
          Our <span>Works</span>
        </h1>
      </div>
    <section ref={sectionRef} className="wrapper-slider py-78">
       {/* <div className="flex flex-col items-center gap-10">
         <div className="box">123</div>
         <div className="box">123</div>
         <div className="box">123</div>
         <div className="box">123</div>
         <div className="box">123</div>
       </div> */}
    </section>
    </div>
  );
};

export default Works;
