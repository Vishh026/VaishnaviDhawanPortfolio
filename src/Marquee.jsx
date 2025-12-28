import React from "react";

const Marquee = () => {
  // •
  const content = [
    "UI/UX Design",
    "Brand Identity",
    "Code Customization",
    "Website Design & Development",
  ];

  return <div className="py-20 my-20 ">
    <div className="marquee ">
    <div className="marquee-track">
        {[...content,...content].map((item,index) => (
            <span className="marquee-item" key={index}>
                {item}
                 <span className="dot">•</span>
            </span>
            
        ))}
    </div>
  </div>
  </div>
};

export default Marquee;
